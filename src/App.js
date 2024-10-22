import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Define your components for each route
function Home() {
  return <h1>Hello</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Careers() {
  return <h1>Careers</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
}

export default App;
