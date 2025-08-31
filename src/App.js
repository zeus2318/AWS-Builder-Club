import React, { useRef } from 'react';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);

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

  return (
    <div className="app-bg app-text app-font min-height flex-col">
      {/* navigation */}
      <nav className="navbar">
        <h1 className="navbar-title">AWS Builders Club</h1>
        <ul className="navbar-links">
          <li><a href="#home" className="navbar-link" onClick={handleAboutClick2}>Home</a></li>
          <li><a href="/archive" className="navbar-link">Projects</a></li>
          <li>
            <a
              href="#aboutus"
              className="navbar-link"
              onClick={handleAboutClick}
            >
              About
            </a>
          </li>
          <li><a href="/goals" className="navbar-link">Goals</a></li>
        </ul>
      </nav>

      {/* hero-section */}
      <section 
      id="home"
      className="hero-section"
      ref={homeRef}>
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
          <a href="/archive" className="hero-btn hero-btn-orange">Projects</a>
        </div>
      </section>

      {/* about us */}
      <section
        id="aboutus"
        className="about-section"
        ref={aboutRef}
        style={{ padding: '108px 24px', background: '#6d6a6aff' }}
      >
        <h2 className="hero-title" style={{ marginBottom: '32px' }}>About Us</h2>
        <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="about-block" style={{ marginBottom: '48px' }}>
            <h3 className="highlights-title" style={{ marginBottom: '16px' }}>Vision</h3>
            <p className="highlight-card-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, nec dictum sem urna at sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
          <div className="about-block">
            <h3 className="highlights-title" style={{ marginBottom: '16px' }}>Mission</h3>
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
            <p className="highlight-card-desc">Lorem ipsum dolor sit amet. Et galisum vero est esse corrupti non quod natus. Sit corporis ipsam non repellat aliquid vel porro odio cum assumenda explicabo hic consequuntur quas aut magnam eveniet et vero accusamus. Aut asperiores architecto sed cumque repellendus qui itaque nemo est unde animi nam maiores nulla sed ipsa deserunt.</p>
          </div>
          <div className="highlight-card">
            <h4 className="highlight-card-title orange">Innovation</h4>
            <p className="highlight-card-desc">Lorem ipsum dolor sit amet. Et galisum vero est esse corrupti non quod natus. Sit corporis ipsam non repellat aliquid vel porro odio cum assumenda explicabo hic consequuntur quas aut magnam eveniet et vero accusamus. Aut asperiores architecto sed cumque repellendus qui itaque nemo est unde animi nam maiores nulla sed ipsa deserunt.</p>
          </div>
          <div className="highlight-card">
            <h4 className="highlight-card-title blue">Learning</h4>
            <p className="highlight-card-desc">Lorem ipsum dolor sit amet. Et galisum vero est esse corrupti non quod natus. Sit corporis ipsam non repellat aliquid vel porro odio cum assumenda explicabo hic consequuntur quas aut magnam eveniet et vero accusamus. Aut asperiores architecto sed cumque repellendus qui itaque nemo est unde animi nam maiores nulla sed ipsa deserunt.</p>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="footer">
        <p>&copy; 2025 AWS Builders Club</p>
      </footer>
    </div>
  );
}

export default App;
