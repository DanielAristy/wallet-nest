import { MovementEntity } from '../postgres/entities/MovementEntity';
export class UpdateAccountDto {
  id: string;
  idClient: string;
  balance: string;
  credit: string;
  state: number;
  movementsIncome: MovementEntity[];
  movementsOutcome: MovementEntity[];
}