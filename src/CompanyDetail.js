import { useState } from "react";
import JobCardList from "./JobCardList.js";


/** CompanyDetail, renders list of job cards
 *
 * Props:
 *  - None
 *
 * State:
 *  - company
 *
 * RoutesList -> CompanyDetail -> JobCardList  */
function CompanyDetail() {
  // useParams
  const [company, setCompany] = useState();

  return (
    <div className="CompanyDetail">
      <JobCardList jobs={ 'foobar' } />
    </div>
  )
}

export default CompanyDetail;