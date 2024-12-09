const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    collection: "ecommerce-users",
  }
);
export default User = userSchema;
