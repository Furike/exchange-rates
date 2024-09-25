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
  baseCurrency: string;
};

type ApiResponse = {
  baseCurrency: string;
  fx: ExchangeAPI[];
};

const useExchangeRates = () => {
  const [data, setData] = useState<ApiResponse>();

  useEffect(() => {
    fetch(DATA_URL)
      .then((response) => response?.json())
      .then((response: ApiResponse) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  if (!data) {
    return { data: [] as Exchange[] };
  }

  const filteredData = data.fx.filter((e) => !!e.currency?.trim());
  const dataWithBaseCurrency = filteredData.map((e) => ({
    ...e,
    baseCurrency: data.baseCurrency,
  }));

  return { data: dataWithBaseCurrency as Exchange[] };
};

export default useExchangeRates;
