import axios from "axios";

async function fetchAllTrendingMedia() {
  const url = "http://localhost:3001/trending";

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    const data = error?.response?.data;

    if (data) {
      throw new Error(data);
    }

    throw new Error(error.message);
  }
}

export { fetchAllTrendingMedia };
