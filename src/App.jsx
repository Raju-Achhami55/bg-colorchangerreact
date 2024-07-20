import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");

  const changeColor = () => {};
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className=" flex justify-center pt-4">
        <div className="bg-white px-3 py-2 rounded-lg flex gap-5">
          <button
            className="bg-red-500 px-4 rounded text-white"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="bg-green-500 px-4 rounded text-white"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="bg-blue-500 px-4 rounded text-white"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
