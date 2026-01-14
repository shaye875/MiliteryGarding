import { Module } from '@nestjs/common';
import { ShiftsController } from './shifts.controller';
import { DatabaseModule } from 'src/database/module';
import { ShiftService } from './shift.service';
import { shiftProviders } from './shift.provide';
import { SequelizeModule } from '@nestjs/sequelize';
import { Shift } from './shift.model';

@Module({
  imports: [SequelizeModule.forFeature([Shift]),DatabaseModule],
  providers: [ShiftService,...shiftProviders],
  controllers:[ShiftsController],
  exports: [ShiftService,SequelizeModule]
})
export class shiftModule {}

