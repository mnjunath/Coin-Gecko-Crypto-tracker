import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinData(page = 1, currency = "usd") {
    const perPage = 10;
  try {
    const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&page=${page}&per_page=${perPage}`);
    console.log("✅ API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching coin data:", error.message);
    return [];
  }
}
