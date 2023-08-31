import { useState } from "react";


/** Displays signup form
 *
 * Props:
 *  - signUp()
 *    - callback function to jobly app component to handle registration
 *
 * State:
 *  - formData { username, password, firstName, lastName, email }
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
    signUp(formData);
    setFormData({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    });
  }

  return(
    <form className="SignUpForm" onSubmit={ handleSubmit }>
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
    </form>
  )
}

export default SignUpForm;