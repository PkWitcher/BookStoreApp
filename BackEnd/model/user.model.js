import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,  // Fixed typo
  },
  email: {
    type: String,    // Fixed the type from "String" to String
    required: true,  // Fixed typo
    unique: true,
  },
  password: {
    type: String,
    required: true,  // Fixed typo
  },
});

const User = mongoose.model("User", userSchema);

export default User;
