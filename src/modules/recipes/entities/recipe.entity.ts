import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Ingredient } from '@/modules/ingredients/entities/ingredient.entity';
import { Instruction } from '@/modules/instructions/entities/instruction.entity';
import { Subrecipe } from '@/modules/subrecipes/entities/subrecipe.entity';

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

  @OneToMany(() => Subrecipe, (subrecipe) => subrecipe.recipe)
  subrecipes: Subrecipe[];

  @OneToMany(() => Ingredient, (ingredient) => ingredient.recipe)
  ingredients: Ingredient[];

  @OneToMany(() => Instruction, (instruction) => instruction.recipe)
  instructions: Instruction[];
}
