import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CustomPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize Fomantic UI components
    if (window.$ && window.$.fn.dropdown) {
      window.$('.ui.dropdown').dropdown();
      window.$('[data-tooltip]').popup();
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.7/dist/semantic.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.7/dist/semantic.min.js"></script>
      </Helmet>

      <main className="flex-grow">
        <div className="ui text container">
          {/* Header Section with Social Links */}
          <div>
            <a className="ui right floated icon button"
               data-tooltip="TikTok Channel"
               data-position="bottom right"
               href="https://tiktok.com/@leetcodealex"
               target="_blank"
               rel="noopener noreferrer">
              <i className="tiktok icon"></i>
            </a>

            <a className="ui right floated icon button"
               data-tooltip="LinkedIn Profile"
               data-position="bottom right"
               href="https://www.linkedin.com/in/alexandercsalinas"
               target="_blank"
               rel="noopener noreferrer">
              <i className="linkedin icon"></i>
            </a>

            <a className="ui right floated icon button"
               data-tooltip="GitHub Profile"
               data-position="bottom right"
               href="https://github.com/alexcsalinas"
               target="_blank"
               rel="noopener noreferrer">
              <i className="github icon"></i>
            </a>

            <a className="ui right floated icon button"
               data-tooltip="Email: alexsali@umich.edu"
               data-position="bottom right"
               href="mailto:alexsali@umich.edu"
               target="_blank"
               rel="noopener noreferrer">
              <i className="envelope icon"></i>
            </a>

            <a className="ui right floated icon button"
                data-tooltip="Back to Home"
                data-position="bottom right"
                onClick={() => navigate('/')}
                style={{ cursor: 'pointer' }}>
                <i className="home icon"></i>
            </a>
            
          </div>

          {/* Profile Section */}
          <header style={{ clear: 'both', paddingTop: '2rem' }}>
            <h1 className="ui header text-4xl mb-6">Alexander Salinas</h1>
            <div className="flex gap-6">
              <img className="ui left floated rounded small image" 
                   alt="Alexander Salinas" 
                   src={`${process.env.PUBLIC_URL}/images/alexander_image.jpg`} />
              <p className="text-lg leading-relaxed">
                As an aspiring software engineer and current student at the University of Michigan, 
                I am passionate about leveraging technology to create innovative solutions for 
                real-world challenges. My enthusiasm for programming extends beyond the classroom, 
                as I regularly participate in hackathons to expand my skillset and network with 
                like-minded individuals.
              </p>
            </div>
          </header>



          

          {/* Projects Section */}
          <section id="projects" className="mb-16">
            <h2 className="ui header text-3xl mb-6">Projects</h2>
            <div className="ui three stackable cards">
              {/* Glucose Project */}
              <a className="ui fluid card transition-all hover:shadow-lg"
                 href="https://github.com/Keith-Khadar/Pennapps24"
                 target="_blank"
                 rel="noopener noreferrer">
                <div className="content">
                  <div className="header text-xl mb-3">Glucose</div>
                  <div className="description mb-4">
                    Glucose tracks an injured athlete's movements and provides personalized advice,
                    comparable to that of a physical therapist, ensuring the patient recovers 
                    effectively and safely.
                  </div>
                  <div className="meta flex gap-2 flex-wrap">
                    <span className="ui label">Angular</span>
                    <span className="ui label">Python</span>
                    <span className="ui label">TuneAI</span>
                  </div>
                </div>
              </a>

              {/* PathFinding Visualizer */}
              <a className="ui fluid card transition-all hover:shadow-lg"
                 href="https://alexcsalinas.github.io/pathfinding-visualizer/"
                 target="_blank"
                 rel="noopener noreferrer">
                <div className="content">
                  <div className="header text-xl mb-3">PathFinding Visualizer</div>
                  <div className="description mb-4">
                    Grid game that visualizes common search algorithms on a grid of squares.
                    Interactive tool for understanding pathfinding algorithms.
                  </div>
                  <div className="meta flex gap-2 flex-wrap">
                    <span className="ui label">React</span>
                    <span className="ui label">Styled Components</span>
                  </div>
                </div>
              </a>

              {/* HarmonyAI.de */}
              <a className="ui fluid card transition-all hover:shadow-lg"
                 href="https://devpost.com/software/harmonyai-de"
                 target="_blank"
                 rel="noopener noreferrer">
                <div className="content">
                  <div className="header text-xl mb-3">HarmonyAI.de</div>
                  <div className="description mb-4">
                    Project developed at HackMIT 2023. Takes in audio from the user and displays 
                    back a video of a loved-one responding using generative AI.
                  </div>
                  <div className="meta flex gap-2 flex-wrap">
                    <span className="ui label">Javascript</span>
                    <span className="ui label">OpenAI</span>
                  </div>
                </div>
              </a>
            </div>
          </section>

          <div className="ui section divider mb-16"></div>

          {/* Experience Section */}
          <section id="experience" className="mb-16">
            <h2 className="ui header text-3xl mb-6">Experience</h2>
            <div className="ui relaxed divided list">
              <div className="item p-4 hover:bg-gray-50 transition-colors">
                <div className="content">
                  <div className="header text-xl mb-2">Software Engineering Intern</div>
                  <div className="description">
                    <div className="text-gray-600 mb-2">Uber • May 2025 - Aug 2025</div>
                    <p>Incoming intern in the UberSTAR program</p>
                  </div>
                </div>
              </div>

              <div className="item p-4 hover:bg-gray-50 transition-colors">
                <div className="content">
                  <div className="header text-xl mb-2">Co-Director</div>
                  <div className="description">
                    <div className="text-gray-600 mb-2">MHacks • Dec 2024 - Present</div>
                    <p>Leading the largest hackathon in the Midwest, managing event planning, 
                    sponsorships, and logistics.</p>
                  </div>
                </div>
              </div>

              <div className="item p-4 hover:bg-gray-50 transition-colors">
                <div className="content">
                  <div className="header text-xl mb-2">Web Developer</div>
                  <div className="description">
                    <div className="text-gray-600 mb-2">The Michigan Daily • Sep 2024 - Present</div>
                    <p>Building responsive React applications serving 250,000+ monthly active users.</p>
                  </div>
                </div>
              </div>

              <div className="item p-4 hover:bg-gray-50 transition-colors">
                <div className="content">
                  <div className="header text-xl mb-2">Programming Educator</div>
                  <div className="description">
                    <div className="text-gray-600 mb-2">LeetCodeAlex on TikTok • Feb 2024 - Sep 2024</div>
                    <p>Creating educational content on software engineering interview preparation 
                    for 1100+ followers.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <div className="ui hidden section divider"></div>

      {/* Footer */}
      <footer className="ui inverted vertical footer segment mt-16">
        <section className="ui center aligned container" id="contact">
          <div className="ui stackable inverted divided grid">
            <div className="four wide column">
              <div className="ui inverted link list">
                <a className="item hover:text-gray-300 transition-colors" 
                   href="mailto:alexsali@umich.edu"
                   target="_blank"
                   rel="noopener noreferrer">
                  <i className="envelope icon"></i>
                  Email
                </a>
                <a className="item hover:text-gray-300 transition-colors"
                   href="https://github.com/alexcsalinas"
                   target="_blank"
                   rel="noopener noreferrer">
                  <i className="github icon"></i>
                  GitHub
                </a>
                <a className="item hover:text-gray-300 transition-colors"
                   href="https://www.linkedin.com/in/alexandercsalinas"
                   target="_blank"
                   rel="noopener noreferrer">
                  <i className="linkedin icon"></i>
                  LinkedIn
                </a>
                <a className="item hover:text-gray-300 transition-colors"
                   href="https://tiktok.com/@leetcodealex"
                   target="_blank"
                   rel="noopener noreferrer">
                  <i className="tiktok icon"></i>
                  TikTok
                </a>
              </div>
            </div>
          </div>
          <div className="ui inverted section divider"></div>
          <div className="ui horizontal inverted small divided link list">
            <div className="item">&copy; 2025 Alexander Salinas</div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default CustomPage;