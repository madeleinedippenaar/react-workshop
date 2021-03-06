import "./Quotes.css"

function Quotes({author, text, date}) {
    return (
        <div className="Quotes">
            <h3>Quote by {author}</h3>
            <p>"{text}"</p>
            { date && <p>Date:{date}</p> }
        </div>
    )
}

export default Quotes