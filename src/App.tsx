import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Inicio</h2>;
}

function About() {
  return <h2>Acerca de</h2>;
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/about">Acerca</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
