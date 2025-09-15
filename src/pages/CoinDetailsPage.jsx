import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinDetails } from "../services/fetchCoinDetails";
import parse from "html-react-parser";
import "./CoinDetailsPage.css";
import CoinInfoContainer from "../components/CoinInfo/CoinInfoContainer";

function CoinDetailsPage() {
  const { coinId } = useParams();

  const {
    isError,
    isLoading,
    data: coin,
  } = useQuery({
    queryKey: ["coin", coinId],
    queryFn: () => fetchCoinDetails(coinId),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError) return <div className="error">Error: Something went wrong.</div>;

  return (
    <div className="coin-details-container">
      <div className="coin-sidebar">
        <img
          className="coin-image"
          src={coin?.image?.large || ""}
          alt={coin?.name || "Coin"}
        />
        <h1 className="coin-title">{coin?.name || "Unknown Coin"}</h1>

        <p className="coin-description">
          {coin?.description?.en
            ? parse(coin.description.en)
            : "No description available."}
        </p>

        <div className="coin-stats">
          <div className="coin-stat">
            <h2>Rank</h2>
            <span>{coin?.market_cap_rank ?? "N/A"}</span>
          </div>

          <div className="coin-stat">
            <h2 className="highlight">Current Price</h2>
            <span>
              {coin?.market_data?.current_price?.usd
                ? `$${coin.market_data.current_price.usd.toLocaleString()}`
                : "N/A"}
            </span>
          </div>
        </div>
      </div>

      <div className="coin-info">
        <CoinInfoContainer coinId={coinId} />
      </div>
    </div>
  );
}

export default CoinDetailsPage;
