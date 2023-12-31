import { useState } from "react";
import Alert from "../Alert";
import "./LoginForm.css";

/** Displays login form
 *
 * Props:
 *  - login(): callback function to login a user
 *
 * State:
 *  - formData { username, password }
 *  - errorMessages: an array of error messages ['message', ...]
 *
 * RoutesList -> loginForm */

function LoginForm({ login }) {
  console.log("LoginForm rendering");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = useState([]);

  // update form input
  function handleChange(evt) {
    let { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  // handle form submission and send credentials to app via login() callback
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData);
    } catch (err) {
      setErrorMessages(err);
    }
  }

  return(
    <div className="LoginForm">
      <form className="LoginForm-form" onSubmit={handleSubmit}>
        <label htmlFor="loginForm-username">Username</label>
        <input
          id="loginForm-username"
          name="username"
          value={ formData.username }
          onChange={ handleChange }>
        </input>

        <label htmlFor="loginForm-password">Password</label>
        <input
          id="loginForm-password"
          name="password"
          type="password"
          value={ formData.password }
          onChange={ handleChange }>
        </input>
        <button className="LoginForm-btn">Login</button>
      </form>
        <div className="LoginForm-alerts Alerts">
          {errorMessages.map( err => <Alert key={err} message={err} />)}
        </div>
    </div>
  )
}

export default LoginForm;