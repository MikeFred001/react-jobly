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

  async function logout() {

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
          <Navigation />
          <RoutesList login={ login } signUp={ signUp }/>
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;

/* eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pa2VmcmVk
IiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY5MzUyNDQ2OH0.ovf3U_caT-VXB8FLhkTs
2fmwkXuZh-NzWwpX1xDjjUg */
