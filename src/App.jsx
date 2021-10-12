// import './App.css';

//import Box from './Components/Box';
import Simple from './Components/Simple';



const data = [
  {
    ls: '2px',
    simpleColor: '#ff0000',
    simpleNumber: 1
  },
    {
    ls: '2px',
    simpleColor:  '#BEBEBE',
    simpleNumber: 2
  },
    {
    ls: '2px',
    simpleColor:  '#000080',
    simpleNumber: 3
  },
    {
    ls: '2px',
    simpleColor:  '#23a7d6',
    simpleNumber: 4
  },
  {
    ls: '2px',
    simpleColor: '#00FFFF',
    simpleNumber: 5
  },
  {
    ls: '2px',
    simpleColor: '#f04355',
    simpleNumber: 6
  },
  {
    ls: '2px',
    simpleColor: '#008080',
    simpleNumber: 7
  },
  {
    ls: '2px',
    simpleColor: '#00FF00',
    simpleNumber: 8
  }
];


function App() {

  return (
    <>
    {data.map((simple, index) => <Simple key={index} simpleColor={simple.simpleColor} ls={simple.ls} simpleNumber={simple.simpleNumber} />)}
    </>
  );

}



export default App;



// const a = 5;
// const b = 6;

// const data = [
//   {
//     ls: '2px',
//     boxColor: 'green',
//     boxNumber: 68
//   },
//     {
//     ls: '2px',
//     boxColor: 'yellow',
//     boxNumber: 45
//   },
//     {
//     ls: '2px',
//     boxColor: 'white',
//     boxNumber: 90
//   },
//     {
//     ls: '4px',
//     boxColor: 'pink',
//     boxNumber: 101
//   }
// ];


// function App() {

//   return (
//     <>
//     {data.map((box, index) => <Box key={index} boxColor={box.boxColor} ls={box.ls} boxNumber={box.boxNumber} />)}
//     </>
//   );

// }