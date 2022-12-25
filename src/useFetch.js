//This is a custom Hook
import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isdataLoading, setIsDataLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw Error(`Could not fetch the data`);
                }
            })
            .then((data) => {
                setData(data);
                setIsDataLoading(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log(`Fetch aborted`);
                } else {
                    setError(err.message);
                    setIsDataLoading(false);
                }
            });

        return () => abortCont.abort();
    }, [url]);

    return { data, isdataLoading, error };
};

export default useFetch;