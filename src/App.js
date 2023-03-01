import './App.css';
import { useState, useEffect } from 'react';

const GithubUser = ({ name, id, avatar }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{id}</p>
      <img src={avatar} alt={name} />
    </div>
  );
};
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/lee-quan`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    console.log(error);
    return <h1>Error</h1>;
  }
  if (data) {
    return (
      <h1>
        <GithubUser name={data.name} id={data.id} avatar={data.avatar_url} />
      </h1>
    );
  }
}

export default App;
