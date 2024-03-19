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
            { id: 2, type: "Others", setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!", image: "https://placekitten.com/200/404" },
            { id: 3, type: "General", setup: "What do you call a bear with no teeth?", punchline: "A gummy bear.", image: "https://placekitten.com/200/405" },
            { id: 4, type: "Others", setup: "What do you get when you cross a snowman with a vampire?", punchline: "Frostbite.", image: "https://placekitten.com/200/406" },
            { id: 5, type: "General", setup: "Why don't skeletons fight each other?", punchline: "They don't have the guts.", image: "https://placekitten.com/200/407" },
            { id: 6, type: "Science", setup: "What do you call a factory that makes good products?", punchline: "A satisfactory.", image: "https://placekitten.com/200/408" },
            { id: 7, type: "General", setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field.", image: "https://placekitten.com/200/409" },
        ]);
        return JokeFactory.createSampleJokes(sampleJokesJson);    }
}