import { ClientCreateDto } from './../../../common/dto/client-create.dto';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ClientEntity } from '../../../common/postgres/entities/ClientEntity';
import { ClientService } from '../service/client.service';

@Controller('/api/v1/')
export class ClientController {
    constructor(private service: ClientService) {}

  @Post('client')
  async create(@Body() clientDto: ClientCreateDto): Promise<ClientEntity>{
    console.log(clientDto);
    const clientEntity = new ClientEntity(clientDto);
    return this.service.saveClient(clientEntity);
  }

  @Get("client/:email")
  async getByEmail(@Param("email") email: string): Promise<ClientEntity>{
    console.log(email);
    return this.service.getByEmail(email);
  }

  @Put("client/:id")
  async getById(@Param("id") email: string): Promise<ClientEntity>{
    console.log(email);
    return this.service.getByEmail(email);
  }
}
