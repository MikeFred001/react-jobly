import { useState } from "react";

import CompanyCard from "./CompanyCard.js";
import SearchForm from "./SearchForm.js";
import JoblyApi from "./api.js";


/** Displays list of companies and a search form to search companies
 *
 * Props:
 *  - None
 *
 * State:
 *  - companies
 *
 * RoutesList -> CompanyList -> { SearchForm, [CompanyCard, ...] }*/
function CompanyList() {
  const [companies, setCompanies] = useState([]);

  function filterList() {

  }

  // JoblyApi.getCompanies();
  // JoblyApi.getCompany("anderson-arias-morrow");
  // JoblyApi.getJobs();
  // JoblyApi.searchJobs('a');
  // JoblyApi.searchCompanies('ander');


  return (
    <div className="CompanyList">
      <SearchForm filterList={ filterList }/>
      <CompanyCard company={ 'foobar' }/>
      <CompanyCard company={ 'foobar' }/>
    </div>
  );
}

export default CompanyList;