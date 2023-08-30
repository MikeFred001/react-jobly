import { useState } from "react";

import JobCardList from "./JobCardList.js";
import SearchForm from "./SearchForm.js";

function JobList() {
  const [jobs, setJobs] = useState([]);

  function filterList() {
  }

  return (
    <div className="JobList">
      <SearchForm filterList={ filterList }/>
      <JobCardList jobs={ jobs }/>
    </div>
  );
}

export default JobList;