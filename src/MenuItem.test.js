import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MenuItems from "./pages/MenuItems";

describe("MenuItem component", () => {
  const mockMenuItem = {
    id: "1",
    name: "Coffee 1",
    price: 2.5,
  };

  it("renders menu item details correctly", () => {
    render(
      <Router>
        <MenuItems {...mockMenuItem} />
      </Router>,
    );

    const idElement = screen.getByText("1");
    const nameElement = screen.getByText("Coffee 1");
    const priceElement = screen.getByText("$2.50");

    expect(idElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  it("links to the correct menu item page", () => {
    render(
      <Router>
        <MenuItems {...mockMenuItem} />
      </Router>,
    );

    const linkElement = screen.getByText("Coffee 1");
    expect(linkElement).toHaveAttribute("href", "/menu/1");
  });
});
