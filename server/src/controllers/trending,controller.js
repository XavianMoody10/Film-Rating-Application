import axios from "axios";

async function getAllTrending(req, res) {
  const url = "https://api.themoviedb.org/3/trending/all/day";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    params: {
      language: "en-US",
    },
  };

  try {
    const response = await axios.get(url, options);
    res.send(response.data);
  } catch (error) {
    if (error.message === "Network error") {
      return res
        .status(502)
        .send(
          "Unable to connect to the external service. Please try again later."
        );
    }

    const status = error?.response?.status;
    const data = error?.response?.data;
    return res.status(status).send(data);
  }
}

export { getAllTrending };
