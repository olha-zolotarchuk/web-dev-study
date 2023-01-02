import { useEffect, useState } from "react";

export type Joke= {
    setup: string;
    punchline: string;
};

export const useJoke = (): Joke[]  | null => {

    const [joke, setJoke] = useState<Joke[] | null>(null);

    // console.log(joke);

    useEffect(() => {
        fetch('https://official-joke-api.appspot.com/random_ten').then(async (r) => {
            const response = await r.json(); 
            setJoke(response);
        });

    }, []);

    return joke;
};
 