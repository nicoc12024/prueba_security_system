import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm with inputs and submit button", () => {
  render(<ContactForm />);
  expect(screen.getByPlaceholderText("Nombre")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Mensaje")).toBeInTheDocument();
  expect(screen.getByText("Enviar")).toBeInTheDocument();
});

test("prevents form submission when required fields are empty", () => {
  render(<ContactForm />);
  fireEvent.click(screen.getByText("Enviar"));

  expect(screen.getByPlaceholderText("Nombre")).toBeInvalid();
  expect(screen.getByPlaceholderText("Email")).toBeInvalid();
  expect(screen.getByPlaceholderText("Mensaje")).toBeInvalid();
});

test("shows error messages for fields exceeding character limits", () => {
  render(<ContactForm />);

  fireEvent.change(screen.getByPlaceholderText("Nombre"), {
    target: { value: "a".repeat(36) },
  });
  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "a".repeat(51) },
  });
  fireEvent.change(screen.getByPlaceholderText("Mensaje"), {
    target: { value: "a".repeat(801) },
  });

  fireEvent.click(screen.getByText("Enviar"));

  expect(screen.getByText("Excediste 1 caracteres, el máximo es 35")).toBeInTheDocument();
  expect(screen.getByText("Excediste 1 caracteres, el máximo es 50")).toBeInTheDocument();
  expect(
    screen.getByText("Excediste 1 caracteres, el máximo es 800")
  ).toBeInTheDocument();
});

test("shows success message on successful submit", () => {
  render(<ContactForm />);
  fireEvent.change(screen.getByPlaceholderText("Nombre"), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "john@example.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("Mensaje"), {
    target: { value: "Hello!" },
  });
  fireEvent.click(screen.getByText("Enviar"));
  expect(screen.getByText("Mensaje enviado con éxito")).toBeInTheDocument();
});
