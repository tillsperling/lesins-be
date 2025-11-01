import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RecipesController } from '@/modules/recipes/recipes.controller';
import { RecipesService } from '@/modules/recipes/recipes.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}
