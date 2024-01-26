import {Joke} from "./model/Joke";

export function loadExtensions() {
    if (!Array.prototype.displayJoke) {
        Array.prototype.displayJoke = function () {
        return this.map((joke) => joke.description())
        };
    }
}