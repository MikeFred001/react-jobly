
import { useState} from "react";
/** Renders search form
 *
 * Props:
 *  - filterList()
 *
 * State:
 *  - formData
 *
 * { JobList, CompanyList } -> SearchForm */
function SearchForm({ filterList }) {
  const [formData, setFormData] = useState({ searchTerm: "" });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    filterList(formData.searchTerm);
    setFormData({ searchTerm: "" });
  }

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm"></label>
        <input
          id="searchTerm"
          name="searchTerm"
          value={formData.searchTerm}
          onChange={handleChange}
          placeholder="Enter search term ..."
        />
        <button className="SearchForm-btn">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;