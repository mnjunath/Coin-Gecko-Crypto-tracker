import CoinInfo from "./CoinInfo";
import { useQuery } from "@tanstack/react-query";
import CurrencyStore from "../../stores/CurrencyStore";
import fetchCoinHistoricData from "../../services/fetchCoinHistoricData.js";
import React, { useState } from "react";
import Alert from "../Alert/Alert";

function CoinInfoContainer({ coinId }) {
  const currencyStore = CurrencyStore;
  const currency = currencyStore.currency || "usd"; // default to usd

  const [days, setDays] = useState(7);
  const [interval, setInterval] = useState("daily"); // correct hook

  const {
    data: historicData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coinHistoricData", coinId, currency, days, interval],
    queryFn: () => fetchCoinHistoricData(coinId || "bitcoin", interval, currency, days),
    enabled: !!coinId,
    gcTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <Alert message="Error fetching data" type="error" />;

  return (
    <CoinInfo
      historicData={historicData}
      setDays={setDays}
      setInterval={setInterval} // ✅ use correct setter
    />
  );
}

export default CoinInfoContainer;
