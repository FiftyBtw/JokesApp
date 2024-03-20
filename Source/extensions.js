// This file contains the extensions of the classes
export function loadExtensions() {
    if (!Array.prototype.displayJoke) {
        Array.prototype.displayJoke = function () {
        return this.map((joke) => joke.description() + '\n')
        };
    }
}