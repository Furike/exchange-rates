import { useEffect, useState } from "react";

const DATA_URL = "https://run.mocky.io/v3/4bf3f106-a10f-4fe8-970e-f88ad6dabbcd";

type Exchange = {
  currency?: string;
  precision?: number;
  nameI18N?: string;
  exchangeRate?: {
    buy?: number;
    middle?: number;
    sell?: number;
  };
};

type ApiResponse = {
  baseCurrency: string;
  fx: Exchange[];
};

const useExchangeRates = () => {
  const [data, setData] = useState<Exchange[]>();

  useEffect(() => {
    fetch(DATA_URL)
      .then((response) => response?.json())
      .then((response: ApiResponse) => setData(response.fx))
      .catch((err) => console.error(err));
  }, []);

  return { data };
};

export default useExchangeRates;
