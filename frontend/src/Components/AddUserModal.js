import React, { useState } from "react";
import "./Modal.css";

export default function AddUserModal({ closeModal, addUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAddUser = (e) => {
    e.preventDefault();
    addUser({ name, email, password });
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add User</h2>
        <form onSubmit={handleAddUser}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="modal-buttons">
            <button type="submit">Add</button>
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
