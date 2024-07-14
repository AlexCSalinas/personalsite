import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TerminalWrapper = styled.div`
  background-color: #000;
  color: #00FFCC;
  font-family: 'Courier New', Courier, monospace;
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
`;

const AsciiArt = styled.pre`
  color: #00FFCC;
  font-size: 15px;
  line-height: 1;
  margin-bottom: 20px;
`;

const Cursor = styled.span`
  animation: blink 1s step-end infinite;
  @keyframes blink {
    50% { opacity: 0; }
  }
`;

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setOutput([
      "Hello, my name is Alexander",
      "I'm a software engineer",
      "and this is my personal site",
      "...",
      "To see available commands",
      "type 'help' and hit ENTER or RETURN"
    ]);
  }, []);

  const handleCommand = (cmd) => {
    switch (cmd.toLowerCase()) {
      case 'help':
        setOutput([...output, 'Available commands: about, projects, donut']);
        break;
      case 'about':
        navigate('/about');
        break;
      case 'projects':
        navigate('/projects');
        break;
      case 'donut':
        navigate('/donut');
        break;
      default:
        setOutput([...output, `Command not recognized: ${cmd}`]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setOutput([...output, `guest@alexander:~$ ${input}`]);
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <TerminalWrapper>
      <AsciiArt>
        {`
 $$$$$$\\  $$\\       $$$$$$$$\\ $$\\   $$\\  $$$$$$\\  $$\\   $$\\ $$$$$$$\\  $$$$$$$$\\ $$$$$$$\\  
$$  __$$\\ $$ |      $$  _____|$$ |  $$ |$$  __$$\\ $$$\\  $$ |$$  __$$\\ $$  _____|$$  __$$\\ 
$$ /  $$ |$$ |      $$ |      \\$$\\ $$  |$$ /  $$ |$$$$\\ $$ |$$ |  $$ |$$ |      $$ |  $$ |
$$$$$$$$ |$$ |      $$$$$\\     \\$$$$  / $$$$$$$$ |$$ $$\\$$ |$$ |  $$ |$$$$$\\    $$$$$$$  |
$$  __$$ |$$ |      $$  __|    $$  $$<  $$  __$$ |$$ \\$$$$ |$$ |  $$ |$$  __|   $$  __$$< 
$$ |  $$ |$$ |      $$ |      $$  /\\$$\\ $$ |  $$ |$$ |\\$$$ |$$ |  $$ |$$ |      $$ |  $$ |
$$ |  $$ |$$$$$$$$\\ $$$$$$$$\\ $$ /  $$ |$$ |  $$ |$$ | \\$$ |$$$$$$$  |$$$$$$$$\\ $$ |  $$ |
\\__|  \\__|\\________|\\________|\\__|  \\__|\\__|  \\__|\\__|  \\__|\\_______/ \\________|\\__|  \\__|

 $$$$$$\\   $$$$$$\\  $$\\       $$$$$$\\ $$\\   $$\\  $$$$$$\\   $$$$$$\\  
$$  __$$\\ $$  __$$\\ $$ |      \\_$$  _|$$$\\  $$ |$$  __$$\\ $$  __$$\\ 
$$ /  \\__|$$ /  $$ |$$ |        $$ |  $$$$\\ $$ |$$ /  $$ |$$ /  \\__|
\\$$$$$$\\  $$$$$$$$ |$$ |        $$ |  $$ $$\\$$ |$$$$$$$$ |\\$$$$$$\\  
 \\____$$\\ $$  __$$ |$$ |        $$ |  $$ \\$$$$ |$$  __$$ | \\____$$\\ 
$$\\   $$ |$$ |  $$ |$$ |        $$ |  $$ |\\$$$ |$$ |  $$ |$$\\   $$ |
\\$$$$$$  |$$ |  $$ |$$$$$$$$\\ $$$$$$\\ $$ | \\$$ |$$ |  $$ |\\$$$$$$  |
 \\______/ \\__|  \\__|\\________|\\______|\\__|  \\__|\\__|  \\__| \\______/ 
        `}
      </AsciiArt>
      {output.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      <div>
        guest@alexander:~$ {input}
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
    </TerminalWrapper>
  );
};

export default Terminal;