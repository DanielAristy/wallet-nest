import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovementCreateDto } from '../../../common/dto/movement-create.dto';
import { MovementEntity } from '../../../common/postgres/entities/MovementEntity';
import { AccountService } from '../../account/services/account.service';

@Injectable()
export class LoanService {
    constructor(
        @InjectRepository(MovementEntity)
        private readonly movementService: Repository<MovementEntity>,
        @Inject(AccountService)
        private readonly accountService: AccountService
    ) {}
    async createMovement(movement: MovementCreateDto){
        const movementEntity = new MovementEntity(movement);
        if (movement.idIncome === movement.idOutcome) {
            const account = await this.accountService.getAccountById(movement.idIncome ?? movement.idOutcome);
            const balance = Number(account.balance) + Number(movement.amount);
            account.balance = balance.toString();
            const credit = Number(account.credit) - Number(movement.amount)
            account.credit = credit.toString();
            account.updatedAt = new Date(Date.now())
            await this.accountService.updateAccount(account)
        }
        return this.movementService.save(movementEntity);
    }
}
