import "./ExchangeRate.css";
import { Exchange } from "../hooks/useExchangeRates";
import Flag from "./Flag";

export const MISSING_TEXT = "Missing data";

type Props = {
  rate: Exchange;
};

function ExchangeRate({ rate }: Props) {
  const sell = `${
    rate.exchangeRate?.sell?.toFixed(rate.precision ?? 0) ?? MISSING_TEXT
  } ${rate.baseCurrency}`;
  return (
    <div className="list-item">
      <div className="country">
        <Flag countryCode={rate.currency.slice(0, 2)} />
        <div className="country-name">
          <b>{rate.currency}</b>
          <i>{rate.nameI18N ?? MISSING_TEXT}</i>
        </div>
      </div>
      <div className="sell" data-testid="sell">
        {sell}
      </div>
    </div>
  );
}

export default ExchangeRate;
