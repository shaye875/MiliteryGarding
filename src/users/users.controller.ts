import { Body, Controller, Post, HttpCode, HttpStatus, Request, Get, UseGuards, ValidationPipe, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './create-user.dto';
import { Roles } from 'src/role/role.decorator';
import { Role } from 'src/role/role.enum';
import { RolesGuard } from 'src/role/role.gurd';

@Controller('users')
export class UsersController {
  constructor(private userservis: UsersService) { }
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body(ValidationPipe) user: CreateUserDto) {
    return await this.userservis.register(user)
  }
  
  @Roles(Role.comander)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Get()
  getAll() {
    return this.userservis.findAll()
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async get(@Param()id:string){
    return await this.userservis.findOne(Number(id))
  }
}
