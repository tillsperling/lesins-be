import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CreateRecipeDto } from '@/modules/recipes/dto/create-recipe-dto';
import { RecipesService } from '@/modules/recipes/recipes.service';

@Controller('recipes')
export class RecipesController {
    constructor(private readonly recipesService: RecipesService) {}

    @UseGuards(AuthGuard('jwt'))
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

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteRecipe(@Param('id') id: string) {
        return this.recipesService.deleteRecipe(id);
    }
}
