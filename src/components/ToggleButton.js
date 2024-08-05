import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px 20px;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 1000;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }

  ${props => props.isTerminalMode && `
    background-color: #00FFCC;
    color: #000;
    &:hover {
      background-color: #00FFCC;
      opacity: 0.9;
    }
  `}
`;

const ToggleButton = ({ isTerminalMode, toggleMode }) => {
  return (
    <StyledButton isTerminalMode={isTerminalMode} onClick={toggleMode}>
      Switch to {isTerminalMode ? 'Simple' : 'Terminal'} Mode
    </StyledButton>
  );
};

export default ToggleButton;