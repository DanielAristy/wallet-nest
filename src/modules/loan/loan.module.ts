import { Module } from '@nestjs/common';
import { LoanController } from './controller/loan/loan.controller';
import { LoanService } from './services/loan.service';

@Module({
  controllers: [LoanController],
  providers: [LoanService]
})
export class LoanModule {}
