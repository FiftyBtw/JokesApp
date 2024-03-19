export {};

declare global {

    // This interface is used to add a displayJoke() method to the Array class.
    interface Array<T> {
        displayJoke() : string[];
    }
}