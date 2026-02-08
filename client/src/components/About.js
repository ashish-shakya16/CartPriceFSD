import React from 'react';
import { FaMapMarkerAlt, FaUniversity, FaCogs, FaRobot, FaLightbulb, FaChartLine } from 'react-icons/fa';
import './About.css';

const About = () => {
  const pillars = [
    {
      title: 'AI Engineering',
      focus: 'Computer Vision, NLP, Generative AI',
      detail: 'Ship assistants, detectors, and data products that stay reliable beyond demos.',
    },
    {
      title: 'Full-Stack Delivery',
      focus: 'React, Node.js, APIs, Auth, DB',
      detail: 'Designs resilient SaaS patterns with clean APIs and observability in mind.',
    },
    {
      title: 'MLOps Mindset',
      focus: 'Pipelines, monitoring, deployment',
      detail: 'Moves models from notebook to users with versioning, testing, and guardrails.',
    },
  ];

  const milestones = [
    { label: '15+', value: 'Projects shipped' },
    { label: '6', value: 'Certifications' },
    { label: 'AI-first', value: 'CV · Voice · NLP' },
  ];

  const learning = [
    'Advanced deep learning systems',
    'MLOps & cloud deployment',
    'High-signal product analytics',
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">AI-first engineer who ships production-ready experiences</p>
        </div>

        <div className="about-grid">
          <div className="about-panel narrative">
            <div className="about-meta">
              <span className="pill"><FaMapMarkerAlt /> Greater Noida, India</span>
              <span className="pill"><FaUniversity /> B.Tech CSE • CGPA 7.32</span>
            </div>

            <p className="about-lede">
              I'm Ashish Shakya—an AI/ML engineer who blends computer vision, NLP, and pragmatic
              product thinking. I design systems that are easy to demo and easier to keep online.
            </p>

            <ul className="about-list">
              <li>Turns messy requirements into shipped AI products with clear success metrics.</li>
              <li>Builds full-stack rails: React frontends, Node APIs, Python ML services, and databases.</li>
              <li>Values DX and reliability—structured repos, docs, and automated checks.</li>
            </ul>

            <div className="about-milestones">
              {milestones.map((item) => (
                <div key={item.label} className="milestone-card">
                  <span className="milestone-label">{item.label}</span>
                  <span className="milestone-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-panel focus">
            <div className="pillar-grid">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="pillar-card">
                  <div className="pillar-head">
                    <span className="pillar-dot" />
                    <h3>{pillar.title}</h3>
                  </div>
                  <p className="pillar-focus">{pillar.focus}</p>
                  <p className="pillar-detail">{pillar.detail}</p>
                </div>
              ))}
            </div>

            <div className="learning-card">
              <div className="learning-head">
                <FaCogs />
                <div>
                  <h4>Building depth</h4>
                  <p>Current learning sprints</p>
                </div>
              </div>
              <div className="learning-chips">
                {learning.map((item) => (
                  <span key={item} className="learning-chip">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="about-callouts">
          <div className="callout">
            <FaRobot />
            <div>
              <h4>AI that feels intentional</h4>
              <p>Assistants, detectors, and automation with measurable outcomes.</p>
            </div>
          </div>
          <div className="callout">
            <FaLightbulb />
            <div>
              <h4>Builder’s bias</h4>
              <p>Bias toward prototypes in days, polish in weeks, reliability always.</p>
            </div>
          </div>
          <div className="callout">
            <FaChartLine />
            <div>
              <h4>Product-aware delivery</h4>
              <p>Ships with analytics, docs, and smooth handoffs for teams and clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
