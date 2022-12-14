import { MovementCreateDto } from './movement-create.dto';
import { AccountEntity } from 'src/common/postgres/entities/AccountEntity';
export class AccountDto {
    id: string;
  idClient: string;
  balance: string;
  credit: string;
  state: number;
  movements: MovementCreateDto [];
  constructor(account:AccountEntity) {
    this.id = account.id;
    this.idClient = account.idClient;
    this.balance = account.balance;
    this.credit = account.credit;
    this.state = account.state;
    const incomes = account.movementsIncome;
    const outcomes = account.movementsOutcome;
    const ids = new Set(incomes.map((element) => element.id));
    const transactions: MovementCreateDto[] = [
      ...incomes,
      ...outcomes.filter((item) => !ids.has(item.id)),
    ];
    this.movements = transactions;
  }
}