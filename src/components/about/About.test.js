import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

test("renders About section with correct text", () => {
  render(<About />);
  expect(screen.getByText("Sobre mí")).toBeInTheDocument();
  expect(
    screen.getByText(/Desarrollador de frontend con más de un año de experiencia/i)
  ).toBeInTheDocument();
});
