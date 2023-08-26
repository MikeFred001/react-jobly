import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("Jobly app", function () {
  it("renders without crashing", function () {
    render(<App />);
  });

  it("contains expected title", function () {
    const result = render(<App />);
    expect(
      result.queryByText("All the jobs in one, convenient place.")
    ).toBeInTheDocument();
  });
});