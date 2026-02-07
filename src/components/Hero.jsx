const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-logo-text">Pradeepkumar Chythram Gopinathen</h1>
        <h2>Technical Architect</h2>
        <p className="hero-tagline">
          20+ Years Experience | Cloud-Native Solutions | AI Integration
        </p>
        <p className="hero-description">
          Specializing in scalable Banking & Insurance solutions and embedding intelligent automation into enterprise applications.
        </p>
        <div className="hero-socials">
          <a href="https://github.com/cgpradeepkumar/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/pradeepkumar-c-g-1a3b809/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/cgpradeepkumar/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/cgpradeepkumar" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" />
          </a>
        </div>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
          <a href="#about" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
