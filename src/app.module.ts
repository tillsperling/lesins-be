import { join } from 'path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

import { AuthModule } from '@/modules/auth/auth.module';
import { RecipesModule } from '@/modules/recipes/recipes.module';

dotenv.config();

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
        ServeStaticModule.forRoot({
            rootPath: process.env.UPLOAD_DIR || join(__dirname, '..', '..', 'uploads'),
            serveRoot: process.env.STATIC_PREFIX || '/uploads',
        }),
        RecipesModule,
        AuthModule,
    ],
})
export class AppModule {}
