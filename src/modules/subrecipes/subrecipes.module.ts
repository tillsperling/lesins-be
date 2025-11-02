import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([SubRecipe])],
    controllers: [],
    providers: [],
})
export class SubRecipesModule {}
