import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';

import {
    NestedIngredientDto,
    NestedInstructionDto,
    NestedSubRecipeDto,
} from '@/modules/recipes/dto/create-recipe-nested.dtos';

export class CreateRecipeDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => NestedSubRecipeDto)
    subRecipes?: NestedSubRecipeDto[];

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => NestedIngredientDto)
    ingredients?: NestedIngredientDto[];

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => NestedInstructionDto)
    instructions?: NestedInstructionDto[];
}
