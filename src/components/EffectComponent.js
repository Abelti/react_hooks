import React, { useState, useEffect, useCallback } from 'react';

function EffectComponent() {
    const [quote, setQuote] = useState('');
    const [loading, setLoading] = useState(true);
    const [fetchCount, setFetchCount] = useState(0);
    const [interval, setInterval] = useState(10000);

    const fetchQuote = useCallback(() => {
        setLoading(true);
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                if (data.slip && data.slip.advice) {
                    console.log(data.slip.advice);
                    setQuote(data.slip.advice);
                } else {
                    setQuote('No quote found, please try again.');
                }
                setLoading(false);
                setFetchCount(prevCount => prevCount + 1);
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                setQuote('Error fetching quote, please try again.');
                setLoading(false);
            });
    });

    const handleFetchQuote = () => {
        setInterval(15000);
        fetchQuote();
    };

    useEffect(() => {
        const advice = setInterval(fetchQuote, interval);
        return () => clearInterval(advice);
    }, [interval, fetchQuote]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <blockquote>
                    "{quote}"
                </blockquote>
            )}
            <button onClick={handleFetchQuote}>Fetch New Quote</button>
            <p>Quotes fetched: {fetchCount}</p>
        </div>
    );
}

export default EffectComponent;