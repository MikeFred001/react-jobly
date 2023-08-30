import { Link } from "react-router-dom";


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
  return (
    <div className="Navigation">
      <Link to="/">Home</Link>
      <Link to="/companies">Companies</Link>
      <Link to="/jobs">Jobs</Link>
    </div>
  )
}

export default Navigation;