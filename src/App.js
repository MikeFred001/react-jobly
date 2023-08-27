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
  let initialUser;
  // const initialUser = {
  //   "username": "jasonjobly",
  //   "firstName": "Jason",
  //   "lastName": "McJobly",
  //   "email": "jasjob@outlook.com",
  //   "isAdmin": false,
  //   "applications": []
  // };
  const [user, setUser] = useState(initialUser);

  async function login(formData) {
    await JoblyApi.login(formData);
    // const res = await JoblyApi.getUser();
    // setUser(user);
  }

  return (
    <userContext.Provider value={ { user: user } }>
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <RoutesList login={login} />
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}

export default App;
