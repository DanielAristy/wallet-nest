import { Injectable, Inject } from '@nestjs/common';
import { MovementCreateDto } from '../../../common/dto/movement-create.dto';
import { MovementEntity } from '../../../common/postgres/entities/MovementEntity';
import { AccountService } from '../../account/services/account.service';

@Injectable()
export class LoanService {
    //constructor(private movementRepository: Repository<MovementEntity>  ){}
    constructor(
        @Inject(AccountService)
        private readonly accountService: AccountService
    ) {}
    async createMovement(movement: MovementCreateDto){
        const movementEntity = new MovementEntity(movement);
        if (movement.idIncome === movement.idOutcome) {
            const account = await this.accountService.getAccountById(movement.idIncome ?? movement.idOutcome);
            console.log("Account", account);
        }
        return movementEntity;
        //return this.movementRepository.save(movementEntity);
    }
}
