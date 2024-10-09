import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(5);

  const addValue = () => {
    if (count == 20) {
      return;
    }
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseVal = () => {
    if (count < 1) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <div>
        <h1>COUNTER VALUE :{count} </h1>
        <button className="bg-blue-400 rounded-md p-2" onClick={addValue}>
          Add Value
        </button>
        <br />
        <br />
        <button className="bg-blue-400 rounded-md p-2" onClick={decreaseVal}>
          Decrease Value
        </button>
      </div>
    </>
  );
};

export default Counter;
