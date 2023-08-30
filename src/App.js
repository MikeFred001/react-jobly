import logo from './logo.svg';
import './App.css';
import RoutesList from "./RoutesList.js";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation.js";

/** App, renders Navigation and Routes List
 *
 * Props:
 *  - None
 *
 * State:
 *  - None
 *
 * index -> App -> { Navigation, RoutesList }  */
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
