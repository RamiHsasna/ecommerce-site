import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    password: String,
  },
  {
    collection: "ecommerce-users",
  }
);

const User = mongoose.model("User ", userSchema); // Ensure no extra space in 'User '
export default User; // Correctly export the User model
