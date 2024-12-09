import UserModel from "./models/user.model";
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

//Get user data from the fakestore API
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

//Get products data from the fakestore API
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
