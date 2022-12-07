import { Test, TestingModule } from '@nestjs/testing';
import { ClientController } from './client.controller';
import { ClientService } from '../service/client.service';
import { ClientEntity } from '../../../common/postgres/entities/ClientEntity';
import { ClientCreateDto } from '../../../common/dto/client-create.dto';

describe('ClientController', () => {
  let controller: ClientController;
  let service: ClientService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientController],
      providers: [
        {
          provide: ClientService,
          useValue: {
            saveClient: jest.fn()
              .mockImplementation((client: ClientEntity) => {
                return {};
              }),
            getByEmail: jest.fn()
            .mockImplementation((email: string) => {
              return {};
            }),
          }
        }
      ]
    }).compile();

    controller = module.get<ClientController>(ClientController);
    service = module.get<ClientService>(ClientService);
  });


  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create new user', () => {
    const dto = new ClientCreateDto();
    dto.fullName = "Jeronimo Gonsalez";
    dto.email = "jero@gmail.com";
    dto.phone = "3145678907";
    dto.photo = "https://lh3.googleusercontent.com/ogw/AOh-ky1gQ_jNZBwtZTNlcgslDWCLp5xzRWaldvWrPAIX=s32-c-mo";
    const clientEntity = new ClientEntity(dto);
    controller.create(clientEntity);
    expect(service.saveClient).toHaveBeenCalled();

  })

  it('get user by email', () => {
    const email = "jero@gmail.com";
    controller.getByEmail(email);
    expect(service.getByEmail).toHaveBeenCalled();
  })
});
