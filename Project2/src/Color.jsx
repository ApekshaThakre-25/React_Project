import React, { useState, useEffect } from "react";

const Color = () => {
  const [bgColor, setBgColor] = useState("black"); 
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]); 

  return (
    <div className="text-black mt-96 m-2 p-4 text-center font-bold font-serif h-screen w-screen">
      <button
        className="ml-8 bg-red-500 rounded-md w-16 p-2"
        onClick={() => setBgColor("red")}
      >
        Red
      </button>
      <button
        className="ml-8 rounded-md w-16 p-2 bg-green-500"
        onClick={() => setBgColor("green")}
      >
        Green
      </button>
      <button
        className="ml-8 rounded-md w-16 p-2 bg-blue-500"
        onClick={() => setBgColor("blue")}
      >
        Blue
      </button>
      <button
        className="ml-8 rounded-md w-16 p-2 bg-violet-500"
        onClick={() => setBgColor("violet")}
      >
        Violet
      </button>
      <button
        className="ml-8 rounded-md w-16 p-2 bg-gray-500"
        onClick={() => setBgColor("gray")}
      >
        Grey
      </button>
      <button
        className="ml-8 rounded-md w-16 p-2 bg-yellow-500"
        onClick={() => setBgColor("yellow")}
      >
        Yellow
      </button>
      <button
        className="ml-8 rounded-md w-16 p-2 bg-pink-500"
        onClick={() => setBgColor("pink")}
      >
        Pink
      </button>
      <button
        className="ml-8 rounded-md w-16 p-2 bg-purple-500"
        onClick={() => setBgColor("purple")}
      >
        Purple
      </button>
      <button
        className="ml-8 rounded-md w-16 p-2 bg-cyan-500"
        onClick={() => setBgColor("cyan")}
      >
        Cyan
      </button>
      <button
        className="ml-8 rounded-md w-16 p-2 bg-white"
        onClick={() => setBgColor("white")}
      >
        White
      </button>
    </div>
  );
};

export default Color;

