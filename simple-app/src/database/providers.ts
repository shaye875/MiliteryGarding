import { Sequelize } from 'sequelize-typescript';
import { Assignment } from 'src/assignment/entities/assignment.entity';
import { Shift } from 'src/shifts/shift.model';
import { Users } from 'src/users/user.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'test',
      });
      sequelize.addModels([Users,Shift,Assignment]);
      await sequelize.sync();
      return sequelize;
    },
  },
]