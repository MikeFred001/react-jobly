import { useState, useEffect } from "react";

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

  // grabs companies using JoblyApi and sets state on mount
  useEffect(function fetchCompaniesOnMount() {
    async function fetchCompanies() {
      const companiesResponse = await JoblyApi.getCompanies();
      setCompanies(companiesResponse);
    }
    fetchCompanies();
  }, [ ]);

  function filterList(formData) {
    // call JoblyApi.searchCompanies(formData)

  }

  // JoblyApi.getCompanies();
  // JoblyApi.getCompany("anderson-arias-morrow");
  // JoblyApi.getJobs();
  // JoblyApi.searchJobs('a');
  // JoblyApi.searchCompanies('ander');


  return (
    <div className="CompanyList">
      <SearchForm filterList={ filterList }/>
      { companies.map( c => <CompanyCard key={c.handle} company={c} />) }
    </div>
  );
}

export default CompanyList;