import mongoose from "mongoose";

const { Schema } = mongoose;

const authSchema = new Schema({
  email: String,
  username: String,
  password: String,
  accountID: String,
});

const Auth = mongoose.model("Auth", authSchema);

export { Auth };
