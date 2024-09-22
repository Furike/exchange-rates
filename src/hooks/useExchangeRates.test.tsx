import { describe, expect, it } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import useExchangeRates from "./useExchangeRates";

describe("useExchangeRates", () => {
  it("Fetches data", async () => {
    const { result } = renderHook(() => useExchangeRates());
    await waitFor(() => {
      expect(result.current.data).toBeDefined();
    });
  });
});
