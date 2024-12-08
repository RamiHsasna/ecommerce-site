const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const respone = await axios.get("https://fakestoreapi.com/users?limit=10");
    res.json(respone.data);
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
