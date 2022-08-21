import { useEffect, useState } from "react";

type Error = {
    status: number,
    statusText: string
}

export function useFetch<Type>( input: RequestInfo, init?: RequestInit, dependencies: [] = []) {
    const [data, setData] = useState<Type | null>();
    const [pending, setPending] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setPending(true);
        fetch(input, init)
        .then(response => {
            if(!response.ok) {
                setError({
                    status: response.status,
                    statusText: response.statusText
                });
                throw response.statusText;
            }
            return response.json();
        })
        .then(response => {setData(response)})
        .catch(error => {
            console.log(error); 
        })
        .finally(() => setPending(false));

    }, dependencies);

    return {
        data, pending, error
    };
};