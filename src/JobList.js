import { useState } from "react";

import JobCardList from "./JobCardList.js";
import SearchForm from "./SearchForm.js";



/** Displays list of companies and a search form to search companies
 *
 * Props:
 *  - none
 *
 * State:
 *  - jobs
 *
 * RoutesList -> JobList -> { SearchForm, JobCardList }  */
function JobList() {
  const [jobs, setJobs] = useState([]);

  function filterList() {
  }

  return (
    <div className="JobList">
      <SearchForm filterList={ filterList }/>
      <JobCardList jobs={ 'foobar' }/>
    </div>
  );
}

export default JobList;