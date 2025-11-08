import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Ingredient } from '@/modules/recipes/entities/ingredient.entity';
import { Instruction } from '@/modules/recipes/entities/instruction.entity';
import { SubRecipe } from '@/modules/recipes/entities/subrecipe.entity';

@Entity('recipes')
export class Recipe {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string;

    @Column({ name: 'name', length: 100 })
    name: string;

    @Column({ name: 'description', length: 255 })
    description: string;

    @Column({
        name: 'created',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    created: Date;

    @OneToMany(() => SubRecipe, (subRecipe) => subRecipe.recipe)
    subRecipes: SubRecipe[];

    @OneToMany(() => Ingredient, (ingredient) => ingredient.recipe)
    ingredients: Ingredient[];

    @OneToMany(() => Instruction, (instruction) => instruction.recipe)
    instructions: Instruction[];
}
