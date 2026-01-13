import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './user.model';
import { DatabaseModule } from 'src/database/module';
import { usersProviders } from './users.providers';

@Module({
  imports: [SequelizeModule.forFeature([Users]),DatabaseModule],
  providers: [UsersService,...usersProviders],
  controllers:[UsersController],
  exports: [UsersService,SequelizeModule]
})
export class UsersModule {}