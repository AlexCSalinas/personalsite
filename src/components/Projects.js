import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const ProjectsWrapper = styled.div`
  background-color: #000;
  color: #00FFCC;
  font-family: 'Courier New', Courier, monospace;
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
`;

const TerminalOutput = styled.pre`
  margin: 0;
  white-space: pre-wrap;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  color: #00FFCC;
  font-family: inherit;
  font-size: inherit;
  &:focus {
    outline: none;
  }
`;

const ProjectCard = styled.div`
  border: 1px solid #00FFCC;
  padding: 10px;
  margin: 10px 0;
`;

const Cursor = styled.span`
  animation: blink 1s step-end infinite;
  @keyframes blink {
    50% { opacity: 0; }
  }
`;

const projects = [
  { name: 'Anniversary_Webpage', type: 'regular', description: 'Cute webpage I made for my girlfriend to celebrate the 7 month anniversary of our relationship. Features a quiz, connections game, and a few other cool things. Go check it out!', url: 'https://alexcsalinas.github.io/7-Month-Anniversary-Page/' },
  { name: 'Pathfinding_Visualizer', type: 'regular', description: 'Grid game that visualizes common search algorithms on a grid of squares. Go play around with it!', url: 'https://alexcsalinas.github.io/pathfinding-visualizer/'  },
  // Add more projects
  {
    name: 'Recomendify_Hackathon',
    type: 'hackathon',
    description: 'Project developed at Mhacks 2023. Recommendify, a Chrome extension, intuitively gauges the tone of the website you are on and tailors music recommendations accordingly. Made using Spotify API, Python NLTK, and beautifulsoup4. Built by Mason Miller and myself.',
    github: 'https://github.com/masonmill/recommendify',
    devpost: 'https://devpost.com/software/recommendify'
  },
  {
    name: 'HarmonyAI.de_Hackathon',
    type: 'hackathon',
    description: 'Project developed at HackMIT 2023. HarmonyAI.de takes in audio from the user and displays back a video of a loved-one responding using generative AI as a virtual palliative care taker.',
    github: 'https://github.com/amirzarandi/harmony-aide',
    devpost: 'https://devpost.com/software/harmonyai-de'
  }
];
const IframeWrapper = styled.div`
  margin-top: 20px;
  border: 1px solid #00FFCC;
  padding: 10px;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 500px; // Adjust this value as needed
  border: none;
`;



const Projects = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(['Welcome to Projects. Type "help" for commands.']);
  const [currentDir, setCurrentDir] = useState('/projects');
  const [currentProject, setCurrentProject] = useState(null);
  const navigate = useNavigate();

  const handleCommand = (cmd) => {
    setOutput([...output, `guest@alexandersalinas:${currentDir}$ ${cmd}`]);
    
    const [command, ...args] = cmd.toLowerCase().split(' ');
    const welcomeMessage = 'Welcome to Projects! Type "help" for commands.';
    const projectName = args.join(' ');
  
    switch (command) {
      case 'ls':
        setOutput(prev => [...prev, ...projects.map(p => `${p.name}${p.type === 'hackathon' ? ' (Hackathon)' : ''}`)]);
        break;
      case 'clear':
        setOutput([welcomeMessage, ' ']);
        break;
      case 'help':
          setOutput(prev => [...prev, 
            ' ',
            'Available commands:',
            'ls - List all projects',
            'cat <project> - View project details',
            'view <project> - View demo for regular projects',
            'open <hackathon-project> <github|devpost> - Open links for hackathon projects',
            'hide - Hide the current project view',
            'clear - Clear the terminal screen',
            'home - Go to home page',
            'about - Go to about page',
            'donut - Go to donut page',
            ' '
          ]);
        break;
      case 'cd':
        const cdProject = projects.find(p => p.name.toLowerCase() === projectName);
        if (cdProject) {
          setCurrentDir(`/projects/${cdProject.name}`);
          setOutput(prev => [...prev, `Switched to ${cdProject.name}`]);
        } else if (projectName === '..') {
          setCurrentDir('/projects');
          setOutput(prev => [...prev, 'Moved up to /projects']);
        } else {
          setOutput(prev => [...prev, `Project "${args.join(' ')}" not found. Use "ls" to see available projects.`]);
        }
        break;
      case 'cat':
        const catProject = projects.find(p => p.name.toLowerCase() === projectName);
        if (catProject) {
          let output = [catProject.description];
          if (catProject.type === 'hackathon') {
            output.push('This is a hackathon project. Use the following commands to view more:');
            output.push(`- 'open ${catProject.name} github' to view the GitHub repository`);
            output.push(`- 'open ${catProject.name} devpost' to view the Devpost page`);
          } else if (catProject.url) {
            output.push(`Use 'view ${catProject.name}' to see a demo of this project.`);
          }
          setOutput(prev => [...prev, ...output]);
        } else {
          setOutput(prev => [...prev, `Project "${args.join(' ')}" not found. Use "ls" to see available projects.`]);
        }
        break;
      case 'view':
        const viewProject = projects.find(p => p.name.toLowerCase() === projectName);
        if (viewProject) {
          if (viewProject.url) {
            setCurrentProject(viewProject);
            setOutput(prev => [...prev, `Displaying ${viewProject.name}. Type "hide" to close.`]);
          } else {
            setOutput(prev => [...prev, `No demo available for ${viewProject.name}.`]);
          }
        } else {
          setOutput(prev => [...prev, `Project "${args.join(' ')}" not found. Use "ls" to see available projects.`]);
        }
        break;
      case 'open':
        const [openProjectName, linkType] = args;
        const openProject = projects.find(p => p.name.toLowerCase() === openProjectName);
        if (openProject) {
          if (openProject.type !== 'hackathon') {
            setOutput(prev => [...prev, `The 'open' command is only for hackathon projects. Use 'view ${openProject.name}' for regular projects.`]);
          } else if (linkType === 'github' && openProject.github) {
            window.open(openProject.github, '_blank');
            setOutput(prev => [...prev, `Opening GitHub repository for ${openProject.name}`]);
          } else if (linkType === 'devpost' && openProject.devpost) {
            window.open(openProject.devpost, '_blank');
            setOutput(prev => [...prev, `Opening Devpost page for ${openProject.name}`]);
          } else {
            setOutput(prev => [...prev, `Invalid link type. Use 'open ${openProject.name} github' or 'open ${openProject.name} devpost'.`]);
          }
        } else {
          setOutput(prev => [...prev, `Project "${openProjectName}" not found. Use "ls" to see available projects.`]);
        }
        break;
      case 'hide':
        setCurrentProject(null);
        setOutput(prev => [...prev, 'Project hidden.']);
        break;
      case 'home':
        navigate('/');
        break;
      case 'about':
        navigate('/about');
        break;
      case 'donut':
        navigate('/donut');
        break;
      default:
        setOutput(prev => [...prev, 'Command not recognized. Type "help" for available commands.']);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <ProjectsWrapper>
      <TerminalOutput>
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </TerminalOutput>
      {currentProject && (
        <IframeWrapper>
          <h3>{currentProject.name}</h3>
          <p>{currentProject.description}</p>
          <StyledIframe src={currentProject.url} title={currentProject.name} />
        </IframeWrapper>
      )}
      <div>
        guest@alexandersalinas:/projects$ {input}
        <Cursor>▋</Cursor>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          autoFocus
          style={{ opacity: 0, position: 'absolute' }}
        />
      </div>
    </ProjectsWrapper>
  );
};

export default Projects;