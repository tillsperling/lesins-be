import { MaxLength } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Recipe } from '@/modules/recipes/entities/recipe.entity';
import { SubRecipe } from '@/modules/subrecipes/entities/subrecipe.entity';

@Entity('ingredients')
export class Ingredient {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string;

    @Column({ name: 'recipe_id', length: 100 })
    recipeId: string;

    @Column({ name: 'sub_recipe_id', length: 100, nullable: true })
    subRecipeId: string | null;

    @MaxLength(100)
    @Column({ name: 'name', length: 100 })
    name: string;

    @MaxLength(100)
    @Column({ name: 'amount', length: 100 })
    amount: string;

    @ManyToOne(() => Recipe, (recipe) => recipe.ingredients, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'recipe_id' })
    recipe: Recipe;

    @ManyToOne(() => SubRecipe, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'sub_recipe_id' })
    subRecipe: SubRecipe | null;
}
