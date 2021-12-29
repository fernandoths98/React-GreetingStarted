import { Role } from './role';
export class User {
    constructor (
    public id = 0,
    public firstName = '',
    public lastName  = '',
    public email = '',
    public role: Role = new Role()
    
    ){
    }

    get name() {
        return this.firstName + ' ' + this.lastName;
    }

    
}