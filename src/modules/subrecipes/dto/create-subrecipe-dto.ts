import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSubRecipeDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description: string;
}
