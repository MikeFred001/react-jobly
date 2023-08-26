import JobCard from "./JobCard.js";

function JobCardList({ job }) {

  return (
    <div className="JobCardList">
      <JobCard company={ 'foobar' }/>
      <JobCard company={ 'foobar' }/>
    </div>
  );
}

export default JobCardList;