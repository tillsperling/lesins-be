import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { CreateRecipeDto } from '@/modules/recipes/dto/create-recipe-dto';
import { Recipe } from '@/modules/recipes/entities/recipe.entity';

@Injectable()
export class RecipeRepository extends Repository<Recipe> {
    constructor(private readonly dataSource: DataSource) {
        super(Recipe, dataSource.createEntityManager());
    }

    async createRecipe(dto: CreateRecipeDto) {
        const recipe = this.create(dto);
        return this.save(recipe);
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
