import { useState, useEffect } from "react";

import JobCardList from "./JobCardList.js";
import SearchForm from "./SearchForm.js";
import JoblyApi from "./api.js";



/** Displays list of companies and a search form to search companies
 *
 * Props:
 *  - none
 *
 * State:
 *  - jobs { data: [{job}, ...], isLoading: bool }
 *
 * RoutesList -> JobList -> { SearchForm, JobCardList }  */
function JobList() {
  const [jobs, setJobs] = useState({
    data: {},
    isLoading: true
  });

  // grabs jobs using JoblyApi and sets state on mount
  useEffect(function fetchJobsOnMount() {
    async function fetchJobs() {
      const jobsResponse = await JoblyApi.getJobs();
      setJobs({
        data: jobsResponse,
        isLoading: false
      });
    }
    fetchJobs();
  }, []);

  // Filters company results based on search term and updates job list data
  async function filterList(searchTerm) {
    console.log("SEARCH TERM", searchTerm);
    const jobs = await JoblyApi.searchJobs(searchTerm);
    setJobs({
      data: jobs,
      isLoading: false
    });
  }

  if (jobs.isLoading) return <h3>Loading...</h3>;

  return (
    <div className="JobList">
      <SearchForm filterList={filterList} />
      <JobCardList jobs={jobs.data} />
    </div>
  );
}

export default JobList;