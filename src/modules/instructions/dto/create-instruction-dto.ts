import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateInstructionDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description: string;
}
