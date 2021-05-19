export class Tag {
    private _id: string;
    private _name: string;

    get id(): string {
        return this._id;
    }
    get name(): string {
        return this._name;
    }

    set id(id:string){
        this._id = id;
    }
    set name(name:string){
        this._name = name;
    }
}
