import React from "react"
import { Joke, useJoke } from "../hooks/joke"

export const Jokes : React.VFC = ({}) => {
    const jokes: Joke[] | null = useJoke();

    if(jokes===null){
        return null
      }

    return(
    <div>
        {jokes[5].setup}
        {jokes[5].punchline}
    </div>
    );
} 