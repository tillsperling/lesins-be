import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreateRecipeDto } from '@/modules/recipes/dto/create-recipe-dto';
import { RecipesService } from '@/modules/recipes/recipes.service';

@Controller('recipes')
export class RecipesController {
    constructor(private readonly recipesService: RecipesService) {}

    @Post()
    createRecipe(@Body() dto: CreateRecipeDto) {
        return this.recipesService.createRecipe(dto);
    }

    @Get()
    getRecipes() {
        return this.recipesService.getRecipes();
    }

    @Get(':id')
    getRecipeById(@Param('id') id: string) {
        return this.recipesService.getRecipeById(id);
    }

    @Delete(':id')
    deleteRecipe(@Param('id') id: string) {
        return this.recipesService.deleteRecipe(id);
    }
}
