import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Subcriptions from "./pages/Subcriptions";

describe("Subscriptions component", () => {
  it("renders the component and handles form submission", () => {
    render(<Subcriptions />);

    // Fill in the form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@example.com" },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/subscribe/i));

    // Validate that the form has been submitted (you can add more specific checks)
    expect(screen.getByText(/form submitted/i)).toBeInTheDocument();
  });

  it("renders validation errors for an invalid form", () => {
    render(<Subcriptions />);

    // Submit the form without filling in any fields
    fireEvent.click(screen.getByText(/subscribe/i));

    // Validate that the validation error messages are displayed
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(
      screen.getByText(/please enter a valid 10-digit phone number/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/please enter a valid email address/i),
    ).toBeInTheDocument();
  });
});
