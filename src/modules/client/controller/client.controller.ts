import { ClientCreateDto } from './../../../common/dto/client-create.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { ClientEntity } from '../../../common/postgres/entities/ClientEntity';
import { ClientService } from '../service/client.service';

@Controller('/api/v1/')
export class ClientController {
    constructor(private service: ClientService) {}

  @Post('client')
  async create(@Body() clientDto: ClientCreateDto): Promise<ClientEntity>{
    const clientEntity = new ClientEntity(clientDto);
    return this.service.saveClient(clientEntity);
  }
}
