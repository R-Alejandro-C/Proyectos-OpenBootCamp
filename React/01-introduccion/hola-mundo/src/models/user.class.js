import { ROLES } from "./roles"

export class User {
    userName = ""
    email = ""
    password = ""
    rol = ROLES.USER

    constructor(userName,
        email,
        password,
        rol) {
        this.userName = userName
        this.email = email
        this.password = password
        this.rol = rol
    }
}