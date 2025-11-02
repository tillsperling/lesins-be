import { Injectable } from '@nestjs/common';

import { CreateRecipeDto } from '@/modules/recipes/dto/create-recipe-dto';
import { RecipeRepository } from '@/modules/recipes/repositories/recipes.repository';

@Injectable()
export class RecipesService {
    constructor(private readonly recipeRepository: RecipeRepository) {}

    createRecipe(dto: CreateRecipeDto) {
        return this.recipeRepository.createRecipe(dto);
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
