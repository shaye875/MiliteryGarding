import { Body, Controller, Post, HttpCode, HttpStatus, Request, Get, UseGuards, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userservis: UsersService) { }
  @HttpCode(HttpStatus.OK)
  @Post()
  async create(@Body(ValidationPipe) user: CreateUserDto) {
    return await this.userservis.register(user)
  }

  @UseGuards(AuthGuard)
  @Get()
  getAll() {
    return this.userservis.findAll()
  }
}
