import React from "react";
import "./User.css";

const User = ({ data }) => {
  console.log(data);
  return (
    <div className="userCard">
      <img src={data.avatar} />
      <h1>
        {data.first_name} <span>{data.last_name}</span>
      </h1>
      <h2> {data.email}</h2>
    </div>
  );
};

export default User;

// avatar: "https://reqres.in/img/faces/4-image.jpg"
// email: "eve.holt@reqres.in"
// first_name: "Eve"
// id: 4
// last_name: "Holt"
