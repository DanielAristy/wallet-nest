
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ClientEntity } from 'src/common/postgres/entities/ClientEntity';
import { DataSource } from 'typeorm';

@Injectable()
export class ClientService {
    constructor(private dataSource: DataSource ){}
    async saveClient(client: ClientEntity) : Promise<ClientEntity>{
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
        const newClient = await queryRunner.manager.save(client);
        await queryRunner.commitTransaction();
        return Promise.resolve(newClient);
        } catch (err) {
            await queryRunner.rollbackTransaction();
            throw new HttpException(
                'Tenemos problemas para insertar el cliente',
                HttpStatus.CONFLICT,
            );
        }
    }
}
