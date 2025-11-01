import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RecipesService } from '@/modules/recipes/recipes.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [],
  providers: [RecipesService],
  exports: [],
})
export class RecipesModule {}
