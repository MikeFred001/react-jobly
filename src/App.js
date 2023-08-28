import jwt from "jwt-decode";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import JoblyApi from './api';

import RoutesList from "./RoutesList.js";
import Navigation from "./Navigation.js";
import userContext from "./userContext.js";

import './App.css';

/** App, renders Navigation and Routes List
 *
 * Props:
 *  - None
 *
 * State:
 *  - user { username, firstName, lastName, isAdmin, email }
 *  - authCheckDone: keeps track of whether auth check is done or not
 *
 * index -> App -> { Navigation, RoutesList }  */

function App() {
  const [user, setUser] = useState(undefined);
  const [authCheckDone, setAuthCheckDone] = useState(false);

  console.log("App is rendering");
  console.log("user is:", user);

  // // this doesn't work
  // if (user !== undefined && destination !== undefined) {
  //   console.log("destination:", destination);
  //   setDestination(undefined);
  //   navigate(destination);
  // }

  // attempt to fetch token from local storage and set user state
  useEffect( () => {

    // check localStorage for a token
    if (localStorage.getItem('userToken') !== null) {
      console.log("userToken !=== null:", localStorage.getItem('userToken'))

      // a token exists, let's try to use it
      const userToken = localStorage.getItem('userToken');

      // we have a token, so let's set it as our current token
      JoblyApi.token = userToken;

      // decode the token we found and grab the username from it
      // we need the username to fetch the user
      const username = jwt(userToken).username;

      // fetch the user data using our async function
      // this function will fetch user AND update user state
      fetchUser(username);

      console.log("username from token:", username);
    } else {
      setAuthCheckDone(true);
    }

    /** Fetches user data for username and updates App user state */
    async function fetchUser(username) {
      try {
        console.log("isLoading to true")
        const res = await JoblyApi.getUser(username);
        console.log("user received from API in fetchUser()");
        setUser(res);
        console.log("isLoading to false")
        setAuthCheckDone(true);
        // TODO: Need to send them to their original destination
      } catch (err) {
        console.log(
          "caught an error attempting to get user with localStorage token")
        // something went wrong so don't set user
        // TODO: be more specific about errors we want and re-throw others
        // for example, clear the token if we get 401 error
      }
    }
  } , [])

  // Logs in user, gets the user and updates user state.
  async function login(formData) {
    console.log("login() called within app comp");
    await JoblyApi.login(formData);
    const res = await JoblyApi.getUser(formData.username);
    localStorage.setItem('userToken', JoblyApi.token);
    setUser(res);
  }

  // Clears token and user state
  function logout() {
    JoblyApi.token = undefined;
    localStorage.removeItem('userToken');
    setUser(undefined);
  }

  // Registers user, gets the user and updates user state.
  async function signUp(formData) {
    await JoblyApi.register(formData);
    const res = await JoblyApi.getUser(formData.username);
    localStorage.setItem('userToken', JoblyApi.token);
    setUser(res);
  }

  // TODO: Developer a LoadingHome component
  if (authCheckDone === false) return <div>Loading ...</div>

  console.log("isLoading is false so render nav stuff");
  return (
    <userContext.Provider value={ { user: user } }>
      <BrowserRouter>
        <div className="App">
          <Navigation logout={ logout }/>
          <RoutesList login={ login } signUp={ signUp }/>
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
