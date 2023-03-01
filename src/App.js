import './App.css';
import { useState, useEffect, useReducer } from 'react';

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
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  useEffect(() => {
    console.log(emotion, 'without dependency array');
  }, []);

  useEffect(() => {
    console.log(emotion, 'with dependency array');
  }, [emotion]);

  return (
    <div className="App">
      <h1>Hello {library}</h1>
      <h1>I am {emotion}</h1>
      <button onClick={() => setEmotion('happy')}>Happy</button>

      <input type="checkbox" value={checked} onChange={setChecked} />
      <label>{checked ? 'checked' : 'notChecked'}</label>
    </div>
  );
}

const cities = ['Tokyo', 'Shanghai'];
console.log(cities[0]);

const [tokyo] = ['Tokyo', 'Shanghai'];
console.log(tokyo);

export default App;
