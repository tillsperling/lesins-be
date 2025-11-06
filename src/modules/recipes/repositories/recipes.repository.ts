import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { Ingredient } from '@/modules/ingredients/entities/ingredient.entity';
import { Instruction } from '@/modules/instructions/entities/instruction.entity';
import { CreateRecipeDto } from '@/modules/recipes/dto/create-recipe-dto';
import { Recipe } from '@/modules/recipes/entities/recipe.entity';
import { SubRecipe } from '@/modules/subrecipes/entities/subrecipe.entity';

@Injectable()
export class RecipeRepository extends Repository<Recipe> {
    constructor(private readonly dataSource: DataSource) {
        super(Recipe, dataSource.createEntityManager());
    }

    async createRecipe(dto: CreateRecipeDto) {
        return this.dataSource.transaction(async (em) => {
            const recipe = em.create(Recipe, {
                name: dto.name,
                description: dto.description ?? '',
            });
            await em.save(recipe);

            const subIdByTemp: Record<string, string> = {};
            if (dto.subRecipes?.length) {
                const toSave = dto.subRecipes.map((subRecipe) =>
                    em.create(SubRecipe, {
                        recipeId: recipe.id,
                        step: subRecipe.step,
                        value: subRecipe.value,
                    }),
                );
                const saved = await em.save(SubRecipe, toSave);
                saved.forEach((sub, i) => {
                    const tempId = dto.subRecipes![i].tempId;
                    subIdByTemp[tempId] = sub.id;
                });
            }

            if (dto.ingredients?.length) {
                await em.save(
                    Ingredient,
                    dto.ingredients.map((ingredient) =>
                        em.create(Ingredient, {
                            recipeId: recipe.id,
                            subRecipeId: ingredient.subRecipeRef
                                ? (subIdByTemp[ingredient.subRecipeRef] ?? null)
                                : null,
                            name: ingredient.name,
                            amount: ingredient.amount,
                        }),
                    ),
                );
            }

            if (dto.instructions?.length) {
                await em.save(
                    Instruction,
                    dto.instructions.map((instruction) =>
                        em.create(Instruction, {
                            recipeId: recipe.id,
                            subRecipeId: instruction.subRecipeRef
                                ? (subIdByTemp[instruction.subRecipeRef] ?? null)
                                : null,
                            step: instruction.step,
                            value: instruction.value,
                        }),
                    ),
                );
            }

            return em.findOne(Recipe, {
                where: { id: recipe.id },
                relations: { subRecipes: true, ingredients: true, instructions: true },
            });
        });
    }

    async getRecipes() {
        return this.find();
    }

    getRecipeById(id: string) {
        return this.findOne({ where: { id } });
    }

    deleteRecipe(id: string) {
        return this.delete({ id });
    }
}
