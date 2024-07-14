import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  background-color: #000;
  color: #00FFCC; // Bright Teal
  font-family: 'Courier New', Courier, monospace;
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
`;

const TerminalOutput = styled.div`
  white-space: pre-wrap;
  line-height: 1.5;
`;

const TerminalInput = styled.div`
  margin-top: 20px;
`;

const Cursor = styled.span`
  animation: blink 1s step-end infinite;
  @keyframes blink {
    50% { opacity: 0; }
  }
`;

const SocialLinks = styled.div`
  margin-top: 20px;
  a {
    color: #00FFCC;
    margin-right: 15px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const ImageViewer = styled.div`
  border: 1px solid #00FFCC;
  padding: 10px;
  margin: 20px 0;
  display: inline-block;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  @media (min-width: 768px) {
    max-width: 300px;
  }
  transition: opacity 0.3s ease-in-out;
`;
const ImageDescription = styled.div`
  margin-top: 10px;
  font-style: italic;
  color: #00FFAA; // A slightly different shade to make it stand out
  `;

const About = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [showSocials, setShowSocials] = useState(false);
    const [input, setInput] = useState('');
    const [showImage, setShowImage] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const navigate = useNavigate();
  
    const images = [
        { 
          src: `${process.env.PUBLIC_URL}/images/alexander_portrait.jpg`, 
          name: "alexander_portrait.jpg",
          description: "This is me at HackMIT 2023!"
        },
        { 
          src: `${process.env.PUBLIC_URL}/images/alexander_coding.jpg`, 
          name: "alexander_coding.jpg",
          description: "Here I am deep in concentration, probably working on tree leetcode problems :)"
        },
        { 
          src: `${process.env.PUBLIC_URL}/images/alexander_hobby.jpg`, 
          name: "alexander_hobby.jpg",
          description: "Here I am at one of my many competitive programming events (my team won)"
        },
      ];
  

  const fullText = `Hello! I'm Alexander Salinas (you can just call me Alex) :3

I'm a student at the University of Michigan majoring in Computer Science.

My interests include:
- Web Development
- Artificial Intelligence
- Data Science
- Attending Hackathons

I'm passionate about creating innovative solutions and I'm always eager to learn new technologies. 
I genuinley love the process of creating and building that comes with programming.

In my free time, I enjoy making tiktoks about leetcode solutions to my small but loyal community of 1000+ followers.

Feel free to check out my projects or connect with me on social media!
`;

const typeText = useCallback(() => {
    let i = 0;
    return new Promise((resolve) => {
      const typingEffect = setInterval(() => {
        if (i < fullText.length) {
          setDisplayedText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingEffect);
          resolve();
        }
      }, 15);
    });
  }, [fullText]);

  useEffect(() => {
    typeText().then(() => {
      setShowSocials(true);
      setShowImage(true);
      console.log("Images should now be visible");
    });
  }, [typeText]);

  const handleCommand = (cmd) => {
    switch (cmd.toLowerCase()) {
      case 'next':
        setCurrentImage((prev) => (prev + 1) % images.length);
        break;
      case 'prev':
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
        break;
      case 'home':
        navigate('/');
        break;
      case 'projects':
        navigate('/projects');
        break;
      case 'donut':
        navigate('/donut');
        break;
      default:
        console.log(`Command not recognized: ${cmd}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };


  return (
    <AboutWrapper>
      <TerminalOutput>{displayedText}</TerminalOutput>
      {showImage && (
  <ImageViewer>
    <Image 
      src={images[currentImage].src} 
      alt={`Alexander Salinas - ${images[currentImage].name}`} 
      onError={() => console.error(`Failed to load image: ${images[currentImage].src}`)}
    />
    
    <ImageDescription>{images[currentImage].description}</ImageDescription>
    <div>Type 'next' or 'prev' to navigate images</div>
  </ImageViewer>
)}
      {showSocials && (
        <SocialLinks>
          <a href="https://github.com/AlexCSalinas" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/alexandercsalinas" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://tiktok.com/@leetcodealex" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="https://open.spotify.com/user/oxnczuk29w2ldkh6p7ykxy7lj?si=226a10775d3b42e1" target="_blank" rel="noopener noreferrer">Spotify</a>
          <a href="https://www.instagram.com/alexsalinas18/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </SocialLinks>
      )}
      <TerminalInput>
        guest@alexandersalinas:~$ {input}
        <Cursor>▋</Cursor>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          autoFocus
          style={{ opacity: 0, position: 'absolute' }}
        />
      </TerminalInput>
    </AboutWrapper>
  );
};

export default About;