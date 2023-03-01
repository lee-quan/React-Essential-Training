import './App.css';
import { useRef } from 'react';

function App() {
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
  };

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="color title" ref={txtTitle} />
      <input type="color" ref={hexColor} />
      <button>Add</button>
    </form>
  );
}

export default App;
