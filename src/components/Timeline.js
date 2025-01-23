import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Video } from 'lucide-react';

const TikTokContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  max-width: 500px;
  transition: all 0.3s ease;
`;

const ContentContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 8px 12px;
  font-family: 'Roboto', sans-serif;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const Title = styled.h3`
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ProfileName = styled.p`
  font-size: 0.7rem;
  margin: 3px 0 0 0;
  opacity: 0.8;
`;

const ExpandedContent = styled.div`
  max-height: ${props => props.isExpanded ? '400px' : '0'};
  opacity: ${props => props.isExpanded ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  margin-top: ${props => props.isExpanded ? '8px' : '0'};

  /* Style adjustments for TikTok embed */
  blockquote {
    margin: 0 !important;
  }
  
  .tiktok-embed {
    border: none !important;
    margin: 0 !important;
    padding: 0 !important;
    max-width: none !important;
    min-width: 0 !important;
    width: 100% !important;
  }
`;



const TimelineItem = ({ title, company, period, description, showTikTok }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isTikTokHovered, setIsTikTokHovered] = useState(false);
  
    useEffect(() => {
      if (showTikTok) {
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
  
        return () => {
          document.body.removeChild(script);
        };
      }
    }, [showTikTok]);
  
    return (
      <div className="timeline-item">
        <div 
          className="timeline-content"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h3>{title}</h3>
          <p>{company}</p>
          <p>{period}</p>
          <div className={`description-container ${isHovered ? 'expanded' : ''}`}>
            <p>{description}</p>
          </div>
          
          {showTikTok && (
            <TikTokContainer>
              <ContentContainer
                onMouseEnter={() => setIsTikTokHovered(true)}
                onMouseLeave={() => setIsTikTokHovered(false)}
              >
                <Title>
                  <Video size={14} /> TikTok
                </Title>
                <ProfileName>@leetcodealex</ProfileName>
                
                <ExpandedContent isExpanded={isTikTokHovered}>
                  <blockquote 
                    className="tiktok-embed" 
                    cite="https://www.tiktok.com/@leetcodealex" 
                    data-unique-id="leetcodealex"
                    data-embed-type="creator"
                    style={{ maxWidth: '100%' }}
                  >
                    <section>
                      <a target="_blank" href="https://www.tiktok.com/@leetcodealex">@leetcodealex</a>
                    </section>
                  </blockquote>
                </ExpandedContent>
              </ContentContainer>
            </TikTokContainer>
          )}
        </div>
      </div>
    );
  };
  

const Timeline = () => {
  const experiences = [
    {
      title: "Software Enineering Intern",
      company: "Uber",
      period: "May 2025 - Aug 2025",
      description: "I will be interning at Uber this summer through their UberSTAR program!"
    },
    {
        title: "Co-Director",
        company: "MHacks",
        period: "Dec 2024 - Present",
        description: "Leading a team of student organizers to plan and execute the largest hackathon in the Midwest, attracting hundreds of participants from around the world. Overseeing all aspects of event planning, including securing sponsorships, coordinating logistics, and managing a budget."
    },
    {
      title: "Web Developer",
      company: "The Michigan Daily",
      period: "Sep 2024 - Present",
      description: "Architected and implemented responsive React applications serving 250,000+ monthly active users, focusing on performance optimization and user engagement. Spearheaded development of innovative interactive features, leveraging modern web technologies to enhance digital storytelling and reader experience."
    },
    {
      title: "Software Engineering Fellow",
      company: "Headstarter",
      period: "Jul 2024 - Aug 2024",
      description: "AI Application Development: Built 5+ AI apps and APIs using NextJS, OpenAI, Pinecone, StripeAPI. Project Leadership: Developed projects from design to deployment leading 4+ engineering fellows using MVC design patterns. Industry Mentorship: Coached by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git and microservice patterns."
    },
    {
      title: "Programming Educator and Social Media Strategist",
      company: "LeetCodeAlex on TikTok",
      period: "Feb 2024 - Sep 2024",
      description: "Technical Interview Prep: Produce educational videos on software engineering interview preparation, covering LeetCode problems for an audience of over 1100 followers, with top content reaching 40,000+ views. Content Development: Create engaging and instructional content to explain complex programming concepts and efficient problem-solving strategies. Community Engagement: Foster an interactive learning community by responding to follower inquiries and providing supplementary resources on software engineering topics.",
      showTikTok: true
    },
    {
      title: "MHacks 16 Participant",
      company: "MHacks",
      period: "Nov 2023",
      description: "Participated in a hackathon where our team developed Recommendify, an innovative Chrome extension that enhances the browsing experience by recommending music based on website content."
    },
    {
      title: "HackMIT Hacker",
      company: "HackMIT",
      period: "Sep 2023",
      description: "Participated in a hackathon where our team developed HarmonyAI.de, an innovative solution for dementia patients. The project uses AI to provide a familiar face and voice for elderly individuals, enhancing their quality of life."
    },
    {
      title: "Computer Science Lab Aide",
      company: "Kalamazoo Area of Mathematics and Science Center",
      period: "Sep 2021 - May 2023",
      description: "Teaching Assistant: Assisted multiple computer science classes by providing programming support, tutoring, and teaching a wide array of topics from introductory computer science to discrete mathematics. Grader: Graded computer science curriculum projects including written code in Java, pseudo-code, and other programming class work. Curriculum Development: Contributed to the development of new course materials and hands-on lab exercises."
    }
  ];

  return (
    <section className="timeline">
      <h2>EXPERIENCE</h2>
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            showTikTok={exp.showTikTok}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;