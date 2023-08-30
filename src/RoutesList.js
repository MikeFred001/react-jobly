import { BrowserRouter, Routes, Route } from "react-router-dom";

function RoutesList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/companies" element={ <CompanyList /> }/>
        <Route path="/jobs" element={ <JobList /> }/>
        <Route path="/companies/:handle" element={ <CompanyDetail /> }/>
        <Route path="*" element={ <Home /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesList;