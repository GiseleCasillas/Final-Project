import React from "react";
import { render, screen } from "@testing-library/react";
import ReviewBox from "./pages/ReviewBox";

describe("ReviewBox component", () => {
  const mockReview = {
    author: "John Doe",
    rating: 4,
    content: "Great experience!",
  };

  it("renders the review box correctly", () => {
    render(<ReviewBox {...mockReview} />);

    const authorElement = screen.getByText("John Doe");
    const ratingElement = screen.getByText("Rating: 4");
    const contentElement = screen.getByText("Great experience!");

    expect(authorElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
