import { Auth } from "../models/auth.model.js";
import { User } from "../models/user.model.js";

async function createUser(req, res) {
  const { email, username, password } = req.query;

  try {
    const exist = await User.exists({ email });

    if (exist) {
      throw { status: 404, message: "Email is already registered" };
    }

    const newUSer = await User.create({ email, username });

    await Auth.create({
      email,
      username,
      password,
      accountID: newUSer._id,
    });

    return res.send(newUSer);
  } catch (error) {
    return res.status(error.status).send(error.message);
  }
}

export { createUser };
