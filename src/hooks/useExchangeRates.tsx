import { useEffect, useState } from "react";

const DATA_URL = "https://run.mocky.io/v3/4bf3f106-a10f-4fe8-970e-f88ad6dabbcd";

type ExchangeAPI = {
  currency?: string;
  precision?: number;
  nameI18N?: string;
  exchangeRate?: {
    buy?: number;
    middle?: number;
    sell?: number;
  };
};

export type Exchange = Omit<ExchangeAPI, "currency"> & {
  currency: string;
};

type ApiResponse = {
  baseCurrency: string;
  fx: ExchangeAPI[];
};

const useExchangeRates = () => {
  const [data, setData] = useState<ExchangeAPI[]>();
  const filteredData = data?.filter((e) => !!e.currency?.trim());

  useEffect(() => {
    fetch(DATA_URL)
      .then((response) => response?.json())
      .then((response: ApiResponse) => setData(response.fx))
      .catch((err) => console.error(err));
  }, []);

  return { data: filteredData as Exchange[] };
};

export default useExchangeRates;
