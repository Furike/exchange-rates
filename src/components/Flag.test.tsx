import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Flag from "./Flag";

describe("Flag", () => {
  it("renders the Flag component", () => {
    const code = "US";
    render(<Flag countryCode={code} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toBe(`/flags/${code.toLowerCase()}.png`);
  });
});
