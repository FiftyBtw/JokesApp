export {};

declare global {

    interface Array<T> {
        displayJoke() : string[];
    }
}