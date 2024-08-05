import React from 'react';
import '../styles/SimpleMode.css';
import ToggleButton from './ToggleButton';
import backgroundImage from '../assets/JohnMartin.jpg';
import project1Image from '../assets/images/project1.jpg';
import project2Image from '../assets/images/project2.jpg';
import project3Image from '../assets/images/project3.jpg';
import project4Image from '../assets/images/project4.jpg';
const projects = [
  {
    title: "Anniversary_Webpage",
    description: "Cute webpage I made for my girlfriend to celebrate the 7 month anniversary of our relationship. Features a quiz, connections game, and a few other cool things.",
    image: project1Image,
    demoLink: "https://alexcsalinas.github.io/7-Month-Anniversary-Page/",
    tags: ["Javascript", "HTML", "CSS"]
  },
  {
    title: "PathFinding Visualizer",
    description: "Grid game that visualizes common search algorithms on a grid of squares.",
    image: project2Image,
    demoLink: "https://alexcsalinas.github.io/pathfinding-visualizer/",
    tags: ["React", "Styled Components"]
  },
  {
    title: "HarmonyAI.de",
    description: "Project developed at HackMIT 2023. HarmonyAI.de takes in audio from the user and displays back a video of a loved-one responding using generative AI as a virtual palliative care taker.",
    image: project3Image,
    demoLink: "https://devpost.com/software/harmonyai-de",
    tags: ["Javascript", "HTML5", "CSS", "GOOEYAI", "FLASK", "IBM-WATSON", "NODE.JS", "OPENAI"]
  },
  {
    title: "Recommendify",
    description: "Project developed at Mhacks 2023. Recommendify, a Chrome extension, intuitively gauges the tone of the website you are on and tailors music recommendations accordingly. Made using Spotify API, Python NLTK, and beautifulsoup4. Built by Mason Miller and myself.",
    image: project4Image,
    demoLink: "https://devpost.com/software/recommendify",
    tags: ["CSS", "HTML", "JSON", "PYTHON", "SPOTIFY API"]
  },
  // Add two more projects here
];

const SimpleMode = ({ toggleMode }) => {
  return (
    <div className="simple-mode">
      <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="content">
        <ToggleButton isTerminalMode={false} toggleMode={toggleMode} />
        
        <header>
          <h1>Alexander Salinas</h1>
          <h2>SOFTWARE ENGINEER, DEVELOPER</h2>
        </header>
        
        <main>
          <section className="intro">
            <h2>creative<br/>ENGINEER &<br/>DEVELOPER</h2>
            <p>I AM AN ASPIRING SOFTWARE ENGINEER AND STUDENT AT THE UNIVERSITY OF MICHIGAN. I LOVE ATTENDING HACKATHONS, LEARNING NEW TECHNOLOGIES, AND MEETING NEW PEOPLE. I'M PASSIONATE ABOUT CREATING INNOVATIVE SOLUTIONS FOR REAL WORLD PROBLEMS. I GENUINLEY LOVE THE CREATIVE PROCESS OF BUILDING THAT COMES WITH PROGRAMMING. IN MY FREE TIME I ENJOY MAKING EDUCATIONAL TIKTOKS TO MY SMALL BUT LOYAL COMMUNITY OF 1100+ FOLLOWERS. FEEL FREE TO CHECK OUT MY PROJECTS OR CONNECT WITH ME ON SOCIAL MEDIA!</p>
          </section>
          
          <section className="interests">
            <h2>LET'S CONNECT</h2>
            <p>I'M ALWAYS INTERESTED ABOUT</p>
            <div className="interest-tags">
              <span>NETWORKING</span>
              <span>FULLSTACK DEVELOPMENT</span>
              <span>HACKATHONS</span>
              <span>COMPETITIVE PROGRAMMING</span>
              <span>LEETCODE</span>
              <span>NEW BUSINESSES</span>
              <span>STARTUPS</span>
              <span>FOOD</span>
            </div>
          </section>
          
          <section className="timeline">
            <h2>EXPERIENCE</h2>
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>Software Engineering Fellow</h3>
                  <p>Headstarter</p>
                  <p>Jul 2024 - Present</p>
                  <p>AI Application Development: Built 5+ AI apps and APIs using NextJS, OpenAI, Pinecone, StripeAPI. Project Leadership: Developed projects from design to deployment leading 4+ engineering fellows using MVC design
patterns. Industry Mentorship: Coached by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git and microservice
patterns
</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>Programming Educator and Social Media Strategist</h3>
                  <p>LeetCodeAlex on TikTok</p>
                  <p>Feb 2024 - Present</p>
                  <p>Technical Interview Prep: Produce educational videos on software engineering interview preparation, covering LeetCode problems for an audience of over 1100 followers, with top content reaching 40,000+ views. Content Development: Create engaging and instructional content to explain complex programming concepts and efficient problem-solving strategies. Community Engagement: Foster an interactive learning community by responding to follower inquiries and providing supplementary resources on software engineering topics</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>MHacks 16 Participant</h3>
                  <p>MHacks</p>
                  <p>Nov 2023</p>
                  <p>Participated in a hackathon where our team developed Recommendify, an innovative Chrome extension that enhances the browsing experience by recommending music based on website content.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>HackMIT Hacker</h3>
                  <p>HackMIT</p>
                  <p>Sep 2023</p>
                  <p>Participated in a hackathon where our team developed HarmonyAI.de, an innovative solution for dementia patients. The project uses AI to provide a familiar face and voice for elderly individuals, enhancing their quality of life.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-content">
                  <h3>Computer Science Lab Aide</h3>
                  <p>Kalamazoo Area of Mathematics and Science Center</p>
                  <p>Sep 2021 - May 2023</p>
                  <p>Teaching Assistant: Assisted multiple computer science classes by providing programming support, tutoring, and teaching a wide array of topics from introductory computer science to discrete mathematics. Grader: Graded computer science curriculum projects including written code in Java, pseudo-code, and other programming class work. Curriculum Development: Contributed to the development of new course materials and hands-on lab exercises</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="projects">
  <h2>PROJECTS</h2>
  {projects.map((project, index) => (
    <div key={index} className="project-card">
      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-image-link">
        <img src={project.image} alt={project.title} className="project-image" />
      </a>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  ))}
</section>
        </main>
        
        <footer>
          <div className="social-links">
            <a href="https://tiktok.com/@leetcodealex">TIKTOK</a>
            <a href="https://open.spotify.com/user/oxnczuk29w2ldkh6p7ykxy7lj?si=226a10775d3b42e1">SPOTIFY</a>
            <a href="https://www.instagram.com/alexsalinas18">INSTAGRAM</a>
            <a href="https://github.com/alexcsalinas">GITHUB</a>
            <a href="https://www.linkedin.com/in/alexandercsalinas">LINKEDIN</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SimpleMode;