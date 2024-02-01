import {Joke} from "./Joke";

export class SampleJoke extends Joke {
    private _id : number;

    constructor(type: string, setup: string, punchline: string, image: string, id: number) {
        super(type, setup, punchline, image);
        this._id = id;
    }

    public get id(): number {
        return this._id;
    }
}