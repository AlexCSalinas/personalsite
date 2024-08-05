import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Terminal from './components/Terminal';
import About from './components/About';
import Projects from './components/Projects';
import Donut from './components/Donut';
import SimpleMode from './components/SimpleMode';

function App() {
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  const toggleMode = () => {
    setIsTerminalMode(!isTerminalMode);
  };

  return (
    <Router>
      <div className="App">
        {isTerminalMode ? (
          <Routes>
            <Route path="/" element={<Terminal toggleMode={toggleMode} />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/donut" element={<Donut />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<SimpleMode toggleMode={toggleMode} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;