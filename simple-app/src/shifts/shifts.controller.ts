import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { ShiftService } from './shift.service';
import { CreateShiftDto } from './create-shift.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('shifts')
export class ShiftsController {
    constructor(private shiftService: ShiftService) { }
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    @Post()
    async create(@Body(ValidationPipe) shift: CreateShiftDto) {
        return await this.shiftService.register(shift)
    }

    @UseGuards(AuthGuard)
    @Get()
    getAll() {
        return this.shiftService.findAll()
    }

    @UseGuards(AuthGuard)
    @Put(':id')
    async update(@Param('id')id:string,@Body() body:object){
        return this.shiftService.update(Number(id),body)
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async delete(@Param('id')id:string){
         return await this.shiftService.remove(Number(id))
    }
}
    