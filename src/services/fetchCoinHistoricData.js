const fetchCoinHistoricData = async (coinId, interval, currency, days) => {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch historic data");
  return response.json();
};

export default fetchCoinHistoricData;
