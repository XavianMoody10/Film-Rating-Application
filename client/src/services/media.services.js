import axios from "axios";

async function fetchMediaByList(media, list, page, language) {
  try {
    const url = "http://localhost:3001/media";

    const response = await axios.get(url, {
      params: {
        media,
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

export { fetchMediaByList };
