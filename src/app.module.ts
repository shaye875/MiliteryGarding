import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { shiftModule } from './shifts/shifts.module';
import { AssignmentModule } from './assignment/assignment.module';
import { LoggerMiddleware } from './auth/middleware/logger.middleware';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users/user.model'
import { Shift } from './shifts/shift.model';

@Module({
  imports: [ UsersModule, AuthModule, shiftModule, AssignmentModule, SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test',
    models: [Users,Shift],
  }), AssignmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('users')
  }
}
