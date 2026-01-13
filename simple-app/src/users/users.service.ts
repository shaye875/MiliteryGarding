import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Users } from './user.model'
import { CreateUserDto } from './create-user.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users)
        private userModel: typeof Users
    ) { }

    async findAll(): Promise<Users[]> {
        return this.userModel.findAll()
    }

    public async findOne(id: number) {
        const find = await this.userModel.findOne({
            where: {
                id,
            }
        })
        return find
    }

    async remove(id: number) {
        const user = await this.findOne(id)
        await user?.destroy()
    }

    async register(user: CreateUserDto) {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(user.password, saltOrRounds)
        user.password = hash
        return await this.userModel.create({...user})
    }
}
