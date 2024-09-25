import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: "Exchange rates" });
    expect(heading).toBeInTheDocument();
  });

  it("updates search value", () => {
    const newValue = "EUR";
    render(<App />);
    const input = screen.getByLabelText("Search");
    fireEvent.change(input, { target: { value: newValue } });
    expect(input).toHaveValue(newValue);
  });

  it("search ignores white space", () => {
    const newValue = " ";
    render(<App />);
    const input = screen.getByLabelText("Search");
    fireEvent.change(input, { target: { value: newValue } });
    expect(input).toHaveValue(newValue.trim());
  });
});
