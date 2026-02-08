import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBg from 'particles-bg';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <ParticlesBg type="cobweb" bg={true} color="#6366f1" num={80} />

      <div className="hero-shell">
        <div className="hero-right">
          <div className="profile-card">
            <div className="profile-ring">
              <img src="/profileImg.png" alt="Ashish Shakya" className="profile-img" />
            </div>
          </div>
        </div>

        <div className="hero-left">
          <h1 className="hero-headline">Ashish Shakya</h1>
          <p className="hero-role">AI/ML Engineer · Computer Vision & NLP</p>
          <div className="hero-typed">
            <TypeAnimation
              sequence={[
                'Production CV/NLP pipelines that ship',
                2400,
                'APIs + dashboards delivered fast',
                2400,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
            />
          </div>
          <p className="hero-description">
            I ship CV/NLP products end-to-end—models, retrieval, APIs, and UI—built for faster launches and lower manual work.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="/Ashish Shakya resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <button className="btn btn-outline" onClick={scrollToContact}>Contact Me</button>
            <a
              href="https://github.com/ashish-shakya16"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              GitHub
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/ashish-shakya16" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/ashish-shakya2023" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:ashishrahin@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="tel:+919520191399" aria-label="Phone">
              <FaPhone />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">Next: Skills & Projects ↓</div>
    </section>
  );
};

export default Hero;
