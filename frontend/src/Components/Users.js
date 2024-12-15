import React from "react";
import "./Users.css";

export default function Users({ id, name, email, deleteUser }) {
  return (
    <div className="user">
      <h2 className="user--id">User Id : {id}</h2>
      <h2 className="user--name">Username: {name}</h2>
      <h2 className="user--email">User Email: {email}</h2>
      <button className="user-delButton" onClick={() => deleteUser(id)}>
        Delete
      </button>
    </div>
  );
}
