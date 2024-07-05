import React from "react";
import { render } from "@testing-library/react";
import Interests from "./Interests";

test("renders Interests section with correct interests", () => {
  const { getByText } = render(<Interests />);
  expect(getByText("Intereses")).toBeInTheDocument();
  expect(getByText("Ajedrez")).toBeInTheDocument();
  expect(getByText("Programar")).toBeInTheDocument();
  expect(getByText("Tenis")).toBeInTheDocument();
  expect(getByText("Aprender cosas nuevas")).toBeInTheDocument();
});
