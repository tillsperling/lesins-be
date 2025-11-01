import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ingredient } from '@/modules/ingredients/entities/ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient])],
  controllers: [],
  providers: [],
})
export class IngredientsModule {}
