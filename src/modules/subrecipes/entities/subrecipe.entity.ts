import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Recipe } from '@/modules/recipes/entities/recipe.entity';

@Entity('sub_recipes')
export class SubRecipe {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string;

    @Column({ name: 'recipe_id', length: 100 })
    recipeId: string;

    @Column({ name: 'step', type: 'int' })
    step: number;

    @Column({ name: 'value', length: 100 })
    value: string;

    @ManyToOne(() => Recipe, (recipe) => recipe.subRecipes, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'recipe_id' })
    recipe: Recipe;
}
