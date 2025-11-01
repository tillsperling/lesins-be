import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Recipe } from '@/modules/recipes/entities/recipe.entity';

@Entity('ingredients')
export class Ingredient {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ name: 'recipe_id' })
  recipeId: string;

  @Column({ name: 'name', length: 100 })
  name: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'recipe_id' })
  recipe: Recipe;
}
