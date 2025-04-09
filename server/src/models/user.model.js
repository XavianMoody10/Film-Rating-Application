import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  username: String,
});

const User = mongoose.model("User", userSchema);

export { User };
