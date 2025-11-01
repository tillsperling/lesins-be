import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { Recipe } from '@/modules/recipes/entities/recipe.entity';

@Injectable()
export class RecipeRepository extends Repository<Recipe> {
  constructor(private readonly dataSource: DataSource) {
    super(Recipe, dataSource.createEntityManager());
  }

  async createRecipe() {}

  async getRecipes() {}

  getRecipeById(id: string) {}

  deleteRecipe(id: string) {}
}
