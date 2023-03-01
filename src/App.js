import './App.css';
import { useState } from 'react';
// function App(props) {
//   return (
//     <div className="App">
//       <h1>hello {props.library}</h1>
//     </div>
//   );
// }

//Destructuring arrays and objects
function App({ library }) {
  const [emotion, setEmotion] = useState('sad');
  return (
    <div className="App">
      <h1>Hello {library}</h1>
      <h1>I am {emotion}</h1>
      <button onClick={() => setEmotion('happy')}>Happy</button>
    </div>
  );
}

const cities = ['Tokyo', 'Shanghai'];
console.log(cities[0]);

const [tokyo] = ['Tokyo', 'Shanghai'];
console.log(tokyo);

export default App;
