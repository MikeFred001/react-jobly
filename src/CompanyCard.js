import { Link } from "react-router-dom";
import "./CompanyCard.css";

/** Renders a company card
 *
 * Props:
 *  - company
 *  -- { handle, name, description, numEmployees, logoUrl, jobs[] }
 *
 * State:
 *  - None
 *
 * CompanyList -> Company Card  */

function CompanyCard({ company }) {

  return (
    <div className="CompanyCard">
      {company.logoUrl === null
        ? ''
        : <img className="CompanyCard-logo"
          src={company.logoUrl}
          alt={company.name}
          width={'50px'}
          height={'50px'}
        ></img>
      }
      <Link className="CompanyCard-link" to={`/companies/${company.handle}`}>
        <div className="CompanyCard-name">
          <h3>{company.name}</h3>
        </div>
        <div className="CompanyCard-description">
          <p>{company.description}</p>
        </div>
      </Link>
    </div>
  );
}

export default CompanyCard;