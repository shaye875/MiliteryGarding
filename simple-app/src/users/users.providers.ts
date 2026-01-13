import { Users } from "./user.model"

export const usersProviders = [
    {
        provide: "USERS_REPOSITORY",
        useValue:Users
    }
]