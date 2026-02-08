import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { toast } from 'react-toastify';
import './Contact.css';

const Contact = () => {
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('https://formspree.io/f/mdadppnk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        e.target.reset();
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again or email directly.');
      console.error('Contact error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Tell me about the product you want to ship</p>
        </div>

        <div className="contact-shell">
          <div className="contact-aside">
            <div className="contact-cta">
              <p className="eyebrow">Response window</p>
              <h3>Replies within 24 hours</h3>
              <p className="cta-copy">Available for AI/ML builds, full-stack work, and collaborations.</p>
            </div>

            <div className="contact-chips">
              <a href="mailto:ashishrahin@gmail.com" className="chip">
                <FaEnvelope /> ashishrahin@gmail.com
              </a>
              <a href="tel:+919520191399" className="chip">
                <FaPhone /> +91 9520191399
              </a>
              <span className="chip subtle">
                <FaMapMarkerAlt /> Greater Noida, India
              </span>
            </div>

            <div className="contact-socials">
              <a 
                href="https://github.com/ashish-shakya16" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-pill"
              >
                <FaGithub /> GitHub
              </a>
              <a 
                href="https://linkedin.com/in/ashish-shakya2023" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-pill"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>

            <div className="availability">
              <div className="status-indicator"></div>
              <div>
                <p className="availability-title">Currently open</p>
                <p className="availability-copy">New projects, internships, and freelance collabs.</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="AI product build, consultation, internship"
                />
              </div>
              <div className="form-group">
                <label htmlFor="timeline">Ideal timeline</label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  defaultValue="Flexible / 2-4 weeks"
                  readOnly
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                placeholder="Share goals, scope, constraints, and success metrics."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
