import { useState } from "react";
import Alert from "./Alert";
import "./SignUpForm.css";

/** Displays signup form
 *
 * Props:
 *  - signUp(): callback function to register a user
 *
 * State:
 *  - formData { username, password, firstName, lastName, email }
 *  - errorMessages: an array of error messages ['message', ...]
 *
 * RoutesList -> SignUpForm */
function SignUpForm({ signUp }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
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

  // handle form submission and send user data to app via signUp() callback
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signUp(formData);
    } catch (err) {
      setErrorMessages(err);
    }
  }

  return(
    <div className="SignUpForm">
      <form className="SignUpForm-form" onSubmit={ handleSubmit }>
        <label htmlFor="signUpForm-username">Username</label>
        <input
          id="signUpForm-username"
          name="username"
          value={formData.username}
          onChange={ handleChange }>
        </input>

        <label htmlFor="signUpForm-password">Password</label>
        <input
          id="signUpForm-password"
          name="password"
          value={formData.password}
          onChange={ handleChange }>
        </input>

        <label htmlFor="signUpForm-firstName">First Name</label>
        <input
          id="signUpForm-firstName"
          name="firstName"
          value={formData.firstName}
          onChange={ handleChange }>
        </input>

        <label htmlFor="signUpForm-lastName">Last Name</label>
        <input
          id="signUpForm-lastName"
          name="lastName"
          value={formData.lastName}
          onChange={ handleChange }>
        </input>

        <label htmlFor="signUpForm-email">Email</label>
        <input
          id="signUpForm-email"
          name="email"
          value={formData.email}
          onChange={ handleChange }>
        </input>
        <button className="SignUpForm-btn">Sign Up</button>
      </form>
    {errorMessages.map( err => <Alert message={err} />)}
    </div>
  )
}

export default SignUpForm;