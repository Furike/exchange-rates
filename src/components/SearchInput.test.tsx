import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  it("renders the SearchInput component", () => {
    const value = "USD";
    const setValue = vi.fn();
    render(<SearchInput value={value} setValue={setValue} />);
    const input = screen.getByLabelText("Search");
    expect(input).toHaveValue(value);
  });
});
