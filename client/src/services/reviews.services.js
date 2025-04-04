import axios from "axios";

async function postMediaReview(userID, review, rating) {
  const url = "http://localhost:3001/reviews";

  try {
    if (!userID) {
      throw new Error("userID is required");
    }

    if (!review) {
      throw new Error("Review is empty");
    }

    const response = await axios.post(url, { userID, review, rating });
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw new Error(error.response.data);
    }

    throw new Error(error.message);
  }
}

export { postMediaReview };
