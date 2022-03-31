import { useEffect, useRef, useState } from "react";

export const useFetch = ( url ) => {
    
    const isMounted = useRef(true);

    useEffect( () => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    const [state, setState] = useState({
        data: null, 
        loading: true, 
        error: null,
    });

    useEffect(() => {

        setState({
            data: null, 
            loading: true,
            error: null,
        });

        fetch( url )
            .then( resp => {
                if(resp.ok){
                    return resp.json();
                }
                throw new Error('Error ' + resp.status.toString());
            })
            .then( data => {
                if(isMounted.current){
                    setState({
                        data: data,
                        loading: false,
                        error: null,
                    });
                }
                // else{
                //     console.log('setState no se llamo');
                // }
            })
            .catch( (e) => {
                if(isMounted.current){
                    setState({
                        data: null,
                        loading: false,
                        error: e.message,
                    });
                }
                // else{
                //     console.log('setState del error no se llamo');
                // }
            });

    }, [url]);

    return state;

}
