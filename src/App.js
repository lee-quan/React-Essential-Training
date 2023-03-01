import './App.css';
import { useRef, useState } from 'react';

function App() {
  const txtTitle = useRef();
  const hexColor = useRef();

  const [title1, setTitle] = useState('');
  const [color1, setColor] = useState('#000000');
  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color},${title1}, ${color1}`);
  };

  return (
    <form onSubmit={submit}>
      {/* Uncontrolled Components */}
      <input type="text" placeholder="color title" ref={txtTitle} />
      <input type="color" ref={hexColor} />

      {/* Controlled Components */}
      <input
        type="text"
        placeholder="color title"
        value={title1}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input type="color" value={color1} onChange={(event) => setColor(event.target.value)} />
      <button>Add</button>
    </form>
  );
}

export default App;
