import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Recipe } from '@/modules/recipes/entities/recipe.entity';
import { RecipesController } from '@/modules/recipes/recipes.controller';
import { RecipesService } from '@/modules/recipes/recipes.service';
import { RecipeRepository } from '@/modules/recipes/repositories/recipes.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Recipe])],
    controllers: [RecipesController],
    providers: [RecipesService, RecipeRepository],
})
export class RecipesModule {}
