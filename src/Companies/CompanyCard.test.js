import { testCompanies } from "./__testCommon";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";

describe("CompanyCard component", function () {

  it("renders without crashing", function () {
    render(<CompanyCard company={testCompanies[0]}/>);
  });

  it("contains expected title", function () {
    const result = render(<CompanyCard company={testCompanies[0]}/>);
    expect(
      result.queryByText("Test Company 1")
    ).toBeInTheDocument();
  });
});
