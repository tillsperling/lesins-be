import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class NestedSubRecipeDto {
    @IsString() @IsNotEmpty() tempId: string;
    @IsString() @IsNotEmpty() value: string;
    @IsInt() @Min(1) step: number;
}

export class NestedIngredientDto {
    @IsString() @IsNotEmpty() @MaxLength(100) name: string;
    @IsString() @IsNotEmpty() @MaxLength(100) amount: string;
    @IsString() @IsNotEmpty() @MaxLength(20) unit: string;
    @IsOptional() @IsString() subRecipeRef?: string;
}

export class NestedInstructionDto {
    @IsInt() @Min(1) step: number;
    @IsString() @IsNotEmpty() @MaxLength(255) value: string;
    @IsOptional() @IsString() subRecipeRef?: string;
}
