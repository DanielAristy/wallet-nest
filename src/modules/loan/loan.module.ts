import { AccountService } from './../account/services/account.service';
import { MovementEntity } from './../../common/postgres/entities/MovementEntity';
import { Module } from '@nestjs/common';
import { LoanController } from './controller/loan/loan.controller';
import { LoanService } from './services/loan.service';
import { AccountEntity } from '../../common/postgres/entities/AccountEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from '../account/account.module';

@Module({
  controllers: [LoanController],
  providers: [LoanService, AccountService],
  imports: [
    TypeOrmModule.forFeature([AccountEntity, MovementEntity]),
    AccountModule
  ]
  
})
export class LoanModule {}
