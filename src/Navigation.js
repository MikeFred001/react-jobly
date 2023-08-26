import { Link } from "react-router-dom";
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
  return (
    <div className="Navigation">
      <Link className="Navigation-link" to="/">Home</Link>
      <Link className="Navigation-link" to="/companies">Companies</Link>
      <Link className="Navigation-link" to="/jobs">Jobs</Link>
    </div>
  );
}

export default Navigation;