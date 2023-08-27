import { useEffect, useState } from "react";

/** Displays login form
 *
 * Props:
 *  - login(): callback function for use in LoginForm
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
    console.log("Handle Submit on Login. formData:", formData);
    try {
      await login(formData);
      setFormData({
        username: "",
        password: ""
      });
    } catch (err) {
      setErrorMessages(err);
    }
  }

  // TODO: Refactor error message into alert component
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
          value={ formData.password }
          onChange={ handleChange }>
        </input>
        <button>Login</button>
      </form>
      <div>{errorMessages.map( err => <p>{err}</p>)}</div>
    </div>
  )
}

export default LoginForm;