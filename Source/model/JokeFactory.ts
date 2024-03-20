import {CustomJoke} from "./CustomJoke";
import {SampleJoke} from "./SampleJoke";

// This class is used to create jokes.
export class JokeFactory {

    // This method creates an array of CustomJoke objects from a JSON string.
    public static createCustomJokes(jsonArray: string) {
        let jokes : CustomJoke[] = [];
        let json = JSON.parse(jsonArray);
        for (let joke of json) {
            jokes.push(new CustomJoke(joke.type, joke.setup, joke.punchline, joke.image, joke.id));
        }
        return jokes;
    }

    // This method creates an array of SampleJoke objects from a JSON string.
    public static createSampleJokes(jsonArray: string) : SampleJoke[] {
        let jokes : SampleJoke[] = [];
        let json = JSON.parse(jsonArray);
        for (let joke of json) {
            jokes.push(new SampleJoke(joke.type, joke.setup, joke.punchline, joke.image, joke.id));
        }
        return jokes;
    }

}