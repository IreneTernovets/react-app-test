import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";

function App() {
  
  return (
    <div className="App">
      <h1> Temperature in city </h1>
      <Weather city="Kyiv"/>
    </div>
  );
}

export default App;
