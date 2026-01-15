import { IsString,IsInt } from "class-validator";
import { type Soldjer } from "src/users/create-user.dto";

export class CreateAuthDto {

    @IsInt()
    id:string

    @IsString()
    username: string;

    @IsString()
    email: string;

    @IsString()
    password: string

    @IsString()
    role: Soldjer
}     