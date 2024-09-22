import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: "Vite + React" });
    expect(heading).toBeInTheDocument();
  });
});
