import "./Home.css";
import { useContext } from "react";
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
  console.log("USER CONTEXT", userContext)

  return (
    <div className="Home">
      <div className="Home-tagline">
        <h1 className="Home-title">Jobly</h1>
        <span className="Home-slogan">
          All the jobs in one, convenient place.</span>
        {
        user
        ? <h2 className="Home-greeting">{
          `Welcome Back, ${user.firstName}`
          }</h2>
        : ''
        }
      </div>
    </div>
  );
}

export default Home;