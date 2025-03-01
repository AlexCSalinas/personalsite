import React, { useState, useEffect } from 'react';
import { Video, Calendar, Briefcase } from 'lucide-react';

// TikTok component - we'll keep your existing implementation
const TikTokContainer = ({ username }) => {
  const [isHovered, setIsTikTokHovered] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tiktok-container">
      <div 
        className="content-container"
        onMouseEnter={() => setIsTikTokHovered(true)}
        onMouseLeave={() => setIsTikTokHovered(false)}
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          padding: '8px 12px',
          fontFamily: 'Roboto, sans-serif',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
      >
        <div style={{ 
          fontSize: '0.8rem', 
          letterSpacing: '0.1em', 
          textTransform: 'uppercase', 
          margin: 0, 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px' 
        }}>
          <Video size={14} /> TikTok
        </div>
        <div style={{ 
          fontSize: '0.7rem', 
          margin: '3px 0 0 0', 
          opacity: 0.8 
        }}>
          @{username}
        </div>
        
        <div style={{
          maxHeight: isHovered ? '400px' : '0',
          opacity: isHovered ? '1' : '0',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          marginTop: isHovered ? '8px' : '0'
        }}>
          <blockquote 
            className="tiktok-embed" 
            cite={`https://www.tiktok.com/@${username}`}
            data-unique-id={username}
            data-embed-type="creator"
            style={{ maxWidth: '100%' }}
          >
            <section>
              <a target="_blank" href={`https://www.tiktok.com/@${username}`} rel="noreferrer">@{username}</a>
            </section>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

// TimelineItem component - uses your existing hover effect pattern
const TimelineItem = ({ title, company, period, description, showTikTok, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = icon || Briefcase;

  return (
    <div className="timeline-item">
      <div 
        className="timeline-content"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="item-icon">
          <Icon size={18} />
          <h3>{title}</h3>
        </div>
        <p><strong>{company}</strong></p>
        <p>{period}</p>
        <div className={`description-container ${isHovered ? 'expanded' : ''}`}>
          <p>{description}</p>
        </div>
        
        {showTikTok && <TikTokContainer username="leetcodealex" />}
      </div>
    </div>
  );
};

const Timeline = () => {
  // Professional experiences without hackathons
  const professionalExperiences = [
    {
      title: "Software Engineering Intern",
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
      title: "Programming Educator and Social Media Strategist",
      company: "LeetCodeAlex on TikTok",
      period: "Feb 2024 - Sep 2024",
      description: "Technical Interview Prep: Produce educational videos on software engineering interview preparation, covering LeetCode problems for an audience of over 1100 followers, with top content reaching 40,000+ views. Content Development: Create engaging and instructional content to explain complex programming concepts and efficient problem-solving strategies. Community Engagement: Foster an interactive learning community by responding to follower inquiries and providing supplementary resources on software engineering topics.",
      showTikTok: true
    },
    {
      title: "Computer Science Lab Aide",
      company: "Kalamazoo Area of Mathematics and Science Center",
      period: "Sep 2021 - May 2023",
      description: "Teaching Assistant: Assisted multiple computer science classes by providing programming support, tutoring, and teaching a wide array of topics from introductory computer science to discrete mathematics. Grader: Graded computer science curriculum projects including written code in Java, pseudo-code, and other programming class work. Curriculum Development: Contributed to the development of new course materials and hands-on lab exercises."
    }
  ];

  // Events section - includes hackathons and can be expanded for other events
  const events = [
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
      title: "PennApps Hackathon",
      company: "University of Pennsylvania",
      period: "Sep 2024",
      description: "Developed Glucose, a hardware solution that tracks an injured athlete's movements and provides personalized advice. Won 'Best Hardware Hack'."
    },
    // Add other events like discovery days, startup fairs, etc. here
    {
      title: "Tech Discovery Day",
      company: "Susquehanna International Group",
      period: "Apr 2025",
      description: "Selected from a competitive applicant pool to learn about quantitative technology at SIG."
    }
  ];

  return (
    <div className="timeline-wrapper">
      <section className="timeline">
        <h2><Briefcase size={22} /> PROFESSIONAL EXPERIENCE</h2>
        <div className="timeline-container">
          {professionalExperiences.map((exp, index) => (
            <TimelineItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              showTikTok={exp.showTikTok}
              icon={Briefcase}
            />
          ))}
        </div>
      </section>
      
      <div className="section-divider"></div>
      
      <section className="events">
        <h2><Calendar size={22} /> EVENTS I'VE ATTENDED</h2>
        <div className="timeline-container">
          {events.map((event, index) => (
            <TimelineItem
              key={index}
              title={event.title}
              company={event.company}
              period={event.period}
              description={event.description}
              icon={Calendar}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Timeline;