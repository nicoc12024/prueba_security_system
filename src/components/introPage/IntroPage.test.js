import React from "react";
import { render } from "@testing-library/react";
import IntroPage from "./IntroPage";

test("renders IntroPage with correct text", () => {
  const { getByText } = render(<IntroPage fadeOut={false} fadeOutText={false} />);
  expect(getByText("Desarrollador Frontend - Security and Systems")).toBeInTheDocument();
  expect(getByText("Prueba técnica de Nicolás Cabello")).toBeInTheDocument();
});

test("applies fadeOut class when fadeOut is true", () => {
  const { container } = render(<IntroPage fadeOut={true} fadeOutText={false} />);
  expect(container.firstChild).toHaveClass("fadeOut");
});

test("applies fadeOut class to text when fadeOutText is true", () => {
  const { container } = render(<IntroPage fadeOut={false} fadeOutText={true} />);
  expect(container.querySelector(".introText")).toHaveClass("fadeOut");
});
