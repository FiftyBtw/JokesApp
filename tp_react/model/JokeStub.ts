import {JokeFactory} from "./JokeFactory";
import {CustomJoke} from "./CustomJoke";
import {SampleJoke} from "./SampleJoke";

export class JokeStub {

    public static customJokeStub() : CustomJoke[] {
        return JokeFactory.createCustomJokes('[{"id": "1", "type": "general", "setup": "toto", "punchline": "What did the fish say when something", "image": "toto.png" }]');
    }

    public static sampleJokeStub() : SampleJoke[] {
        return JokeFactory.createSampleJokes('[{"id": 1, "type": "general", "setup": "toto", "punchline": "What did the fish say when something", "image": "toto.png" }]');
    }
}