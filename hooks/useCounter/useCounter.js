import { useState } from "react";

export const useCounter = ( initialState = 10 ) => {
    
    const [counter, setCounter] = useState(initialState);

    // const increment = () => {
    //     setCounter( (c) => c + 1 );
    // };

    // const decrement = () => {
    //     setCounter( (c) => c - 1 );
    // };

    const increment = ( factor = 1 ) => {
        setCounter( (c) => c + factor );
    };

    const decrement = ( factor = 1 ) => {
        setCounter( (c) => c - factor );
    };

    const reset = () => {
        setCounter( initialState );
    };


    return {
        counter,
        increment, 
        decrement,
        reset,
    }; //Si necesito incrementar o decrementar especificamente debo utilizar un Objeto que seria lo mas facil. Sino retorno un arreglo.
};
