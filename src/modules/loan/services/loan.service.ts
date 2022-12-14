import { Injectable } from '@nestjs/common';
//import { Repository } from 'typeorm';
import { MovementCreateDto } from '../../../common/dto/movement-create.dto';
import { MovementEntity } from '../../../common/postgres/entities/MovementEntity';

@Injectable()
export class LoanService {
    //constructor(private movementRepository: Repository<MovementEntity>  ){}
    async createMovement(movement: MovementCreateDto){
        const movementEntity = new MovementEntity(movement);
        if (movement.idIncome === movement.idOutcome) {
            console.log("Aqui fue jaja");
            
        }
        return movementEntity;
        //return this.movementRepository.save(movementEntity);
    }
}
