import React from 'react';
import { motion } from 'framer-motion';
import {
  BsGear,
  BsLaptop,
  BsCloud,
  BsShieldCheck,
  BsGit,
  BsTerminal,
  BsPlugin,
  BsBarChart,
  BsSearch,
  BsLink,
  BsCode,
  BsFire,
  BsPlug,
  BsLock,
  BsPalette,
  BsDatabase,
  BsCheckCircle,
  BsBook,
  BsClipboard,
  BsEye,
  BsStar,
  BsBox,
  BsTrophy,
} from 'react-icons/bs';
import './Skills.css';

const Skills = () => {
  const stacks = [
    {
      title: 'AI / ML',
      subtitle: 'Vision, NLP, Generative AI',
      icon: <BsGear />,
      items: [
        { name: 'Python', icon: <BsTerminal /> },
        { name: 'TensorFlow', icon: <BsPlugin /> },
        { name: 'PyTorch', icon: <BsFire /> },
        { name: 'scikit-learn', icon: <BsBarChart /> },
        { name: 'OpenCV', icon: <BsSearch /> },
        { name: 'RAG workflows', icon: <BsLink /> },
      ],
    },
    {
      title: 'Full-Stack',
      subtitle: 'Frontend, APIs, auth',
      icon: <BsLaptop />,
      items: [
        { name: 'React 18', icon: <BsCode /> },
        { name: 'Node.js', icon: <BsGear /> },
        { name: 'Express', icon: <BsPlug /> },
        { name: 'REST', icon: <BsPlug /> },
        { name: 'JWT/Auth', icon: <BsLock /> },
        { name: 'UI systems', icon: <BsPalette /> },
      ],
    },
    {
      title: 'Data & Infra',
      subtitle: 'Persistence, delivery, ops',
      icon: <BsCloud />,
      items: [
        { name: 'MySQL', icon: <BsDatabase /> },
        { name: 'MongoDB', icon: <BsDatabase /> },
        { name: 'SQLite', icon: <BsDatabase /> },
        { name: 'Pipelines', icon: <BsGear /> },
        { name: 'Docker', icon: <BsBox /> },
        { name: 'Monitoring', icon: <BsBarChart /> },
      ],
    },
    {
      title: 'Quality & DX',
      subtitle: 'Reliability and handoffs',
      icon: <BsShieldCheck />,
      items: [
        { name: 'Git discipline', icon: <BsGit /> },
        { name: 'Testing', icon: <BsCheckCircle /> },
        { name: 'Documentation', icon: <BsBook /> },
        { name: 'API contracts', icon: <BsClipboard /> },
        { name: 'Code review', icon: <BsEye /> },
        { name: 'Best practices', icon: <BsStar /> },
      ],
    },
  ];

  const depth = [
    { name: 'Python for AI', score: 92 },
    { name: 'Computer Vision', score: 82 },
    { name: 'NLP & GenAI', score: 80 },
    { name: 'React + Node', score: 86 },
    { name: 'Databases', score: 83 },
  ];

  const certifications = [
    { name: 'Web Development - HTML, CSS & JavaScript', org: 'Data Flair', year: '2024' },
    { name: 'Java Foundations', org: 'Oracle Academy', year: '2024' },
    { name: 'React Mastery Workshop', org: 'Sharda University', year: '2025' },
    { name: 'Generative AI Landscape', org: 'Infosys Springboard', year: '2025' },
    { name: 'Problem Solving (Basic)', org: 'HackerRank', year: '2024' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Capability stacks and the depth behind them</p>
        </div>

        <div className="stack-grid">
          {stacks.map((stack, idx) => (
            <motion.div
              key={stack.title}
              className="stack-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -8, boxShadow: '0 24px 48px rgba(99, 102, 241, 0.2)' }}
            >
              <div className="stack-head">
                <div className="stack-icon">{stack.icon}</div>
                <div>
                  <h3>{stack.title}</h3>
                  <p>{stack.subtitle}</p>
                </div>
              </div>
              <div className="stack-tags">
                {stack.items.map((item, itemIdx) => (
                  <motion.span
                    key={item.name}
                    className="stack-tag"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 + itemIdx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
                  >
                    <span className="skill-icon">{item.icon}</span>
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="depth-grid">
          <motion.div
            className="depth-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="depth-head">
              <span className="depth-icon"><BsBarChart /></span>
              <div>
                <h3>Technical depth</h3>
                <p>Where I spend most of my time</p>
              </div>
            </div>
            <div className="depth-bars">
              {depth.map((item, idx) => (
                <motion.div
                  key={item.name}
                  className="depth-row"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span>{item.name}</span>
                  <div className="depth-bar">
                    <motion.div
                      className="depth-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.score}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="depth-score">{item.score}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="cert-card-wrap"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="cert-head">
              <span className="cert-icon"><BsTrophy /></span>
              <div>
                <h3>Certifications & training</h3>
                <p>Signals of structured learning</p>
              </div>
            </div>
            <div className="cert-list">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  className="cert-row"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <div>
                    <div className="cert-name">{cert.name}</div>
                    <div className="cert-org">{cert.org}</div>
                  </div>
                  <span className="cert-year">{cert.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
