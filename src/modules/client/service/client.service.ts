
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
            console.log(err);
            await queryRunner.rollbackTransaction();
            throw new HttpException(
                'Tenemos problemas para insertar el cliente',
                HttpStatus.CONFLICT,
            );            
        }
    }

    async getByEmail(email: string): Promise<ClientEntity> {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
    
        const client = await queryRunner.manager.findOne(ClientEntity, {
          where: {email},
          relations: {app:true, account:true},
        });
    
        if (!client) {
            console.log(client);
          throw new HttpException(
            'No existe el cliente con el email ' + email,
            HttpStatus.NOT_FOUND,
          );
          
          
        }
        return Promise.resolve(client);
    }
}
