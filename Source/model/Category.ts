export class Category{
    private _name : string;
    private _number : number;

    constructor(name : string, number : number){
        this._name = name;
        this._number = number;
    }

    public get name() : string {
        return this._name;
    }

    public get number() : number {
        return this._number;
    }
}