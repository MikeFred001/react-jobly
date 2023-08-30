
import { Routes, Route, Navigate } from "react-router-dom";
import CompanyList from "./CompanyList.js";
import JobList from "./JobList.js";
import CompanyDetail from "./CompanyDetail.js";
import Home from "./Home.js";


/** Handles routing
 *
 * Props:
 *  - none
 *
 * State:
 *  - none
 *
 * App -> RoutesList -> { CompanyList, JobList, CompanyDetail, Home }  */
function RoutesList() {
  return (
    <Routes>
      <Route path="/companies" element={ <CompanyList /> }/>
      <Route path="/jobs" element={ <JobList /> }/>
      <Route path="/companies/:handle" element={ <CompanyDetail /> }/>
      <Route path="/" element={ <Home /> }/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default RoutesList;