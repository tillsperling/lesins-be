import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Instruction } from '@/modules/instructions/entities/instruction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Instruction])],
  controllers: [],
  providers: [],
})
export class InstructionsModule {}
