import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('recipes')
export class RecipesController {
  @Post()
  createRecipe() {
    return 'Create a recipe';
  }

  @Get()
  getRecipes() {
    return 'Get all recipes';
  }

  @Get(':id')
  getRecipeById() {
    return 'Get a recipe by id';
  }

  @Delete(':id')
  deleteRecipe() {
    return 'Delete a recipe';
  }
}
