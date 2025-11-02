import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
