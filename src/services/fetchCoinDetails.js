import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinDetails(id) {
  try {
    const response = await axiosInstance.get(`/coins/${id}`);
    console.log("✅ API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching coin data:", error.message);
    return [];
  }
}
