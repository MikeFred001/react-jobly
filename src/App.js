import logo from './logo.svg';
import './App.css';
import RoutesList from "./RoutesList.js";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
