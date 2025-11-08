import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Recipe } from '@/modules/recipes/entities/recipe.entity';
import { SubRecipe } from '@/modules/recipes/entities/subrecipe.entity';

@Entity('instructions')
export class Instruction {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string;

    @Column({ name: 'recipe_id', length: 100 })
    recipeId: string;

    @Column({ name: 'sub_recipe_id', nullable: true, length: 100 })
    subRecipeId: string | null;

    @Column({ name: 'step', type: 'int' })
    step: number;

    @Column({ name: 'value', length: 255 })
    value: string;

    @ManyToOne(() => Recipe, (recipe) => recipe.instructions, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'recipe_id' })
    recipe: Recipe;

    @ManyToOne(() => SubRecipe, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'sub_recipe_id' })
    subRecipe: SubRecipe | null;
}
