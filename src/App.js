import "./App.css";
import Counter from "./Components/Counter";
import Switch from "./Components/Switch"
import Weather from "./Components/Weather"

function App() {
  return <div className="App">
    <h1>This is React</h1>
    <Counter />
    <Switch />
   <Weather time="Today" conditions="Overcast" tempF={45} />
  </div>
}

export default App;
