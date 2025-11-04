import { IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class CreateIngredientDto {
    @IsUUID()
    @IsNotEmpty()
    recipeId: string;

    @IsUUID()
    @IsOptional()
    subRecipeId?: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    amount: string;
}
