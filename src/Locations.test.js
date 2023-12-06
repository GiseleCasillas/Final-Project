import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Locations from "./pages/Locations";

// Mock data
const mockMenuData = {
  locations: {
    "Los Angeles": [{ name: "Location 1", address: "123 Main St" }],
    "San Francisco": [{ name: "Location 2", address: "456 Oak St" }],
  },
};

jest.mock("../db.json", () => mockMenuData);

describe("Locations component", () => {
  it("renders selected city locations correctly", async () => {
    render(<Locations />);

    const selectElement = screen.getByLabelText(
      "Select a city for locations in that area! :",
    );

    fireEvent.change(selectElement, { target: { value: "Los Angeles" } });

    // Wait for the loading spinner or other loading indicators to be removed
    await waitForElementToBeRemoved(() => screen.getByText("Loading"));

    // Now you can query for elements within the opened dropdown
    const selectedCityHeader = screen.getByText("Los Angeles");
    const location1Name = screen.getByText("Location 1");
    const location1Address = screen.getByText("123 Main St");

    expect(selectedCityHeader).toBeInTheDocument();
    expect(location1Name).toBeInTheDocument();
    expect(location1Address).toBeInTheDocument();
  });
});
