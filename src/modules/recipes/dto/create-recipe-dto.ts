import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRecipeDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    // TODO: add ingredients and instructions and subrecipe to be part of the create recipe dto
}
