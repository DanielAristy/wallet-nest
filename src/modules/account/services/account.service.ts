import { AccountEntity } from './../../../common/postgres/entities/AccountEntity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAccountDto } from '../../../common/dto/account-update.dto';

@Injectable()
export class AccountService {
    constructor(
        @InjectRepository(AccountEntity)
        private readonly accountRepository: Repository<AccountEntity>,
      ) {}

    async getAccountById( id: string): Promise<AccountEntity>{
        const account = await this.accountRepository.findOne({
            where: { id }
        })

        return Promise.resolve( account );
    }
    async updateAccount(account: UpdateAccountDto){
        console.log(account.id);
        const accountEntity = await this.getAccountById( account.id );
        accountEntity.balance = account.balance;
        accountEntity.credit = account.credit;
        accountEntity.state = account.state;
        accountEntity.updatedAt = new Date(Date.now());
        const updateAccount = this.accountRepository.save(accountEntity);
        return Promise.resolve( updateAccount );
    }
}
