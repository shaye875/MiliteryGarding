import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { Shift } from "./shift.model"
import { CreateShiftDto } from "./create-shift.dto"
import { shiftModule } from "./shifts.module"

@Injectable()
export class ShiftService {
    constructor(
        @InjectModel(Shift)
        private shiftModel: typeof Shift
    ) { }

    async findAll(): Promise<Shift[]> {
        return this.shiftModel.findAll()
    }

    public async findOne(id: number) {
        const find = await this.shiftModel.findOne({
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

    async register(shift: CreateShiftDto) {
        const result = await this.shiftModel.create({...shift})
        
        return result
    }

    async update(id:number,Body:object){
        return await this.shiftModel.update(Body,{
            where:{
                id,
            }
        })
    }
}