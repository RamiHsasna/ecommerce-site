import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./Cart";
import "./App.css";
import ProductComponent from "./ProductComponent";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  //fetch product data from the backend endpoint
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  //create routing to the cart page
  return (
    <div>
      <header>
        <h1>Liste des Produits</h1>
        <nav>
          <Link to="/cart">Cart ({cart.length})</Link>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            //create a re-usable product component and pass data as props
            <div className="products--container">
              {products.map((product) => (
                <ProductComponent
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                  addToCart={addToCart}
                />
              ))}
            </div>
          }
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </div>
  );
}

export default App;
