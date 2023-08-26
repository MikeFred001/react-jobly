

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

  // add commas to salaries for readability
  job.salary = Number(job.salary).toLocaleString();

  return (
    <div className="JobCard">
      <div className="JobCard-title">
        <h3>{job.title}</h3>
      </div>
      <div className="JobCard-company">
        {job.company === undefined
          ? ""
          : `${job.companyName}`
        }
      </div>
      <div className="JobCard-salary">
        {job.salary === null
          ? "Salary: It's a surprise!"
          : `Salary: ${job.salary}`
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