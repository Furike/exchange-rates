import "./App.css";
import useExchangeRates from "./hooks/useExchangeRates";
import ExchangeRatesList from "./components/ExchangeRatesList";

function App() {
  const exchanges = useExchangeRates();

  return (
    <>
      <h1>Exchange rates</h1>
      {exchanges.data && <ExchangeRatesList rates={exchanges.data} />}
    </>
  );
}

export default App;
