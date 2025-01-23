import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  font-family: Arial, sans-serif;
  max-width: 100px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const MainSite = () => {
  return (
    <MainWrapper>
      <h1>Welcome to My Portfolio</h1>
      
      <Section>
        <h2>About Me</h2>
        <p>I'm a software engineer passionate about...</p>
      </Section>
      
      <Section>
        <h2>Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </Section>
      
      <Section>
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>GitHub: <a href="https://github.com/yourusername">github.com/yourusername</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourusername">linkedin.com/in/yourusername</a></p>
      </Section>
    </MainWrapper>
  );
};

export default MainSite;