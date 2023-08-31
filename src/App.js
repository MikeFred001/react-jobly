import logo from './logo.svg';
import './App.css';
import RoutesList from "./RoutesList.js";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation.js";
import userContext from "./userContext.js";

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
  const [user, setUser] = useState({
    "username": "jasonjobly",
    "firstName": "Jason",
    "lastName": "McJobly",
    "email": "jasjob@outlook.com",
    "isAdmin": false,
    "applications": []
  });

  return (
    <userContext.Provider value={ { user: user } }>
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <RoutesList />
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
