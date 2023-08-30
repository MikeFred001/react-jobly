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
      <Link className="Navigation-link home" to="/">Jobly</Link>
      <div className="Navigation-jobs-companies">
        <Link className="Navigation-link companies" to="/companies">Companies</Link>
        <Link className="Navigation-link jobs" to="/jobs">Jobs</Link>
      </div>
    </div>
  );
}

export default Navigation;