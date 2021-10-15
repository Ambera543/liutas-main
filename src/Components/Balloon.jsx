// import { Component } from 'react';

import React, { useState } from "react";
const colors = ["red", "green", "blue", "yellow", "pink", "purple", "black", "orange"];
const generateColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};
const balloonArr = Array(10)
  .fill()
  .map((_, i) => ({ id: i, popped: false, color: generateColor() }));
export default function App() {
  const [balloons, setBalloons] = useState(balloonArr);
  const onPop = (index) => {
    setBalloons((balloons) => {
      const b = [...balloons];
      b[index].popped = true;
      return b;
    });
  };
  return (
    <div className="App">
      <div>
        {balloons.map((b, i) => {
          if (!b.popped) {
            return (
              <div className="balloon-container" key={b.id}>
                <div
                  className="balloon"
                  style={{ backgroundColor: b.color }}
                  onClick={() => onPop(i)}
                ></div>
              </div>
            );
          } else {
            return <div className="balloon-container">{b.id}</div>;
          }
        })}
      </div>
    </div>
  );
}
// class Balloon extends Component {

//     constructor(props) {
//         super();
//         this.state = {
//             balloon: Date.now(),
//             color: '#' + Math.floor(Math.random()*16777215).toString(16)
//         };
//     }

//     componentDidMount() {

//         // setInterval(
//         //     () => this.tick(),
//         //     1000
//         // );
//     }

//     tick() {
//         this.setState({
//           balloon: Date.now(),
//           color: '#' + Math.floor(Math.random()*16777215).toString(16)
//         });
//       }

//     click = () => {

// // console.log(this)

//     this.setState({
//         balloon: Date.now(),
//         color: '#' + Math.floor(Math.random()*16777215).toString(16)
//     });
//     }



//     render() {
//         return (
//             <>
//             <h1 style={{backgroundColor: this.state.color}}>{this.state.balloon}
//             <button onClick={this.click}>CLICK</button>
//             </h1>
            
//             </>
//         )
//     }

// }

// export default Balloon;