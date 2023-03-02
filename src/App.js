/* eslint-disable no-unused-vars */
import './App.css';
import { Link, Outlet } from 'react-router-dom';
export function App() {
  return (
    <>
      <nav>
        <Link to="/About">About</Link>
      </nav>
      APP
    </>
  );
}

export function History() {
  return <>HISTORY</>;
}
export function About() {
  return (
    <>
      <nav>
        <Link to="/">App</Link>
      </nav>
      ABOUT
      <br />
      <Outlet />
    </>
  );
}
