import { useState } from "react";

import CompanyCard from "./CompanyCard.js";
import SearchForm from "./SearchForm.js";

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  function filterList() {
  }

  return (
    <div className="CompanyList">
      <SearchForm filterList={ filterList }/>
      <CompanyCard company={ 'foobar' }/>
      <CompanyCard company={ 'foobar' }/>
    </div>
  );
}

export default CompanyList;