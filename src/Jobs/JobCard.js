import "./JobCard.css";

/** Renders a job card
 *
 * Props:
 *  - job like { id, title, salary, equity, companyHandle, companyName }
 *  -- companyHandle, companyName are optional
 *
 * State:
 *  - None
 *
 * JobCardList -> JobCard  */
function JobCard({ job }) {

  return (
    <div className="JobCard">
      <div className="JobCard-title">
        {job.title}
      </div>
      <div className="JobCard-company">
        {job.companyName === undefined
          ? ""
          : `${job.companyName}`
        }
      </div>
      <div className="JobCard-salary">
        {job.salary === null
          ? "Salary: It's a surprise!"
          : `Salary: ${Number(job.salary).toLocaleString()}`
        }
      </div>
      <div className="JobCard-equity">
        {job.equity === null
          ? "Equity: It's a surprise!"
          : `Equity: ${job.equity}`
        }
      </div>
    </div>
  );
}

export default JobCard;