import logo from './logo.svg';
import './App.css';
import RoutesList from "./RoutesList.js";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation.js";
import userContext from "./userContext.js";
import JoblyApi from './api';

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
  const [user, setUser] = useState();

  // Logs in user, gets the user and updates user state.
  async function login(formData) {
    await JoblyApi.login(formData);
    const res = await JoblyApi.getUser(formData.username);
    setUser(res);
  }

  // Clears token and user state
  function logout() {
    JoblyApi.token = undefined;
    setUser(undefined);
  }

  // Registers user, gets the user and updates user state.
  async function signUp(formData) {
    await JoblyApi.register(formData);
    const res = await JoblyApi.getUser(formData.username);
    setUser(res);
  }

  return (
    <userContext.Provider value={ { user: user } }>
      <div className="App">
        <BrowserRouter>
          <Navigation logout={ logout }/>
          <RoutesList login={ login } signUp={ signUp }/>
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
