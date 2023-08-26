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
 *  - companies { data: [{company}, ...], isLoading: bool }
 *
 * RoutesList -> CompanyList -> { SearchForm, [CompanyCard, ...] }*/
function CompanyList() {
  const [companies, setCompanies] = useState({
    data: {},
    isLoading: true
  });

  // fetches and sets a list of companies; sets isLoading to false
  useEffect(function fetchCompaniesOnMount() {
    async function fetchCompanies() {
      const companiesResponse = await JoblyApi.getCompanies();
      setCompanies({
        data: companiesResponse,
        isLoading: false
      });
    }
    fetchCompanies();
  }, []);

  // Filters company results based on search term and updates company data
  async function filterList(searchTerm) {
    console.log("SEARCH TERM", searchTerm);
    const companies = await JoblyApi.searchCompanies(searchTerm);
    setCompanies({
      data: companies,
      isLoading: false
    });
  }

  if (companies.isLoading) return <h3>Loading...</h3>;

  return (
    <div className="CompanyList">
      <SearchForm filterList={filterList} />
      {companies.data.map(c => <CompanyCard key={c.handle} company={c} />)}
    </div>
  );
}

export default CompanyList;