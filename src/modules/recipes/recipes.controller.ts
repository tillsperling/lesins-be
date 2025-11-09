import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import multer, { diskStorage } from 'multer';

import { CreateRecipeDto } from '@/modules/recipes/dto/create-recipe-dto';
import { RecipesService } from '@/modules/recipes/recipes.service';

@Controller('recipes')
export class RecipesController {
    constructor(private readonly recipesService: RecipesService) {}

    @UseGuards(AuthGuard('jwt'))
    @Post()
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: 'uploads/recipes',
                filename: (req, file, cb) => {
                    if (!file?.originalname) {
                        return cb(new Error('Invalid file'), '');
                    }
                    const safeName = Date.now() + '-' + file.originalname.replace(/\s+/g, '_');
                    cb(null, safeName);
                },
            }),
            limits: { fileSize: 5 * 1024 * 1024 },
            fileFilter: (
                req: Express.Request,
                file: Express.Multer.File,
                cb: multer.FileFilterCallback,
            ) => {
                const allowed = ['image/jpeg', 'image/png', 'image/webp'];
                if (allowed.includes(file.mimetype)) cb(null, true);
                else cb(new Error('Invalid file type'));
            },
        }),
    )
    async create(@Body() body: CreateRecipeDto, @UploadedFile() file?: Express.Multer.File) {
        const imageUrl = file ? `/uploads/recipes/${file.filename}` : '';
        return this.recipesService.createRecipe({ ...body, imageUrl });
    }

    @Get()
    getRecipes() {
        return this.recipesService.getRecipes();
    }

    @Get(':id')
    getRecipeById(@Param('id') id: string) {
        return this.recipesService.getRecipeById(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteRecipe(@Param('id') id: string) {
        return this.recipesService.deleteRecipe(id);
    }
}
