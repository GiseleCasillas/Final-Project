import React from "react";
import { render } from "@testing-library/react";
import Home from "./pages/Home";

describe("Home component", () => {
  it("renders the welcome message", () => {
    const { getByText } = render(<Home />);
    const welcomeMessage = getByText("Welcome to The Little Corner Cafe!");
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("renders the cafe image", () => {
    const { getByAltText } = render(<Home />);
    const cafeImage = getByAltText("Coffee Shop");
    expect(cafeImage).toBeInTheDocument();
  });

  it("renders the cafe description", () => {
    const { getByText } = render(<Home />);
    const cafeDescription = getByText(
      "The Little Corner Cafe has been around for only the last 5 years! However, we have expanded to many locations within Los Angeles and San Fransisco. Feel free to look around our site for locations, our menu, and to subscribe!",
    );
    expect(cafeDescription).toBeInTheDocument();
  });
});
