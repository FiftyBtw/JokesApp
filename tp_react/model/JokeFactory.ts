import {CustomJoke} from "./CustomJoke";
import {SampleJoke} from "./SampleJoke";

export class JokeFactory {
    public static createCustomJokes(jsonArray: string) {
        let jokes : CustomJoke[] = [];
        let json = JSON.parse(jsonArray);
        for (let i = 0; i < json.length; i++) {
            let joke = json[i];
            jokes.push(new CustomJoke(joke.type, joke.setup, joke.punchline, joke.image, joke.id));
        }
        return jokes;
    }

    public static createSampleJokes(jsonArray: string) : SampleJoke[] {
        let jokes : SampleJoke[] = [];
        let json = JSON.parse(jsonArray);
        for (let i = 0; i < json.length; i++) {
            let joke = json[i];
            jokes.push(new SampleJoke(joke.type, joke.setup, joke.punchline, joke.image, joke.id));
        }
        return jokes;
    }

}