import { Injectable } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { Assignment } from './entities/assignment.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AssignmentService {
  constructor(@InjectModel(Assignment)
  private assigmntModel: typeof Assignment) { }

  async create(createAssignmentDto: CreateAssignmentDto) {
    return await this.assigmntModel.create({ ...createAssignmentDto })
  }

  async findAll() {
    return await this.assigmntModel.findAll()
  }

  async findOne(id: number) {
    return await this.assigmntModel.findOne({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateAssignmentDto: object) {
    return await this.assigmntModel.update(updateAssignmentDto, {
      where: {
        id,
      }
    })
  }

  async remove(id: number) {
    const assignment = await this.assigmntModel.findOne({
      where: {
        id,
      }
    })
    await assignment?.destroy()
  }
}
