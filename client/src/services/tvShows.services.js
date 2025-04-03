import axios from "axios";

async function fetchTVShowsList(list, page, language) {
  try {
    const url = "http://localhost:3001/tv_shows";

    const response = await axios.get(url, {
      params: {
        list,
        page,
        language,
      },
    });

    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw new Error(error.response.data);
    }

    throw new Error(error.message);
  }
}

export { fetchTVShowsList };
