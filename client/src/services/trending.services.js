import axios from "axios";

async function fetchTrendingMediaData(media, time_window, langauge) {
  try {
    const url = "http://localhost:3001/trending";

    const response = await axios.get(url, {
      params: {
        media,
        time_window,
        langauge,
      },
    });

    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      console.log(error.response.data);
      throw new Error(error.response.data);
    }

    console.log(error.message);
    throw new Error(error.message);
  }
}

export { fetchTrendingMediaData };
