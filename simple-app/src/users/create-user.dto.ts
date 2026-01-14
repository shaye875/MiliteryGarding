import { IsString } from 'class-validator'

enum Soldjer{
    soldjer = "soldjer",
    comand = "comander"
}

export class CreateUserDto {

    @IsString()
    username: string;

    @IsString()
    email: string;

    @IsString()
    password: string

    @IsString()
    role: Soldjer
}     