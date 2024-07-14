import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Terminal from './components/Terminal';
import About from './components/About';
import Projects from './components/Projects';
import Donut from './components/Donut';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Terminal />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/donut" element={<Donut />} />
      </Routes>
    </Router>
  );
}

export default App;