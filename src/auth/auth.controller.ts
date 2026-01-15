
import { Body, Controller, Post, HttpCode, HttpStatus, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './create-user.dto';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body(ValidationPipe) signInDto: CreateAuthDto) {
    return this.authService.signIn(signInDto.id,signInDto.username, signInDto.password,signInDto.role);
  }
}