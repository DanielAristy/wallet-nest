import { AccountEntity } from './../../common/postgres/entities/AccountEntity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountController } from './controller/account/account.controller';
import { AccountService } from './services/account.service';

@Module({
  controllers: [AccountController],
  providers: [AccountService],
  imports: [
    TypeOrmModule.forFeature([AccountEntity]),
  ]
})
export class AccountModule {}
