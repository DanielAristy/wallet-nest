import { LoanService } from './../../services/loan.service';
import { Controller, Post, Body } from '@nestjs/common';
import { MovementCreateDto } from '../../../../common/dto/movement-create.dto';

@Controller('/api/v1/')
export class LoanController {
    constructor(private readonly service: LoanService ) {}
    @Post('loan')
    async makeCredit(@Body() movement: MovementCreateDto){
        return this.service.createMovement(movement);
    }
}
