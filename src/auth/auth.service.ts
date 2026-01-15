import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    id:string,
    username: string,
    password:string,
    role: string
  ): Promise<{ access_token: string }>{
    const data = await this.usersService.findOne(Number(id))
    const user = data?.dataValues
    
    if(user?.password && !await bcrypt.compare(password,user.password)){
          throw new Error("password not true")
    }
    console.log(user);
    
    if (user?.role !== role) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.username, rool: user.role }
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}