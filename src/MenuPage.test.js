import React from "react";
import { render, screen } from "@testing-library/react";
import MenuPage from "./pages/MenuPage";

const mockMenuData = {
  coffeeItems: [{ id: "1", name: "Coffee 1", price: 2.5 }],
};

jest.mock("../db.json", () => mockMenuData);

describe("MenuPage component", () => {
  it("renders the menu page correctly", () => {
    const pageTitle = screen.getByText("Menu");
    expect(pageTitle).toBeInTheDocument();

    const menuList = screen.getByTestId("menu-list");
    expect(menuList).toBeInTheDocument();

    const menuItem = screen.getByText("Coffee 1");
    expect(menuItem).toBeInTheDocument();
  });
});
