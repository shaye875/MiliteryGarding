import { Assignment } from "./entities/assignment.entity"

export const AssigmentProviders = [
    {
        provide: "ASSIGMENT_REPOSITORY",
        useValue:Assignment
    }
]