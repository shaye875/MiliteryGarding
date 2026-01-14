import { Shift } from "./shift.model"

export const shiftProviders = [
    {
        provide: "SHIFT_REPOSITORY",
        useValue:Shift
    }
]