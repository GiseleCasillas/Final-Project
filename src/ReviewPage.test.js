import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ReviewPage from "./pages/ReviewPage";
import { fetchReviews, addReview, updateReview, deleteReview } from "../api";

jest.mock("./api");

describe("ReviewPage component", () => {
  test("renders reviews and handles CRUD operations", async () => {
    const mockReviews = [
      { id: 1, author: "John Doe", rating: 4, content: "Great coffee!" },
      { id: 2, author: "Jane Doe", rating: 5, content: "Awesome place!" },
    ];

    fetchReviews.mockResolvedValueOnce(mockReviews);
    addReview.mockResolvedValueOnce({
      id: 3,
      author: "Bob Smith",
      rating: 3,
      content: "Could be better.",
    });
    updateReview.mockResolvedValueOnce({
      id: 1,
      author: "John Doe",
      rating: 4,
      content: "Updated content",
    });
    deleteReview.mockResolvedValueOnce();

    render(<ReviewPage />);

    await waitFor(() => {
      expect(screen.getByText("Great coffee!")).toBeInTheDocument();
      expect(screen.getByText("Awesome place!")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText("Author:"), {
      target: { value: "Bob Smith" },
    });
    fireEvent.change(screen.getByLabelText("Rating:"), {
      target: { value: 3 },
    });
    fireEvent.change(screen.getByLabelText("Content:"), {
      target: { value: "Could be better." },
    });
    fireEvent.click(screen.getByText("Submit Review"));

    await waitFor(() => {
      expect(screen.getByText("Could be better.")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Update"));

    await waitFor(() => {
      expect(screen.getByText("Updated content")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Delete"));

    await waitFor(() => {
      expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
    });
  });
});
