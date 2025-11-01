import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Subrecipe } from '@/modules/subrecipes/entities/subrecipe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subrecipe])],
  controllers: [],
  providers: [],
})
export class SubrecipesModule {}
