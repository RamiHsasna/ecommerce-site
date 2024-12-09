// src/index.js
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // Si vous avez des styles CSS personnalisés
import App from "./App"; // C'est le composant principal de votre application
import reportWebVitals from "./reportWebVitals"; // Optionnel, pour les métriques de performance

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Pour mesurer la performance de l'application (optionnel)
reportWebVitals();
