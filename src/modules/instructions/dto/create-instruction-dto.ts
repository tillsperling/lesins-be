import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength, Min } from 'class-validator';

export class CreateInstructionDto {
    @IsUUID()
    @IsNotEmpty()
    recipeId: string;

    @IsUUID()
    @IsOptional()
    subRecipeId: string | null;

    @Type(() => Number)
    @IsInt()
    @IsNotEmpty()
    @Min(1)
    step: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    value: string;
}
