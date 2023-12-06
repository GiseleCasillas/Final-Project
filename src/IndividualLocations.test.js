import React from "react";
import { render } from "@testing-library/react";
import IndividualLocations from "./pages/IndividualLocations";

describe("IndividualLocation component", () => {
  it("renders the name and address correctly", () => {
    const name = "Test Location";
    const address = "123 Main Street";

    const { getByText } = render(
      <IndividualLocations name={name} address={address} />,
    );

    const nameElement = getByText(name);
    const addressElement = getByText(address);

    expect(nameElement).toBeInTheDocument();
    expect(addressElement).toBeInTheDocument();
  });
});
