// import Balloon from "./Components/Balloon";
import React, { useState } from "react";

const generateColor = () => {
  const colors = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + colors;
};

function App() {
  const balloonArr = Array(10)
    .fill()
    .map((_, i) => ({ id: i, bum: false, color: generateColor() }));
  const [count, setCount] = useState(0);
  const [balloons, setBalloons] = useState(balloonArr);
  const onPop = (index) => {
    setBalloons((balloons) => {
      const b = [...balloons];
      b[index].bum = true;
      return b;
    });
  };
  return (
    <>
      <div>
        {balloons.map((b, i) => {
          if (!b.bum) {
            return (
              <div className="balloon-container" key={b.id}>
                <div
                  className="balloon"
                  style={{ backgroundColor: b.color }}
                  onClick={() => setCount(count + 1) || onPop(i)}
                ></div>
              </div>
            );
          } else {
            return ""
          }
        })}
      </div>
      <div>
        <h1 className="counter-container">You boom {count} balloon(s)</h1>
      </div>
    </>
  );
}

export default App;
// {i + 1}