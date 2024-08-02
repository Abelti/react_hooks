import React, { useState, useEffect } from 'react';

function EffectComponent() {
    const [quote, setQuote] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchQuote = () => {
        setLoading(true);
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                if (data.slip && data.slip.advice) {
                    setQuote(data.slip.advice);
                } else {
                    setQuote('No quote found, please try again.');
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                setQuote('Error fetching quote, please try again.');
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchQuote();
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <blockquote>
                    "{quote}"
                </blockquote>
            )}
            <button onClick={fetchQuote}>Fetch New Quote</button>
        </div>
    );
}

export default EffectComponent;
