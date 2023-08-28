import "./Home.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./userContext";

/** Displays homepage with a simple greeting
 *
 * Props:
 *  - None
 *
 * State:
 *  - None
 *
 * RoutesList -> Home  */
function Home() {
  const { user } = useContext(userContext);
  console.log("USER CONTEXT", userContext);

  return (
    <div className="Home">
      <div className="Home-tagline">
        <h1 className="Home-title">Jobly</h1>
        <span className="Home-slogan">
          All the jobs in one, convenient place.</span>
        {
        user !== undefined
        ? <h2 className="Home-greeting">{
          `Welcome Back, ${user.firstName}`
          }</h2>
        : <div className="Home-buttons">
            <Link to="/login">
              <button className="Home-login-btn">Log in</button>
            </Link>

            <Link to="/signup">
              <button className="Home-signup-btn">Sign up</button>
            </Link>
          </div>
        }
      </div>
    </div>
  );
}

export default Home;