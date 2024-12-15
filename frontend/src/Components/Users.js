import React, { useState } from "react";
import "./Users.css";
import AddUserModal from "./AddUserModal";
import EditUserModal from "./EditUserModal";

export default function Users({ users, deleteUser, updateUser, addUser }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openEditModal = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="users-container">
      <h2>Users</h2>
      <button className="user-addButton" onClick={openAddModal}>
        Add User
      </button>
      {users.map((user) => (
        <div key={user._id} className="user">
          <h3 className="user--name">{user.name}</h3>
          <p className="user--email">{user.email}</p>
          <div className="buttons--container">
            <button
              className="user-editButton"
              onClick={() => openEditModal(user)}
            >
              Edit
            </button>
            <button
              className="user-delButton"
              onClick={() => deleteUser(user._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {isAddModalOpen && (
        <AddUserModal closeModal={closeAddModal} addUser={addUser} />
      )}
      {isEditModalOpen && selectedUser && (
        <EditUserModal
          closeModal={closeEditModal}
          user={selectedUser}
          updateUser={updateUser}
        />
      )}
    </div>
  );
}
