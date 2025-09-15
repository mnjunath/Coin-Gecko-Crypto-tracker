import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useNavigate } from "react-router-dom";
import "./CoinTable.css";

function CoinTable({ currency }) {
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const handleCoinRedirect = (id) => {
    navigate(`/details/${id}`);
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page, currency],
    queryFn: () => fetchCoinData(page, currency),
    retry: 2,
    retryDelay: 1000,
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="coin-table-container">
      <div className="coin-table-header">
        <div className="col-coin">Coin</div>
        <div className="col-price">Price</div>
        <div className="col-change">24h Change</div>
        <div className="col-marketcap">Market Cap</div>
      </div>

      <div className="coin-table-body">
        {data &&
          data.map((coin) => (
            <div
              key={coin.id}
              className="coin-row"
              onClick={() => handleCoinRedirect(coin.id)} // ✅ row is clickable
            >
              <div className="coin-info">
                <div className="coin-img">
                  <img src={coin.image} alt={coin.name} />
                </div>
                <div className="coin-text">
                  <div className="coin-name">{coin.name}</div>
                  <div className="coin-symbol">{coin.symbol}</div>
                </div>
              </div>

              <div className="col-price">{coin.high_24h}</div>
              <div
                className={`col-change ${
                  coin.price_change_24h >= 0 ? "positive" : "negative"
                }`}
              >
                {coin.price_change_24h}
              </div>
              <div className="col-marketcap">{coin.market_cap}</div>
            </div>
          ))}
      </div>

      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-prev"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="btn btn-next"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CoinTable;
