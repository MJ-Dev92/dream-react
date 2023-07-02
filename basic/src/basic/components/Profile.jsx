import React from "react";

export default function Profile({ img, name, title, isNew, user }) {
  return (
    <>
      <div className="profile">
        <img className="photo" src={img} alt="avatar" />
        <h1>{name}</h1>
        <p>{title}</p>
        {isNew && <span className="new">new</span>}
      </div>
    </>
  );
}
