import React, { useRef } from 'react';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);

  const [showModal, setShowModal] = React.useState(false);

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

  return (
    <div className="app-bg app-text app-font min-height flex-col">
      {/* navigation */}
      <nav className="navbar">
        <h1 className="navbar-title">AWS Builders Club (Logo)</h1>
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
        </ul>
      </nav>

      {/* hero-section */}
      <section id="home" className="hero-section" ref={homeRef}>
        <h2 className="hero-title">Welcome to AWS Builders Club</h2>
        <p className="hero-desc">
          Lorem ipsum dolor sit amet. Et galisum vero est esse corrupti non quod natus.
        </p>
        <div className="hero-buttons">
          <a
            href="https://discord.gg/UFGUPutKSR"
            className="hero-btn hero-btn-blue"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Our Discord
          </a>
          <a href="/archive" className="hero-btn hero-btn-orange">
            Projects
          </a>
        </div>
      </section>

      {/* about us */}
      <section id="aboutus" className="about-section" ref={aboutRef}>
        <h2 className="hero-title" style={{ marginBottom: '32px' }}>
          About Us
        </h2>
        <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="about-block" style={{ marginBottom: '48px' }}>
            <h3 className="highlights-title" style={{ marginBottom: '16px' }}>
              Vision
            </h3>
            <p className="highlight-card-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, nec dictum sem urna at sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
          <div className="about-block">
            <h3 className="highlights-title" style={{ marginBottom: '16px' }}>
              Mission
            </h3>
            <p className="highlight-card-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, nec dictum sem urna at sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>
      </section>

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
    </div>
  );
}

export default App;
