
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";

import CompanyList from "./CompanyList.js";
import JobList from "./JobList.js";
import CompanyDetail from "./CompanyDetail.js";
import Home from "./Home.js";
import LoginForm from "./LoginForm.js";
import SignUpForm from "./SignUpForm.js";
import ProfileForm from "./ProfileForm.js";
// import { v4 as uuid } from "uuid";


/** Handles routing
 *
 * Props:
 *  - login(): callback function for use in LoginForm
 *  - signUp(): callback function for use in SignUpForm
 *
 * State:
 *  - none
 *
 * App -> RoutesList -> { CompanyList, JobList, CompanyDetail, Home }  */
function RoutesList({ login, signUp }) {
  const { user } = useContext(userContext);

  if (user === undefined) {
    // user is logged in
    return (
      <Routes>
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/companies/:handle" element={<CompanyDetail />} />
        <Route
          path="/profile"
          element={<ProfileForm />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  // user is logged out
  return (
    <Routes>
      <Route
        path="/signup"
        element={<SignUpForm signUp={ signUp } />} />
      <Route
        path="/login"
        element={<LoginForm login={login} />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;