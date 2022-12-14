import { AccountDto } from './../../../../common/dto/account.dto';
import { AccountService } from './../../services/account.service';
import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { AccountEntity } from 'src/common/postgres/entities/AccountEntity';
import { UpdateAccountDto } from '../../../../common/dto/account-update.dto';

@Controller('/api/v1')
export class AccountController {
    constructor(private service: AccountService){}
    @Get('account/:id')
    async getAccount(@Param("id") id: string) {
        const account = await this.service.getAccountById(id);
        const accountDto = new AccountDto(account);
        return accountDto;
    }
    @Put('account/')
    async updateAccount(@Body() account: UpdateAccountDto){
        console.log(account);
        return this.service.updateAccount(account)
    }
}
