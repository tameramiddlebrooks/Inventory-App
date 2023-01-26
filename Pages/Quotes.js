import axios from 'axios';
import { useState, useEffect } from 'react';

const Quotes = () => {
    const [quotes, setQuotes] =useState("");

    const getQuote = () => {
        fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) => {
            let randomNumber = Math.floor(Math.random() * data.length);
            setQuotes(data[randomNumber]);
        })
    }

    return (
        <div className="quotes">
                <h1 className = "advice-title">Start each day with great advice.</h1>
                <p className="get-advice">Advice for Today: {quotes.text}</p>
                <p className="advice-author">- {quotes.author}</p>
                
                <button type="button" id="advice-btn" onClick={getQuote} className="advice-btn">Click for Good Advice</button>
            </div>

    )
}
export default Quotes;