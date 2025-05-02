import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>tengo ganas de fiesta</h2>;
}

function About() {
  return <h2>hasta luego</h2>;
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">no puede ser</Link> | <Link to="/about">que hay</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
