import { testJobs } from "./__testCommon";
import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";

describe("JobCard component", function () {

  it("renders without crashing", function () {
    render(<JobCard job={testJobs[0]}/>);
  });

  it("contains expected title", function () {
    const result = render(<JobCard job={testJobs[0]}/>);
    expect(
      result.queryByText("Test Title 1")
    ).toBeInTheDocument();
  });
});
