import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Ashish Shakya</h3>
            <p className="footer-tagline">
              Building intelligent systems and crafting innovative solutions with AI & Full-Stack Development
            </p>
            <div className="footer-socials">
              <a href="https://github.com/ashish-shakya16" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/ashish-shakya2023" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:ashishrahin@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>AI/ML Development</li>
              <li>Computer Vision</li>
              <li>Web Development</li>
              <li>SaaS Solutions</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>Greater Noida, UP</li>
              <li>ashishrahin@gmail.com</li>
              <li>+91 9520191399</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Ashish Shakya. Made with <FaHeart className="heart" />
          </p>
          <p className="tech-stack">
            React • Node.js • MongoDB • Python • AI/ML
          </p>
        </div>

        <button className="scroll-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
