import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { CreateIngredientDto } from '@/modules/ingredients/dto/create-ingredient-dto';
import { CreateInstructionDto } from '@/modules/instructions/dto/create-instruction-dto';
import { CreateSubRecipeDto } from '@/modules/subrecipes/dto/create-subrecipe-dto';

export class CreateRecipeDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    subRecipes?: CreateSubRecipeDto[];
    ingredients?: CreateIngredientDto[];
    instructions?: CreateInstructionDto[];
}
