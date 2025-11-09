import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ingredient } from '@/modules/recipes/entities/ingredient.entity';
import { Instruction } from '@/modules/recipes/entities/instruction.entity';
import { Recipe } from '@/modules/recipes/entities/recipe.entity';
import { SubRecipe } from '@/modules/recipes/entities/subrecipe.entity';
import { RecipesController } from '@/modules/recipes/recipes.controller';
import { RecipesService } from '@/modules/recipes/recipes.service';
import { RecipeRepository } from '@/modules/recipes/repositories/recipes.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Recipe, SubRecipe, Ingredient, Instruction])],
    controllers: [RecipesController],
    providers: [RecipesService, RecipeRepository],
})
export class RecipesModule {}
