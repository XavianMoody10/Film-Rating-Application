import axios from "axios";

async function fetchMoviesByList(list, page, language) {
  try {
    const url = "http://localhost:3001/movies";

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

async function fetchMovieDetails(id, language) {
  try {
    const url = "http://localhost:3001/movies/details";

    const response = await axios.get(url, {
      params: {
        id,
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

export { fetchMoviesByList, fetchMovieDetails };
