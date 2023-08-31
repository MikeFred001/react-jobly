import { useState } from "react";


/** Displays login form
 *
 * Props:
 *  - login()
 *    - callback function to jobly app component to handle authentication
 *
 * State:
 *  - formData { username, password }
 *
 * RoutesList -> loginForm */
function LoginForm({ login }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // update form input
  function handleChange(evt) {
    let { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
    setFormData({
      username: "",
      password: ""
    });
  }

  return(
    <form className="loginForm" onSubmit={ handleSubmit }>
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
    </form>
  )
}

export default LoginForm;