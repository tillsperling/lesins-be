import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubRecipe } from '@/modules/subrecipes/entities/subrecipe.entity';

@Module({
    imports: [TypeOrmModule.forFeature([SubRecipe])],
    controllers: [],
    providers: [],
})
export class SubRecipesModule {}
