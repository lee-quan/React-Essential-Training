import './App.css';

// function App(props) {
//   return (
//     <div className="App">
//       <h1>hello {props.library}</h1>
//     </div>
//   );
// }

//Destructuring arrays and objects
function App({ library }) {
  return (
    <div className="App">
      <h1>hello {library}</h1>
    </div>
  );
}

const cities = ['Tokyo', 'Shanghai'];
console.log(cities[0]);

const [tokyo] = ['Tokyo', 'Shanghai'];
console.log(tokyo);

export default App;
