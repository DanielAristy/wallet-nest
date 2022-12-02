import { TokenEntity } from './common/postgres/entities/TokenEntity';
import { MovementEntity } from './common/postgres/entities/MovementEntity';
import { ClientEntity } from './common/postgres/entities/ClientEntity';
import { AppEntity } from './common/postgres/entities/AppEntity';
import { AccountEntity } from './common/postgres/entities/AccountEntity';
import { AppService } from './modules/main/service/app.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './modules/main/controller/app.controller';
import { ClientModule } from './modules/client/client.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'postgres',
      entities: [AccountEntity, AppEntity, ClientEntity, MovementEntity, TokenEntity],
      synchronize: false,
    }),
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
