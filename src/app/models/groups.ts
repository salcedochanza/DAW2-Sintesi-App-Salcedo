export class Groups {
    private _id: string;
    private _name: string;
    private _description: string;

    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get description(): string {
        return this._description;
    }

    set id(id:string){
        this._id = id;
    }
    set name(name:string){
        this._name = name;
    }
    set description(description:string){
        this._description = description;
    }
}
