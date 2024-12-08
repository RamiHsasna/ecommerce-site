import React, { useEffect, useState } from "react";
import "./App.css";
import ProductComponent from "./ProductComponent";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Liste des Produits</h1>
      <div className="products--container">
        {products.map((product) => (
          <ProductComponent
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
