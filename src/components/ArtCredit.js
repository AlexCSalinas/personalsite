import React, { useState } from 'react';
import styled from 'styled-components';

const ArtCreditContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  max-width: 200px; // Reduced from default size
`;

const ContentContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 8px 12px; // Reduced padding
  font-family: 'Roboto', sans-serif;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }

  h3 {
    font-size: 0.8rem; // Smaller font size
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    font-size: 0.7rem; // Smaller font size
    margin: 3px 0 0 0; // Reduced margin
    opacity: 0.8;
  }
`;

const Description = styled.div`
  max-height: ${props => props.isExpanded ? '150px' : '0'}; // Reduced max height
  opacity: ${props => props.isExpanded ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  margin-top: ${props => props.isExpanded ? '8px' : '0'}; // Reduced margin
`;

const ArtCredit = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <ArtCreditContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ContentContainer>
        <h3>The Great Day of His Wrath</h3>
        <p>John Martin, 1851-1853</p>
        <Description isExpanded={isHovered}>
          <p>Part of "The Last Judgment" triptych, showcasing Martin's dramatic apocalyptic vision.</p>
          <p>© Tate Britain, London</p>
        </Description>
      </ContentContainer>
    </ArtCreditContainer>
  );
};

export default ArtCredit;