import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ cartCount }) {
  return (
    <header>
      <h1>Liste des Produits</h1>
      <nav className="nav--container">
        <Link to="/cart">Cart ({cartCount})</Link>
        <Link to="/users">List of Users</Link>
      </nav>
    </header>
  );
}
