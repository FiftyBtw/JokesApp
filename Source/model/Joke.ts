
// The Joke class is the base class for all jokes.
export abstract class Joke {

    private _type : string;
    private _setup : string;
    private _punchline : string;
    private _image : string;

    protected constructor(type : string, setup : string, punchline : string, image : string) {
        this._type = type;
        this._setup = setup;
        this._punchline = punchline;
        this._image = image;
    }

    // This method returns a summary of the joke with a maximum of 25 characters.
    public summary() : string {
        return this._setup?.substring(0, 25) + '...';
    }

    // This method returns a description of the joke.
    public description() : string {
        return this._type + ' - ' + this.summary();
    }

    public get type() : string {
        return this._type;
    }

    public get setup(): string {
        return this._setup;
    }

    public get punchline(): string {
        return this._punchline;
    }

    public get image(): string {
        return this._image;
    }
}

