import { Column, Model, Table } from 'sequelize-typescript'

@Table
export class Assignment extends Model {
    @Column
    userId: string

    @Column
    shiftId: string
}