import JobCard from "./JobCard.js";


/** Renders a list of JobCards
 *
 * Props:
 *  - jobs: a list of jobs { [job, ... ] }
 *
 * State:
 *  - None
 *
 * { CompanyDetail, JobList } -> JobCardList -> [ JobCard, ... ]  */
function JobCardList({ jobs }) {

  return (
    <div className="JobCardList">
      {jobs.map(j => <JobCard job={j} />)}
    </div>
  );
}

export default JobCardList;