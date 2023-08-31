import { NavLink } from "react-router-dom";
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

  let activeStyle = {
    fontWeight: "bold"
  };

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
      </div>
    </div>
  );
}

export default Navigation;