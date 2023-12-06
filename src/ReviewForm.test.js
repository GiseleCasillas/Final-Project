import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ReviewForm from "./pages/ReviewForm";

describe("ReviewForm component", () => {
  test("renders form and calls addReview on submit", () => {
    const mockAddReview = jest.fn();

    render(<ReviewForm addReview={mockAddReview} />);

    fireEvent.change(screen.getByLabelText("Your Name:"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Rating:"), {
      target: { value: 5 },
    });
    fireEvent.change(screen.getByLabelText("Comment:"), {
      target: { value: "Great coffee!" },
    });

    fireEvent.click(screen.getByText("Submit Review"));

    expect(mockAddReview).toHaveBeenCalledWith({
      author: "John Doe",
      rating: 5,
      content: "Great coffee!",
    });

    expect(screen.getByLabelText("Your Name:")).toHaveValue("");
    expect(screen.getByLabelText("Rating:")).toHaveValue("0");
    expect(screen.getByLabelText("Comment:")).toHaveValue("");
  });
});
