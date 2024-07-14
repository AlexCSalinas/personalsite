import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DonutWrapper = styled.div`
  background-color: #000;
  color: #00FFCC; // Bright Teal
  font-family: 'Courier New', Courier, monospace;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TerminalInput = styled.div`
  flex-grow: 1;
`;

const DonutCanvas = styled.pre`
  font-size: 10px;
  line-height: 1;
  letter-spacing: 0;
  flex-grow: 1;
  overflow: hidden;
  margin: 0;
`;

const Cursor = styled.span`
  animation: blink 1s step-end infinite;
  @keyframes blink {
    50% { opacity: 0; }
  }
`;

const Donut = () => {
    const canvasRef = useRef(null);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState(['Type a command (e.g., home, about, projects)']);
    const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    let A = 1, B = 1;
    const asciiframe = () => {
      const b = [];
      const z = [];
      const width = 160, height = 80; // Increased dimensions for a larger donut
      A += 0.07;
      B += 0.03;
      const cA = Math.cos(A), sA = Math.sin(A),
            cB = Math.cos(B), sB = Math.sin(B);
      for(let k = 0; k < width * height; k++) {
        b[k] = k % width === width - 1 ? '\n' : ' ';
        z[k] = 0;
      }
      for(let j = 0; j < 6.28; j += 0.07) {
        const ct = Math.cos(j), st = Math.sin(j);
        for(let i = 0; i < 6.28; i += 0.02) {
          const sp = Math.sin(i), cp = Math.cos(i),
                h = ct + 2, 
                D = 1 / (sp * h * sA + st * cA + 5),
                t = sp * h * cA - st * sA;
          const x = Math.floor(width / 2 + (width / 4) * D * (cp * h * cB - t * sB)),
                y = Math.floor(height / 2 + (height / 4) * D * (cp * h * sB + t * cB)),
                o = x + width * y,
                N = Math.floor(8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));
          if(y < height && y >= 0 && x >= 0 && x < width - 1 && D > z[o]) {
            z[o] = D;
            b[o] = '.,-~:;=!*#$@'[N > 0 ? N : 0];
          }
        }
      }
      canvas.innerHTML = b.join('');
    };

    const intervalId = setInterval(asciiframe, 50);
    return () => clearInterval(intervalId);
  }, []);

  const handleCommand = (cmd) => {
    setOutput([...output, `guest@alexandersalinas:~$ ${cmd}`]);
    switch (cmd.toLowerCase()) {
      case 'home':
        navigate('/');
        break;
      case 'about':
        navigate('/about');
        break;
      case 'projects':
        navigate('/projects');
        break;
      case 'socials':
        navigate('/socials');
        break;
      case 'help':
        setOutput([...output, `guest@alexandersalinas:~$ ${cmd}`, 'Available commands: home, about, projects, socials, help']);
        break;
      default:
        setOutput([...output, `guest@alexandersalinas:~$ ${cmd}`, 'Command not recognized. Type "help" for available commands.']);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <DonutWrapper>
      <TopSection>
        <TerminalInput>
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
          <div>
            guest@alexandersalinas:~$ {input}
            <Cursor>▋</Cursor>
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
            style={{ opacity: 0, position: 'absolute' }}
          />
        </TerminalInput>
      </TopSection>
      <DonutCanvas ref={canvasRef}></DonutCanvas>
    </DonutWrapper>
  );
};

export default Donut;