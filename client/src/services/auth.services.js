import axios from "axios";

async function userSignup(username, password, email) {
  const url = "http://localhost:3001/signup";

  try {
    if (!email) {
      throw new Error("Please enter a email");
    }

    if (!username) {
      throw new Error("Please enter a username");
    }

    if (!password) {
      throw new Error("Please enter a password");
    }

    const response = await axios.post(url, { username, password, email });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export { userSignup };
