import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ExchangeRate, { MISSING_TEXT } from "./ExchangeRate";

describe("ExchangeRate", () => {
  it("renders the ExchangeRate component", () => {
    const rate = {
      currency: "USD",
      baseCurrency: "EUR",
      precision: 2,
      nameI18N: "US Dollar",
      exchangeRate: {
        sell: 1.14,
      },
    };
    render(<ExchangeRate rate={rate} />);
    const currency = screen.getByText("USD");
    expect(currency).toBeInTheDocument();
  });

  it("renders the ExchangeRate component with Missing data", () => {
    const rate = {
      currency: "USD",
      baseCurrency: "EUR",
      precision: 2,
      nameI18N: "US Dollar",
      exchangeRate: {
        sell: undefined,
      },
    };
    render(<ExchangeRate rate={rate} />);
    const sell = screen.getByTestId("sell");
    expect(sell.textContent).toBe(`${MISSING_TEXT} ${rate.baseCurrency}`);
  });
});
