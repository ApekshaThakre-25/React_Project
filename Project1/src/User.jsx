import React from "react";

const user = {
  name: "Katherine",
  age: 23,
  role: "Frontend Developer Trainee",
  image:
    "https://images.unsplash.com/photo-1726809448984-2e7f60cc6e97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D",
};

const UserData = ({ username }) => {
  const { name, age, role, image } = user;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <h6>Role: {role}</h6>
      <img src={image} alt={name} style={{ width: "200px" }} />
      <h3>Username: {username}</h3>
    </div>
  );
};

export default UserData;
