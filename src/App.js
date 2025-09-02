import React, { useRef } from 'react';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);

  const [showModal, setShowModal] = React.useState(false);
  const [showAboutModal, setShowAboutModal] = React.useState(false);
  const [showTeamModal, setShowTeamModal] = React.useState(false);
  const [showEventsModal, setShowEventsModal] = React.useState(false);
  const [showFAQModal, setShowFAQModal] = React.useState(false);

  // Team navigation state
  const teamSections = [
    {
      key: 'lead',
      label: 'Project Lead',
      content: {
        title: 'Project Lead',
        leader: 'Ijed Luzele J. Yañez',
        leaderRole: 'AWS Builders Club, Project Lead ',
        members: [
          { name: 'Placeholder', role: 'Placeholder' },
          { name: 'Placeholder', role: 'Placeholder' },
          { name: 'Placeholder', role: 'Placeholder' },
          { name: 'Placeholder', role: 'Placeholder' }
        ]
      }
    },
    {
      key: 'leaders',
      label: 'Leaders',
      content: {
        title: 'Leaders',
        leaders: [
          { name: 'Josh Marco C. Goc-Ong', role: 'AWS Builder Club, Website Manager' },
          { name: 'James Nathaniel F. Tan', role: 'AWS Builder Club, Discord Community Manager' }
        ],
        members: [
          { name: 'Placeholder', role: 'Placeholder' },
          { name: 'Placeholder', role: 'Placeholder' }
        ]
      }
    },
    {
      key: 'cdt',
      label: 'Content and Design Team',
      content: {
        title: 'Content and Design Team',
        leader: 'Elykah A. Cascaro',
        leaderRole: 'AWS Builder Club, Lead Content Writer',
        members: [
          { name: 'Trixie Nin D. Canete', role: 'Graphic Designer' },
          { name: 'Zidane M. Pasaje', role: 'Flex Assistant' }
        ]
      }
    },
    {
      key: 'fet',
      label: 'Front-End Team',
      content: {
        title: 'Front-End Team',
        leader: 'Joshua Marc N. Masellones',
        leaderRole: 'AWS Builder Club, Lead Front-End Developer',
        members: [
          { name: 'Lance Rannielle J. Andres', role: 'Developer' },
          { name: 'Abe Jaylil M. Javier', role: 'Developer' },
          { name: 'Chass Clayton C. Estomo', role: 'Developer' }
        ]
      }
    },
    {
      key: 'act',
      label: 'AWS Cloud Team',
      content: {
        title: 'AWS Cloud Team',
        leader: 'Karylle Grace K. Bontuyan',
        leaderRole: 'AWS Builder Club, Lead Solutions Architect',
        members: [
          { name: 'Arabella L. Ortega', role: 'AWS Developer' }
        ]
      }
    },
    {
      key: 'mt',
      label: 'Moderation Team',
      content: {
        title: 'Moderation Team',
        leader: 'Renzi S. Albastro',
        leaderRole: 'AWS Builders Club, Lead Moderator',
        members: [
          { name: 'Gerald Andre C. Nagliba', role: 'Moderator' },
          { name: 'Kurt Arnyle C. Gadingan', role: 'Moderator' }
        ]
      }
    },
    {
      key: 'eet',
      label: 'Event & Engagement Team',
      content: {
        title: 'Event & Engagement Team',
        leader: 'Shanica B. Diaz',
        leaderRole: 'AWS Builders Club, Event Organizer',
        members: [
          { name: 'Beau Renfro A. Crieta', role: 'Event Organizer' },
          { name: 'Desiree Joy D. Bigot', role: 'Content/Resource Center' },
          { name: 'Jamril Maclain J. Parreño', role: 'Content/Resource Center' }
        ]
      }
    },
    {
      key: 'qat',
      label: 'Quality Assurance Team',
      content: {
        title: 'Quality Assurance Team',
        leader: 'Hezron A. Nallos',
        leaderRole: 'AWS Builders Club, QA Lead',
        members: [
          { name: 'James Virgil S. Co', role: 'QA Tester' },
          { name: 'John Bernard D. Mendoza', role: 'QA Tester' }
        ]
      }
    }
  ];

  const [activeTeamSection, setActiveTeamSection] = React.useState('lead');

  const githubRepos = [
    { 
      name: "aws-related-stuff", 
      url: "https://github.com/",
      description: "Lorem ipsum dolor sit amet. Et galisum vero est esse corrupti non quod natus.",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      issues: 0
    },
    { 
      name: "aws-related-stuff", 
      url: "https://github.com/",
      description: "lorem ipsum dolor sit amet. Et galisum vero est esse corrupti non quod natus.",
      language: "Python",
      stars: 0,
      forks: 0,
      issues: 0
    },
    { 
      name: "aws-related-stuff", 
      url: "https://github.com/",
      description: "lorem ipsum dolor sit amet. Et galisum vero est esse corrupti non quod natus.",
      language: "TypeScript",
      stars: 0,
      forks: 0,
      issues: 0
    }
  ];

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAboutClick2 = (e) => {
    e.preventDefault();
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);
  const openAboutModal = () => setShowAboutModal(true);
  const closeAboutModal = () => setShowAboutModal(false);

  return (
    <div className="app-bg app-text app-font min-height flex-col">
      {/* Main Navigation */}
      <nav className="navbar">
        <img
          src={require("./images/aws-builder-logo.png")}
          alt="AWS Builders Club Logo"
          className="navbar-logo"
          style={{ height: '48px' }}
        />
        <ul className="navbar-links">
          <li>
            <a href="#home" className="navbar-link" onClick={handleAboutClick2}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="navbar-link" onClick={handleProjectsClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#aboutus" className="navbar-link" onClick={handleAboutClick}>
              About
            </a>
          </li>
          <li>
            <a href="#goals" className="navbar-link">
              Goals
            </a>
          </li>
          {/* dropdown */}
          <li className="navbar-dropdown-parent">
            <button
              className="navbar-link navbar-dropdown-toggle"
              onClick={e => {
                e.preventDefault();
                document.getElementById('dropdown-getstarted-main').classList.toggle('show');
              }}
              aria-haspopup="true"
              aria-expanded={document.getElementById('dropdown-getstarted-main')?.classList.contains('show')}
            >
              Get Started Today ▼
            </button>
            <div
              id="dropdown-getstarted-main"
              className="navbar-dropdown"
              onMouseLeave={() => document.getElementById('dropdown-getstarted-main').classList.remove('show')}
            >
              <a
                href="#teams"
                className="navbar-dropdown-link"
                onClick={e => {
                  e.preventDefault();
                  setShowTeamModal(true);
                  document.getElementById('dropdown-getstarted-main').classList.remove('show');
                }}
              >
                Meet the team
              </a>
              <a
                href="#events"
                className="navbar-dropdown-link"
                onClick={e => {
                  e.preventDefault();
                  setShowEventsModal(true);
                  document.getElementById('dropdown-getstarted-main').classList.remove('show');
                }}
              >
                Events
              </a>
              <a
                href="#faq"
                className="navbar-dropdown-link"
                onClick={e => {
                  e.preventDefault();
                  setShowFAQModal(true);
                  document.getElementById('dropdown-getstarted-main').classList.remove('show');
                }}
              >
                FAQ
              </a>
            </div>
          </li>
        </ul>
      </nav>

      {/* hero-section */}
      <section id="home" className="hero-section" ref={homeRef}>
        <h2 className="hero-title">Welcome to AWS Builders Club</h2>
        <p className="hero-desc">
          Be part of a dynamic community at Mapúa MCM where students learn, collaborate, and innovate with AWS. Gain hands-on experience, build real projects, and jumpstart your cloud career with peers who share the same passion.
        </p>
        <div className="hero-buttons">
          <a
            href="https://discord.gg/UFGUPutKSR"
            className="hero-btn hero-btn-blue"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Cloud Revolution
          </a>
          <a href="/archive" className="hero-btn hero-btn-orange" onClick={handleProjectsClick}>
            Projects
          </a>
        </div>
      </section>

      {/* about us */}
      <section id="aboutus" className="about-section" ref={aboutRef}>
        <h2 className="hero-title" style={{ marginBottom: '32px' }}>
          About Us
        </h2>
        <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="highlight-card" style={{ flex: 1, marginRight: '32px' }}>
            <h4 className="highlight-card-title blue">About the Club</h4>
            <p className="highlight-card-desc">
              The AWS Builders Club at Mapúa MCM is a community of learners passionate about cloud technology, collaboration, and innovation. Open to all students, the club provides opportunities for hands-on learning, peer support, and career growth through projects, training, and knowledge-sharing events.
            </p>
          </div>
          <div style={{ flexShrink: 0 }}>
            <button
              className="hero-btn hero-btn-blue"
              style={{ minWidth: '140px', padding: '12px 24px', fontSize: '1rem' }}
              onClick={openAboutModal}
            >
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* readmore-modal */}
      {showAboutModal && (
        <div className="modal-overlay" onClick={closeAboutModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">About Us</h2>
              <button className="modal-close" onClick={closeAboutModal}>×</button>
            </div>
            <div style={{ padding: '16px 0' }}>
              <div style={{ marginBottom: '32px' }}>
                <h3 className="highlights-title" style={{ marginBottom: '16px' }}>
                  Vision
                </h3>
                <p className="highlight-card-desc">
                  To build a strong presence in the Mapúa MCM community by showcasing our AWS projects and inspiring students to explore the power of cloud technologies.
                </p>
              </div>
              <div>
                <h3 className="highlights-title" style={{ marginBottom: '16px' }}>
                  Mission
                </h3>
                <p className="highlight-card-desc">
                  To create a community of innovative, skilled students who are empowered to harness AWS projects and inspire students to explore the power of the cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* goals-sect */}
      <section id="goals" className="about-section">
        <h2 className="hero-title" style={{ marginBottom: '32px' }}>
          Our Goals
        </h2>
        <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            className="about-block"
            style={{
              marginBottom: '48px',
              marginLeft: '0',
              marginRight: 'auto',
              width: '90%',
              maxWidth: '600px'
            }}
          >
            <h3 className="highlights-title" style={{ marginBottom: '16px' }}>
              Short-Term Goals
            </h3>
            <p className="highlight-card-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, nec dictum sem urna at sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
          <div
            className="about-block"
            style={{
              marginBottom: '0',
              marginLeft: 'auto',
              marginRight: '0',
              width: '90%',
              maxWidth: '600px'
            }}
          >
            <h3 className="highlights-title" style={{ marginBottom: '16px' }}>
              Long-Term Goals
            </h3>
            <p className="highlight-card-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, nec dictum sem urna at sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>
      </section>

      {/* highlights-sect */}
      <section className="highlights-section">
        <h3 className="highlights-title">Why Join AWS Builders Club?</h3>
        <div className="highlights-grid">
          <div className="highlight-card">
            <h4 className="highlight-card-title blue">Community</h4>
            <p className="highlight-card-desc">
              Lorem ipsum dolor sit amet. Et galisum vero est esse corrupti non quod natus. Sit corporis ipsam non repellat aliquid vel porro odio cum assumenda explicabo hic consequuntur quas aut magnam eveniet et vero accusamus. Aut asperiores architecto sed cumque repellendus qui itaque nemo est unde animi nam maiores nulla sed ipsa deserunt.
            </p>
          </div>
          <div className="highlight-card">
            <h4 className="highlight-card-title orange">Innovation</h4>
            <p className="highlight-card-desc">
              Lorem ipsum dolor sit amet. Et galisum vero est esse corrupti non quod natus. Sit corporis ipsam non repellat aliquid vel porro odio cum assumenda explicabo hic consequuntur quas aut magnam eveniet et vero accusamus. Aut asperiores architecto sed cumque repellendus qui itaque nemo est unde animi nam maiores nulla sed ipsa deserunt.
            </p>
          </div>
          <div className="highlight-card">
            <h4 className="highlight-card-title blue">Learning</h4>
            <p className="highlight-card-desc">
              Lorem ipsum dolor sit amet. Et galisum vero est esse corrupti non quod natus. Sit corporis ipsam non repellat aliquid vel porro odio cum assumenda explicabo hic consequuntur quas aut magnam eveniet et vero accusamus. Aut asperiores architecto sed cumque repellendus qui itaque nemo est unde animi nam maiores nulla sed ipsa deserunt.
            </p>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="footer">
        <p>&copy; 2025 AWS Builders Club</p>
      </footer>

      {/* Modal for Projects */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">GitHub Repositories</h2>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="repo-grid">
              {githubRepos.map(repo => (
                <div key={repo.url} className="repo-card">
                  <div className="repo-header">
                    <svg className="repo-icon" viewBox="0 0 16 16">
                      <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                    </svg>
                    <a
                      href={repo.url}
                      className="repo-name"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.name}
                    </a>
                  </div>
                  <p className="repo-description">{repo.description}</p>
                  <div className="repo-stats">
                    <div className="repo-stat">
                      <svg className="repo-stat-icon" viewBox="0 0 16 16">
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>
                      </svg>
                      {repo.stars}
                    </div>
                    <div className="repo-stat">
                      <svg className="repo-stat-icon" viewBox="0 0 16 16">
                        <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878z"/>
                      </svg>
                      {repo.forks}
                    </div>
                    <div className="repo-stat">
                      <svg className="repo-stat-icon" viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                        <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                      </svg>
                      {repo.issues}
                    </div>
                    <div className="repo-language">
                      <div
                        className="language-dot"
                        style={{
                          background:
                            repo.language === 'JavaScript' ? '#f1e05a' :
                            repo.language === 'Python' ? '#3572A5' :
                            repo.language === 'TypeScript' ? '#2b7489' :
                            '#4285f4'
                        }}
                      ></div>
                      {repo.language}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Meet the Team Modal */}
      {showTeamModal && (
        <div className="modal-overlay" onClick={() => setShowTeamModal(false)}>
          <div className="modal-content" style={{ maxWidth: '900px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Meet the Team</h2>
              <button className="modal-close" onClick={() => setShowTeamModal(false)}>×</button>
            </div>
            <div style={{ display: 'flex', gap: '32px', padding: '32px 0' }}>
              {/* Sidebar Navigation */}
              <div style={{
                background: 'var(--primary-blue)',
                borderRadius: '16px',
                padding: '24px 0',
                minWidth: '320px',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {teamSections.map(section => (
                  <button
                    key={section.key}
                    style={{
                      background: activeTeamSection === section.key ? '#0498eeff' : 'none',
                      color: activeTeamSection === section.key ? '#fff' : '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '12px 24px',
                      fontWeight: activeTeamSection === section.key ? 'bold' : 'normal',
                      margin: '0 24px 4px 24px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      opacity: activeTeamSection === section.key ? 1 : 0.85,
                      transition: 'background 0.2s'
                    }}
                    onClick={() => setActiveTeamSection(section.key)}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
              {/* Main Content */}
              <div style={{ flex: 1 }}>
                <h2 style={{ color: 'var(--primary-blue)', marginBottom: '8px' }}>
                  {teamSections.find(s => s.key === activeTeamSection).content.title}
                </h2>
                {/* Show multiple leaders for 'leaders' section */}
                {activeTeamSection === 'leaders'
                  ? teamSections.find(s => s.key === activeTeamSection).content.leaders.map((leader, idx) => (
                      <div key={idx} style={{ fontWeight: 'bold', color: '#e53935', marginBottom: '8px' }}>
                        {leader.name}
                        <div style={{ marginBottom: '16px', fontWeight: 'normal', color: '#222' }}>
                          • {leader.role}
                        </div>
                      </div>
                    ))
                  : (
                    <>
                      <div style={{ fontWeight: 'bold', color: '#e53935', marginBottom: '8px' }}>
                        {teamSections.find(s => s.key === activeTeamSection).content.leader}
                      </div>
                      <div style={{ marginBottom: '16px' }}>
                        • {teamSections.find(s => s.key === activeTeamSection).content.leaderRole}
                      </div>
                    </>
                  )
                }
                {/* showing members */}
                {activeTeamSection !== 'lead' && activeTeamSection !=='leaders' &&
                  teamSections.find(s => s.key === activeTeamSection).content.members.length > 0 && (
                    <>
                      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>MEMBERS</div>
                      <ul style={{ marginBottom: '24px', paddingLeft: '20px' }}>
                        {teamSections.find(s => s.key === activeTeamSection).content.members.map((member, idx) => (
                          <li key={idx}>
                            {member.name}
                            <span style={{ color: '#888', fontStyle: 'italic', marginLeft: '8px' }}>
                              {member.role}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )
                }
                <hr style={{ margin: '24px 0', border: 'none', borderTop: '1px solid #ccc' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Events */}
      {showEventsModal && (
        <div className="modal-overlay" onClick={() => setShowEventsModal(false)}>
          <div className="modal-content" style={{ maxWidth: '600px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Events</h2>
              <button className="modal-close" onClick={() => setShowEventsModal(false)}>×</button>
            </div>
            <div style={{ padding: '24px 0' }}>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ marginBottom: '8px', color: 'var(--primary-blue)' }}>AWS Study Jam</h3>
                <div style={{ fontStyle: 'italic', color: '#888', marginBottom: '4px' }}>Group Study Session</div>
                <p>
                  Join our collaborative AWS Study Jan group study session to learn and review AWS concepts together. Perfect for beginners and those preparing for certifications!
                </p>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ marginBottom: '8px', color: 'var(--primary-blue)' }}>Launchpad Workshops</h3>
                <div style={{ fontStyle: 'italic', color: '#888', marginBottom: '4px' }}>Workshop</div>
                <p>
                  Hands-on workshops designed to help you build real-world AWS skills. Participate in guided labs and interactive sessions led by experienced mentors.
                </p>
              </div>
              <div>
                <h3 style={{ marginBottom: '8px', color: 'var(--primary-blue)' }}>Cloud Career Compass</h3>
                <div style={{ fontStyle: 'italic', color: '#888', marginBottom: '4px' }}>Career Talks</div>
                <p>
                  Discover career opportunities in cloud computing! Hear from industry professionals and alumni about their journeys and get tips for launching your own cloud career.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Modal */}
      {showFAQModal && (
        <div className="modal-overlay" onClick={() => setShowFAQModal(false)}>
          <div className="modal-content" style={{ maxWidth: '500px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">FAQ</h2>
              <button className="modal-close" onClick={() => setShowFAQModal(false)}>×</button>
            </div>
            <div style={{ padding: '24px 0' }}>
              <ul style={{ paddingLeft: '20px', fontSize: '1.1rem' }}>
                <li>1. Placeholder</li>
                <li>2. Placeholder</li>
                <li>3. Placeholder</li>
                <li>4. Placeholder</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
