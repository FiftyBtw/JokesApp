import {JokeFactory} from "./JokeFactory";
import {CustomJoke} from "./CustomJoke";
import {SampleJoke} from "./SampleJoke";

export class JokeStub {

    public static customJokeStub() : CustomJoke[] {
        const customJokesJson = JSON.stringify([
            { id: "1", type: "general", setup: "Why was the math book sad?", punchline: "Because it had too many problems.", image: "math.png" },
            { id: "2", type: "general", setup: "What do you call fake spaghetti?", punchline: "An impasta.", image: "spaghetti.png" },
        ]);

        return JokeFactory.createCustomJokes(customJokesJson);    }

    public static sampleJokeStub() : SampleJoke[] {
        const sampleJokesJson = JSON.stringify([
            { id: 1, type: "general", setup: "How does a penguin build its house?", punchline: "Igloos it together.", image: "penguin.png" },
            { id: 2, type: "general", setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!", image: "atom.png" },
        ]);
        return JokeFactory.createSampleJokes(sampleJokesJson);    }
}