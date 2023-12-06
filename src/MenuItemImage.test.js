import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import MenuItemImage from "./pages/MenuItemImage";

describe("MenuItemImage component", () => {
  const mockMenuItem = {
    id: 1,
    name: "Coffee",
    image: "coffee-image.jpg",
  };

  it("renders the menu item details correctly", () => {
    render(
      <MemoryRouter initialEntries={[`/menu/${mockMenuItem.id}`]}>
        <Route path="/menu/:id">
          <MenuItemImage />
        </Route>
      </MemoryRouter>,
    );

    // Check if the component renders the correct name and image
    const itemNameElement = screen.getByText("Coffee");
    const itemImageElement = screen.getByAltText("Coffee");

    expect(itemNameElement).toBeInTheDocument();
    expect(itemImageElement).toBeInTheDocument();
    expect(itemImageElement).toHaveAttribute("src", "coffee-image.jpg");
  });

  it("renders loading state when no item is found", () => {
    render(
      <MemoryRouter initialEntries={[`/menu/invalid-id`]}>
        <Route path="/menu/:id">
          <MenuItemImage />
        </Route>
      </MemoryRouter>,
    );

    // Check if the component renders loading state
    const loadingElement = screen.getByText("Loading - The Little Corner Cafe");

    expect(loadingElement).toBeInTheDocument();
  });
});
