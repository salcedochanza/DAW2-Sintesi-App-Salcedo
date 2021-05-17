export class User {
    private _userId: string;
    private _username: string;
    private _email: string;
    private _firstName: string;
    private _lastName: string;
    private _phone: number;

    constructor(){}

    get userId(): string {
        return this._userId;
    }
    get username(): string {
        return this._username;
    }
    get email(): string {
        return this._email;
    }
    get firstName(): string {
        return this._firstName;
    }
    get lastName(): string {
        return this._lastName;
    }
    get phone(): number {
        return this._phone;
    }

    set userId(userId:string){
        this._userId = userId;
    }
    set username(username:string){
        this._username = username;
    }
    set email(email:string){
        this._email = email;
    }
    set firstName(firstName:string){
        this._firstName = firstName;
    }
    set lastName(lastName:string){
        this._lastName = lastName;
    }
    set phone(phone:number){
        this._phone = phone;
    }
}
