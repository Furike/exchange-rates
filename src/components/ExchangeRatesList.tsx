import { Exchange } from "../hooks/useExchangeRates";
import ExchangeRate from "./ExchangeRate";

type Props = {
  rates: Exchange[];
};

function ExchangeRatesList({ rates }: Props) {
  return (
    <div>
      {rates.map((exchnage, index) => (
        <ExchangeRate rate={exchnage} key={exchnage.currency + index} />
      ))}
    </div>
  );
}

export default ExchangeRatesList;
