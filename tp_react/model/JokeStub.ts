import {JokeFactory} from "./JokeFactory";
import {CustomJoke} from "./CustomJoke";
import {SampleJoke} from "./SampleJoke";

// This class is used to create stubs for the Joke class.
export class JokeStub {

    // This method creates a stub for the CustomJoke class.
    public static customJokeStub() : CustomJoke[] {
        const customJokesJson = JSON.stringify([
            { id: "1", type: "General", setup: "Why was the math book sad?", punchline: "Because it had too many problems.", image: "math.png" },
            { id: "2", type: "Science", setup: "What do you call fake spaghetti?", punchline: "An impasta.", image: "spaghetti.png" },
        ]);

        return JokeFactory.createCustomJokes(customJokesJson);    }

    // This method creates a stub for the SampleJoke class.
    public static sampleJokeStub() : SampleJoke[] {
        const sampleJokesJson = JSON.stringify([
            { id: 1, type: "General", setup: "How does a penguin build its house?", punchline: "Igloos it together.", image: "https://placekitten.com/200/403" },
            { id: 2, type: "Other", setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!", image: "https://placekitten.com/200/404" },
        ]);
        return JokeFactory.createSampleJokes(sampleJokesJson);    }
}