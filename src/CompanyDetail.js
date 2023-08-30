import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCardList from "./JobCardList.js";
import JoblyApi from "./api.js";


/** CompanyDetail, renders list of job cards
 *
 * Props:
 *  - None
 *
 * State:
 *  - company {data: [ { company }, ... ], isLoading: bool}
 *
 * RoutesList -> CompanyDetail -> JobCardList  */
function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState({
    data: {},
    isLoading: true
  });
  console.log("COMPANY DETAIL STATE", company);

  useEffect(function fetchCompanyOnMount() {
    console.log("FETCH COMPANY RAN");
    async function fetchCompany() {
      const companyResponse = await JoblyApi.getCompany(handle);
      setCompany({
        data: companyResponse,
        isLoading: false});
    }
    fetchCompany();
  }, [ ]);

  if (company.isLoading) return <h3>Loading...</h3>;

  return (
    <div className="CompanyDetail">
      <h1 className="CompanyDetail-title">{ company.title }</h1>
      <p className="CompanyDetail-description">{ company.description }</p>
      <JobCardList jobs={ company.jobs } />
    </div>
  )
}

export default CompanyDetail;