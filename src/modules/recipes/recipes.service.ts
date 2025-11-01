import { Injectable } from '@nestjs/common';

import { RecipeRepository } from '@/modules/recipes/repositories/recipes.repository';

@Injectable()
export class RecipesService {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  createRecipe() {
    return this.recipeRepository.createRecipe();
  }

  getRecipes() {
    return this.recipeRepository.getRecipes();
  }

  getRecipeById(id: string) {
    return this.recipeRepository.getRecipeById(id);
  }

  deleteRecipe(id: string) {
    return this.recipeRepository.deleteRecipe(id);
  }
}
