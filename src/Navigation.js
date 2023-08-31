import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";
import "./Navigation.css";

/** Displays Navigation bar
 *
 * Props:
 *  - none
 *
 * State:
 *  - none
 *
 * App -> Navigation  */
function Navigation() {
  const { user } = useContext(userContext);
  console.log("USER CONTEXT", userContext)
  console.log("USER", user);

  let activeStyle = {
    fontWeight: "bold"
  };

  if (user === undefined) {
    return (
      <div className="Navigation">
      <NavLink
        className="Navigation-link Navigation-home"
        to="/"
        style={({ isActive }) => isActive ? activeStyle : undefined }>
          Jobly
      </NavLink>

      <div className="Navigation-login">
        <NavLink
          className="Navigation-link Navigation-login"
          to="/login"
          style={({ isActive }) => isActive ? activeStyle : undefined }>
            Login
        </NavLink>

        <NavLink
          className="Navigation-link Navigation-signup"
          to="/signup"
          style={({ isActive }) => isActive ? activeStyle : undefined }>
            Signup
        </NavLink>
      </div>
    </div>
    )
  }

  return (
    <div className="Navigation">
      <NavLink
        className="Navigation-link Navigation-home"
        to="/"
        style={({ isActive }) => isActive ? activeStyle : undefined }>
          Jobly
      </NavLink>

      <div className="Navigation-jobs-companies">
        <NavLink
          className="Navigation-link Navigation-companies"
          to="/companies"
          style={({ isActive }) => isActive ? activeStyle : undefined }>
            Companies
        </NavLink>

        <NavLink
          className="Navigation-link Navigation-jobs"
          to="/jobs"
          style={({ isActive }) => isActive ? activeStyle : undefined }>
            Jobs
        </NavLink>

        <NavLink
          className="Navigation-link Navigation-profile"
          to="/profile"
          style={({ isActive }) => isActive ? activeStyle : undefined }>
            Profile
        </NavLink>

        <NavLink
          className="Navigation-link Navigation-logout"
          to="/"
          style={({ isActive }) => isActive ? activeStyle : undefined }>
            { `Logout ${ user.username }` }
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;