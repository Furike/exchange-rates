import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ExchangeRatesList from "./ExchangeRatesList";

describe("ExchangeRatesList", () => {
  it("renders the ExchangeRatesList component", () => {
    const rates = [
      {
        currency: "USD",
        baseCurrency: "EUR",
        precision: 2,
        nameI18N: "US Dollar",
        exchangeRate: {
          sell: 1.14,
        },
      },
      {
        currency: "XXX",
        baseCurrency: "EUR",
        precision: 2,
        nameI18N: undefined,
        exchangeRate: {
          sell: 1.14,
        },
      },
    ];
    const result = render(<ExchangeRatesList rates={rates} />);
    expect(result.container.children[0].children.length).toBe(rates.length);
  });
});
