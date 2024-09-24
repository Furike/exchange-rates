import { describe, expect, it } from "vitest";
import { parseHash } from "./parseHash";

describe("helpers", () => {
  it("parseHash returns correct value for simple input", () => {
    const value = "USD";
    const hash = `#search=${value}`;
    const parsedValue = parseHash(hash);
    expect(parsedValue).toBe(value);
  });
  it("parseHash returns correct value for multiple terms", () => {
    const value = "USD";
    const hash = `#foo=bar&search=${value}`;
    const parsedValue = parseHash(hash);
    expect(parsedValue).toBe(value);
  });
  it("parseHash returns empty string for incorrect input", () => {
    const value = "USD";
    const hash = `#searches=${value}`;
    const parsedValue = parseHash(hash);
    expect(parsedValue).toBe("");
  });
});
