import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateIngredientDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description: string;
}
