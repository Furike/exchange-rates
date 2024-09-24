import "./App.css";
import useExchangeRates from "./hooks/useExchangeRates";
import ExchangeRatesList from "./components/ExchangeRatesList";
import SearchInput from "./components/SearchInput";
import { useState } from "react";
import { parseHash } from "./helpers/parseHash";

function App() {
  const exchanges = useExchangeRates();
  const [searchCode, setSearchCode] = useState(() =>
    parseHash(window.location.hash)
  );

  const filteredExchanges = exchanges.data?.filter((exchange) =>
    exchange.currency.includes(searchCode.toUpperCase())
  );

  return (
    <>
      <h1>Exchange rates</h1>
      <SearchInput value={searchCode} setValue={setSearchCode} />
      {exchanges.data && <ExchangeRatesList rates={filteredExchanges} />}
    </>
  );
}

export default App;
