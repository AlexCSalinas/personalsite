import React from 'react';
import '../styles/SimpleMode.css';
import ToggleButton from './ToggleButton';
import backgroundImage from '../assets/JohnMartin.jpg';
import project1Image from '../assets/images/project1.jpg';
import project2Image from '../assets/images/project2.jpg';
import project3Image from '../assets/images/project3.jpg';
import project4Image from '../assets/images/project4.jpg';
import project5Image from '../assets/images/project5.jpg';
import Timeline from './Timeline'; // Add this import at the top
import ArtCredit from './ArtCredit';
import HackathonStory from './HackathonStory';
import FeaturedArtist from './FeaturedArtist';
import PlaylistTracks from './PlaylistTracks';
import SpotifyProfile from './SpotifyProfile';
//import TikTokProfile from './TikTokProfile';

const projects = [
  {
    title: "Glucose",
    description: "Glucose tracks an injured athlete's movements and provides personalized advice, comparable to that of a physical therapist, ensuring the patient recovers effectively and safely. It helps users perform physical therapy exercises at home safely while AI analyzes their movements to ensure they operate within their expected range of motion and effort values.",
    image: project5Image,
    demoLink: "https://github.com/Keith-Khadar/Pennapps24",
    tags: ["Angular", "Python", "TuneAI"],
    hackathonDetails: {
      isHackathon: true,
      behindTheScenes: {
        story: "This project was made at PennApps, the University of Pennsylvania's annual hackathon (We won best Hardware Hack) :)",
        images: [
          require('../assets/images/hackathon-moments/glucose/GCteam.jpg'),
          require('../assets/images/hackathon-moments/glucose/GCwhiteboard.jpg'),
          require('../assets/images/hackathon-moments/glucose/philly.jpg')
        ]
      }
    }
  },
  /*{
    title: "Anniversary_Webpage",
    description: "Cute webpage I made for my girlfriend to celebrate the 7 month anniversary of our relationship. Features a quiz, connections game, and a few other cool things.",
    image: project1Image,
    demoLink: "https://alexcsalinas.github.io/7-Month-Anniversary-Page/",
    tags: ["Javascript", "HTML", "CSS"]
  },*/
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
    tags: ["Javascript", "HTML5", "CSS", "GOOEYAI", "FLASK", "IBM-WATSON", "NODE.JS", "OPENAI"],
    hackathonDetails: {
      isHackathon: true,
      behindTheScenes: {
        story: "This was made at my frist Hackathon! Great experience for my frist time, I got to meet so many talented programmers from across the world.",
        images: [
          require('../assets/images/hackathon-moments/harmonyai/mit.jpg'),
          require('../assets/images/hackathon-moments/harmonyai/mitcard.jpg'),
          require('../assets/images/hackathon-moments/harmonyai/foot.jpg')
        ]
      }
    }
  },
  {
    title: "Recommendify",
    description: "Project developed at Mhacks 2023. Recommendify, a Chrome extension, intuitively gauges the tone of the website you are on and tailors music recommendations accordingly. Made using Spotify API, Python NLTK, and beautifulsoup4. Built by Mason Miller and myself.",
    image: project4Image,
    demoLink: "https://devpost.com/software/recommendify",
    tags: ["CSS", "HTML", "JSON", "PYTHON", "SPOTIFY API"],
    hackathonDetails: {
      isHackathon: true,
      behindTheScenes: {
        story: "First Michigan Hackathon :3",
        images: [
          require('../assets/images/hackathon-moments/recommendify/basement.jpg'),
          require('../assets/images/hackathon-moments/recommendify/card.jpg'),
          require('../assets/images/hackathon-moments/recommendify/eniac.jpg')
        ]
      }
    }
  },
  // Add two more projects here
];

const SimpleMode = ({ toggleMode }) => {
  return (
    <div className="simple-mode">
      <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <SpotifyProfile />
      <PlaylistTracks />
      <FeaturedArtist /> 
      <ArtCredit />
      {
      <div className="content">
        <ToggleButton isTerminalMode={false} toggleMode={toggleMode} />
        
        <header>
          <h1>Alexander Salinas</h1>
          <h2>SOFTWARE ENGINEER, DEVELOPER</h2>
        </header>
        
        <main>
          <section className="intro">
            <h2>Creative<br/>Engineer & Developer</h2>
            <p>As an aspiring software engineer and current student at the University of Michigan, I am passionate about leveraging technology to create innovative solutions for real-world challenges. My enthusiasm for programming extends beyond the classroom, as I regularly participate in hackathons to expand my skillset and network with like-minded individuals.
I thrive on the creative process inherent in software development and continuously seek opportunities to learn new technologies. I invite you to explore my projects and connect with me on professional social media platforms to learn more about my work and experiences in the field of software engineering.</p>
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
          <Timeline />
          
          
          <section className="projects">
  <h2>PROJECTS</h2>
  {projects.map((project, index) => (
    <div key={index} className="relative"> {/* Add relative positioning to the container */}
      {/* Position the button absolutely relative to the container */}
      <div className="absolute top-4 right-4 z-10">{}
        <HackathonStory details={project.hackathonDetails} />
      </div>
      
      <div className="project-card">
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
      </div>}
    </div>
  );
};

export default SimpleMode;