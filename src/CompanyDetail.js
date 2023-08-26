import { useState } from "react";
import JobCardList from "./JobCardList.js";

function CompanyDetail() {
  const [company, setCompany] = useState();

  return (
    <div>
      <JobCardList jobs={ 'foobar' } />
    </div>
  )
}

export default CompanyDetail;