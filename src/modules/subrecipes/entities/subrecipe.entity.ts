import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Recipe } from '@/modules/recipes/entities/recipe.entity';

@Entity('subRecipes')
export class SubRecipe {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string;

    @Column({ name: 'recipe_id' })
    recipeId: string;

    @Column({ name: 'name', length: 100 })
    name: string;

    @ManyToOne(() => Recipe, (recipe) => recipe.subRecipes, {
        onDelete: 'CASCADE',
    })
    recipe: Recipe;
}
