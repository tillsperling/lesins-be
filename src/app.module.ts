import * as path from 'path';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';

import { IngredientsModule } from '@/modules/ingredients/ingredients.module';
import { InstructionsModule } from '@/modules/instructions/instructions.module';
import { RecipesModule } from '@/modules/recipes/recipes.module';
import { SubrecipesModule } from '@/modules/subrecipes/subrecipes.module';

config({ path: path.resolve(process.cwd(), '.env') });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || '',
      port: Number(process.env.DB_PORT || '') || 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    RecipesModule,
    SubrecipesModule,
    IngredientsModule,
    InstructionsModule,
  ],
})
export class AppModule {}
