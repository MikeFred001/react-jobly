import JobCard from "./JobCard.js";


/** Renders a list of JobCards
 *
 * Props:
 *  - jobs
 *
 * State:
 *  - None
 *
 * { CompanyDetail, JobList } -> JobCardList -> [ JobCard, ... ]  */
function JobCardList({ jobs }) {

  return (
    <div className="JobCardList">
      <JobCard company={ 'foobar' }/>
      <JobCard company={ 'foobar' }/>
    </div>
  );
}

export default JobCardList;