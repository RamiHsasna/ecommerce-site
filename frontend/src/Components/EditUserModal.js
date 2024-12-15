import React, { useState } from "react";
import "./Modal.css";

export default function EditUserModal({ closeModal, user, updateUser }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    updateUser(user._id, { name, email, password });
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit User</h2>
        <form onSubmit={handleUpdateUser}>
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
            <button type="submit">Save</button>
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
