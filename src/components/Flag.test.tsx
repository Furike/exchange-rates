import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Flag, { UNKNOWN_FLAG } from "./Flag";

describe("Flag", () => {
  it("renders the Flag component", () => {
    const code = "US";
    render(<Flag countryCode={code} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toBe(`/flags/${code.toLowerCase()}.png`);
  });

  it("renders unknown flag", () => {
    const code = "GGWP";
    render(<Flag countryCode={code} />);
    const image = screen.getByRole("img");
    fireEvent.error(image);
    expect(image.getAttribute("src")).toBe(`/flags/${UNKNOWN_FLAG}.png`);
  });
});
