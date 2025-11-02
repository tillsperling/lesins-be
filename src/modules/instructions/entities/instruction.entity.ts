import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Recipe } from '@/modules/recipes/entities/recipe.entity';

@Entity('instructions')
export class Instruction {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string;

    @Column({ name: 'recipe_id' })
    recipeId: string;

    @Column({ name: 'sub_recipe_id' })
    subRecipeId: string;

    @Column({ name: 'step' })
    step: number;

    @Column({ name: 'value', length: 255 })
    value: string;

    @ManyToOne(() => Recipe, (recipe) => recipe.instructions, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'recipe_id' })
    recipe: Recipe;

    @JoinColumn({ name: 'sub_recipe_id' })
    subRecipe: Recipe;
}
