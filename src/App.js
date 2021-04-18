import "./App.css";
import Counter from "./Components/Counter";
import Switch from "./Components/Switch"
import Weather from "./Components/Weather"
import Quotes from "./Components/Quotes"

function App() {
  return <div className="App">
    <h1>This is React</h1>
    <Counter />
    <Switch />
   <Weather time="Today" conditions="Overcast" tempF={45} />
   <Quotes author="Nelson Mandela" text="It always seems impossible until it's done." date="2001" />
   <Quotes author="Yoda" text="Do. Or do not. There is no try." date=" A long time ago" />
   <Quotes author="Bugs Bunny" text="What's up, Doc?" />
  </div>
}

export default App;
