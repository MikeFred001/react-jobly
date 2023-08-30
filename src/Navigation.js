import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
    </div>
  )
}

export default Navigation;