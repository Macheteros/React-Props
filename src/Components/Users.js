import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <div
        className="card ext-dark bg-light"
        style={{ width: "18rem", margin: "0 auto" }}
      >
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
          <p className="card-text">{user.phone}</p>
          <a href={`mailto:${user.email}`} className="card-link">
            Send an email
          </a>
          <a href={user.website} className="card-link">
            Go to Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default User;