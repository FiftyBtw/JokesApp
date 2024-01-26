export abstract class Joke {
    private _type : string;
    private _setup : string;
    private _punchline : string;
    private _image : string;

    constructor(type : string, setup : string, punchline : string, image : string) {
        this._type = type;
        this._setup = setup;
        this._punchline = punchline;
        this._image = image;
    }
    public summary() : string {
        return this._punchline.substring(0, 25) + '...';
    }

    public description() : string {
        return this._type + ' - ' + this.summary();
    }

    get type() : string {
        return this._type;
    }

    get setup(): string {
        return this._setup;
    }

    get punchline(): string {
        return this._punchline;
    }

    get image(): string {
        return this._image;
    }
}

