import { useEffect, useState } from "react";
import "./QuoteList.css";
import Quotes from "./Quotes";

function QuoteList() {
    const [quotes, setQuotes] = useState([]);
    
    useEffect(() => {
        fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) => {
            setQuotes(data.slice(0,10));
        });
    }, []);
    return (
        <div className="QuoteList">
            <h3>Quote List from API</h3>
            {quotes.map((quotes, i) => (
                <Quotes
                key={i}
                author={quotes.author}
                text={quotes.text}
                date={quotes.date}
                />
            ))}
        </div>
    )
}

export default QuoteList