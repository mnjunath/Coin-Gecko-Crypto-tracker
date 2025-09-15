import Alert from "../Alert/Alert";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import chart from "chart.js/auto";
import "./CoinInfo.css";

function CoinInfo({ historicData, setDays, setInterval, days, currency }) {
  const chartdays = [
    { label: "24 Hours", value: 1 },
    { label: "7 Days", value: 7 },
    { label: "30 Days", value: 30 },
    { label: "90 Days", value: 90 },
    { label: "365 Days", value: 365 },
  ];

  function handleDayChange(event) {
    const daysSelected = event.target.value;
    if (daysSelected == 1) {
      setInterval("");
    } else {
      setInterval("daily");
    }
    setDays(Number(daysSelected));
  }

  chart.register(CategoryScale);

  if (!historicData) {
    return Alert({ message: "No data available", type: "error" });
  }

  return (
    <div className="coin-info-container">
      <div className="chart-wrapper">
        <Line
          data={{
            labels: historicData.prices.map((coinPrice) => {
              let date = new Date(coinPrice[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                label: `Price (Past ${days} days) in ${currency}`,
                data: historicData.prices.map((coinPrice) => coinPrice[1]),
                borderColor: "#3b82f6",
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                fill: true,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              point: { radius: 0 },
            },
          }}
        />
      </div>

      <div className="dropdown-wrapper">
        <select
          className="day-selector"
          onChange={handleDayChange}
          value={days}
        >
          {chartdays.map((day) => (
            <option key={day.value} value={day.value}>
              {day.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CoinInfo;
