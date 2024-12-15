import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./Components/Cart";
import Users from "./Components/Users";
import "./App.css";
import ProductComponent from "./Components/ProductComponent";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [users, setUsers] = useState([]);
  //fetch product data from the backend endpoint
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });

  const deleteUser = (userId) => {
    fetch(`http://localhost:5000/users/${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete user");
        }
        setUsers(users.filter((user) => user._id !== userId));
      })
      .catch((error) => console.error(error));
  };

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
          <Link to="/users">List of Users</Link>
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
        <Route
          path="/users"
          element={
            <div className="users--container">
              {users.map((user) => (
                <Users
                  key={user._id}
                  id={user._id}
                  name={user.name}
                  email={user.email}
                  deleteUser={deleteUser}
                />
              ))}
            </div>
          }
        />
      </Routes>
    </div>
  );
}
