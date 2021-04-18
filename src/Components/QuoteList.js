import "./QuoteList.css";
import Quotes from "./Quotes";

function QuoteList() {
    const quotes = [
        {
          author: "Nelson Mandela",
          text: "It always seems impossible until it’s done.",
          date: "2001"
        },
        {
          author: "Yoda",
          text: "Do. Or do not. There is no try.",
          date: "A long time ago"
        },
        { author: "Bugs Bunny", text: "What's up, doc?" }
      ];
    
    return (
        <div className="QuoteList">
            <h3>Quote List</h3>
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