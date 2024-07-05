import React from "react";
import { render, screen, act } from "@testing-library/react";
import Header from "./Header";

// Advance the time to change the loading state
// Verify that the profile image is in the document
// Verify that the name is in the document

test("renders Header with profile image and name", async () => {
  jest.useFakeTimers();

  render(<Header />);

  act(() => {
    jest.advanceTimersByTime(5000);
  });

  expect(screen.getByAltText("Profile")).toBeInTheDocument();

  expect(screen.getByText("Nicolás")).toBeInTheDocument();

  jest.useRealTimers();
});
