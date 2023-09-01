import "./Alert.css";

/** Renders an alert message
 *
 * Props
 *  - message: a string to display e.g. 'Unauthorized!'
 *
 * State:
 *  - None
 *
 * { LoginForm, SignUpForm, ProfileForm } -> Alert  */
function Alert({ message }) {

  return (
    <div className="Alert">
      {message}
    </div>
  );
}

export default Alert;