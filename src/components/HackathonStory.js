import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: inline-block;
  
  &:hover .popup {
    display: block;
  }
`;

const StyledButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 5px 10px;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
`;

const PopupContainer = styled.div`
  display: none;
  position: absolute;
  z-index: 20;
  top: 100%;
  right: 0;  // Change from left: 0 to right: 0
  margin-top: 8px;
  width: 310px;
  background: rgba(250, 250, 250, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 8px;
  color: white;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

const StoryText = styled.p`
  font-size: 0.7rem;
  margin-bottom: 6px;
  color: rgba(255, 255, 255, 0.9);
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const HackathonStory = ({ details }) => {
  if (!details?.isHackathon) return null;

  return (
    <Container>
      <StyledButton>
        Behind the Scenes
      </StyledButton>

      <PopupContainer className="popup">
        <StoryText>{details.behindTheScenes.story}</StoryText>
        <ImageGrid>
          {details.behindTheScenes.images.map((img, idx) => (
            <ImageContainer key={idx}>
              <img 
                src={img} 
                alt={`Hackathon moment ${idx + 1}`}
              />
            </ImageContainer>
          ))}
        </ImageGrid>
      </PopupContainer>
    </Container>
  );
};

export default HackathonStory;