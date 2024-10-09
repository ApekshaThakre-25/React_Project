import React from "react";
import Button from "./Button";
import UserData from "./User";
import Counter from "./Counter";
import "./index.css";

const App = () => {
  return (
    <div className="m-5">
      <h1>Hello world!</h1>
      <Button />
      <h2>HEY, There I am learning React</h2>
      <UserData username="Apeksha" />
      <Counter />
    </div>
  );
};

export default App;
