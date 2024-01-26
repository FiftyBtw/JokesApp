import {Joke} from "./Joke";

export class CustomJoke extends Joke {

    private _id : string;

    constructor(type: string, setup: string, punchline: string, image: string, id: string) {
        super(type, setup, punchline, image);
        this._id = id;
    }

    get id(): string {
        return this._id;
    }
}