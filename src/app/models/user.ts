export class User {
    private _userId: string;
    private _username: string;
    private _email: string;
    private _firstName: string;
    private _lastName: string;
    private _phone: number;

    private _groupId: number;
    private _groupName: string;
    private _groupDescription: string;

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
    get groupId(): number {
        return this._groupId;
    }
    get groupName(): string {
        return this._groupName;
    }
    get groupDescription(): string {
        return this._groupDescription;
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
    set groupId(groupId:number){
        this._groupId = groupId;
    }
    set groupName(groupName:string){
        this._groupName = groupName;
    }
    set groupDescription(groupDescription:string){
        this._groupDescription = groupDescription;
    }
}
