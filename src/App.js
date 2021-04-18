import "./App.css";
import Counter from "./Components/Counter";
import Switch from "./Components/Switch"
import Weather from "./Components/Weather"
import Quotes from "./Components/Quotes"
import QuoteList from "./Components/QuoteList";

function App() {
  const weatherData = [
    { time: "Today", highF: 60, lowF: 50, conditions: "Mostly Cloudy" },
    { time: "Tomorrow", highF: 65, lowF: 53, conditions: "Partly Sunny" },
    { time: "Tuesday", highF: 66, lowF: 51, conditions: "Partly Sunny" }
];


  return (
  <div className="App">
    <h1>This is React</h1>
    <Counter />
    <Switch />

    {
      weatherData.map(data => (
        <Weather key={data.time} time={data.time} conditions={data.conditions} tempF={data.highF}/>
      ))
    }
   <Weather time="Today" conditions="Overcast" tempF={45} />
   <Quotes author="Nelson Mandela" text="It always seems impossible until it's done." date="2001" />
   <Quotes author="Yoda" text="Do. Or do not. There is no try." date=" A long time ago" />
   <Quotes author="Bugs Bunny" text="What's up, Doc?" />
   <QuoteList/>
  </div>
  );
}

export default App;
