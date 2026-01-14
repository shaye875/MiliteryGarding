import { Column, Model, Table } from 'sequelize-typescript'

enum Soldjer{
    soldjer = "soldjer",
    comand = "comander"
}

@Table
export class Users extends Model {
    @Column
    username: string
    
    @Column
    email:string

    @Column
    password:string

    @Column
    role:Soldjer
}