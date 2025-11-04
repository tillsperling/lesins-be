import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateSubRecipeDto {
    @IsNotEmpty()
    @IsUUID()
    recipeId: string;

    @Type(() => Number)
    @IsInt()
    @IsNotEmpty()
    step: number;

    @IsString()
    @IsNotEmpty()
    value: string;
}
