import { Module } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { AssignmentController } from './assignment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Assignment } from './entities/assignment.entity';
import { DatabaseModule } from 'src/database/module';
import { AssigmentProviders } from './assigment.provides';

@Module({
  imports:[SequelizeModule.forFeature([Assignment]),DatabaseModule],
  providers:[AssignmentService,...AssigmentProviders],
  controllers: [AssignmentController],
  exports:[AssignmentService,SequelizeModule]
})
export class AssignmentModule {}
