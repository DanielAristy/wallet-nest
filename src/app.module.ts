import { TokenEntity } from './entities/TokenEntity';
import { MovementEntity } from './entities/MovementEntity';
import { ClientEntity } from './entities/ClientEntity';
import { AppEntity } from './entities/AppEntity';
import { AccountEntity } from './entities/AccountEntity';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'postgres',
      entities: [AccountEntity, AppEntity, ClientEntity, MovementEntity, TokenEntity],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
