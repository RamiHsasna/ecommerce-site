const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

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

const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.get("/products", async (req, res) => {
  try {
    const respone = await axios.get(
      "https://fakestoreapi.com/products?limit=8"
    );
    res.json(respone.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur backend demarre sur le port ${PORT}`);
});
