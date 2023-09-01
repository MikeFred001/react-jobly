import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";

import CompanyList from "./Companies/CompanyList.js";
import CompanyDetail from "./Companies/CompanyDetail.js";
import JobList from "./Jobs/JobList.js";
import LoginForm from "./Users/LoginForm.js";
import SignUpForm from "./Users/SignUpForm.js";
import ProfileForm from "./Users/ProfileForm.js";
import Home from "./Home.js";


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

  if (user !== undefined) {
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