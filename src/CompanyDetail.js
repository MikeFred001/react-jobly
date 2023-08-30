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
    <div>
      <JobCardList jobs={ 'foobar' } />
    </div>
  )
}
// className

export default CompanyDetail;