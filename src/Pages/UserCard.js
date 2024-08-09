import React from 'react';
import "../index.css";
function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <h3>{`${user.name.first} ${user.name.last}`}</h3>
      <p>Email: {user.email}</p>
      <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
    </div>
  );
}

export default UserCard;
