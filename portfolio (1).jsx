import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ChevronDown, Code, Briefcase, Award, GraduationCap, User, Folder } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    languages: ['C', 'Java'],
    webTech: ['HTML', 'CSS', 'JavaScript'],
    database: ['MySQL'],
    tools: ['VS Code', 'Github'],
    core: ['OOP', 'DBMS', 'DSA', 'Operating System'],
    soft: ['Problem Solving', 'Teamwork', 'Leadership']
  };

  const projects = [
    {
      title: 'Smart Contact Center Platform',
      description: 'A comprehensive platform designed to streamline customer query handling, tracking, and resolution with role-based access control for Customers, Agents, and Admins.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      period: 'Sept 2025 - Apr 2027',
      highlights: [
        'Role-based access control for secure query management',
        'Structured for future AI integration and chatbot assistance',
        'Automated query resolution system'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio showcasing projects, skills, and achievements with interactive UI components and clean, modern design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      period: 'Aug 2024 - Sept 2024',
      highlights: [
        'Interactive navigation and contact forms',
        'Responsive design across all devices',
        'Clean layout with enhanced user experience'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'KIET Group of Institutions, Ghaziabad',
      period: '2023 - 2027',
      grade: 'CGPA: 8.2'
    },
    {
      degree: 'CBSE, Class XII',
      institution: 'Cambridge International School, Saharanpur',
      period: '2022 - 2023',
      grade: '90.8%'
    },
    {
      degree: 'CBSE, Class X',
      institution: 'Cambridge International School, Saharanpur',
      period: '2020 - 2021',
      grade: '79.8%'
    }
  ];

  const achievements = [
    {
      title: 'INNOTECH 2024',
      description: 'Department-level technical event participation and certification',
      date: 'November 2024'
    },
    {
      title: 'NASA Space Apps Challenge',
      description: 'Organizer for hackathon under Kinesis Technical Society',
      date: 'October 2024'
    },
    {
      title: 'Rangoli Competition Winner',
      description: 'First place at department-level competition',
      date: 'June 2024'
    },
    {
      title: 'Java OOP Certification',
      description: 'Certified in core Object-Oriented Programming concepts',
      date: '2024'
    },
    {
      title: 'Basic SQL Certification',
      description: 'Certified in fundamentals of SQL queries and databases',
      date: '2024'
    }
  ];

  return (
    <div className="portfolio">
      {/* Custom Cursor Effect */}
      <div 
        className="cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">SC</div>
          <ul className="nav-links">
            {['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'].map(section => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={activeSection === section ? 'active' : ''}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="grid-pattern"></div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <span className="greeting">Hello, I'm</span>
            <h1 className="hero-name">
              Swarna Chaudhary
              <span className="name-underline"></span>
            </h1>
            <h2 className="hero-title">
              <span className="typing-text">Aspiring Software Developer</span>
            </h2>
            <p className="hero-description">
              Computer Science student at KIET Group of Institutions with a passion for building 
              innovative web applications and solving complex problems through code. Focused on 
              creating impactful solutions using modern web technologies.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                <Folder size={18} />
                View Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-outline">
                <Mail size={18} />
                Contact Me
              </button>
            </div>
            <div className="social-links">
              <a href="mailto:swarnach14@gmail.com" className="social-icon" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://github.com/SwarnaChaudhary1412" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/swarna-chaudhary" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <button onClick={() => scrollToSection('about')} className="scroll-indicator">
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <User className="section-icon" />
            <h2 className="section-title">About Me</h2>
            <div className="title-underline"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                I'm a dedicated Computer Science student currently pursuing my B.Tech at KIET Group 
                of Institutions with a CGPA of 8.2. My journey in technology is driven by curiosity 
                and a passion for creating impactful digital solutions.
              </p>
              <p>
                With a strong foundation in data structures, algorithms, and object-oriented programming, 
                I focus on web development using modern technologies. I've developed projects 
                ranging from intelligent contact center platforms to responsive portfolio websites, always 
                focusing on clean code, user experience, and scalable architecture.
              </p>
              <p>
                Beyond academics, I'm an active member of the Kinesis Technical Society, where I've 
                organized hackathons and participated in technical events. I believe in continuous 
                learning and applying theoretical knowledge to real-world problems.
              </p>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">8.2</div>
                  <div className="stat-label">CGPA</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Technologies</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Achievements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header">
            <Code className="section-icon" />
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="title-underline"></div>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">Programming Languages</h3>
              <div className="skill-tags">
                {skills.languages.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="category-title">Web Technologies</h3>
              <div className="skill-tags">
                {skills.webTech.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="category-title">Database</h3>
              <div className="skill-tags">
                {skills.database.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="category-title">Developer Tools</h3>
              <div className="skill-tags">
                {skills.tools.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="category-title">Core Subjects</h3>
              <div className="skill-tags">
                {skills.core.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="category-title">Soft Skills</h3>
              <div className="skill-tags">
                {skills.soft.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <Folder className="section-icon" />
            <h2 className="section-title">Featured Projects</h2>
            <div className="title-underline"></div>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-period">{project.period}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <button className="project-link">
                    <Github size={16} />
                    View Code
                  </button>
                  <button className="project-link">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <div className="section-header">
            <GraduationCap className="section-icon" />
            <h2 className="section-title">Education</h2>
            <div className="title-underline"></div>
          </div>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-period">{edu.period}</span>
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <p className="timeline-institution">{edu.institution}</p>
                  <span className="timeline-grade">{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements">
        <div className="container">
          <div className="section-header">
            <Award className="section-icon" />
            <h2 className="section-title">Achievements & Certifications</h2>
            <div className="title-underline"></div>
          </div>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">
                  <Award size={24} />
                </div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                <span className="achievement-date">{achievement.date}</span>
              </div>
            ))}
          </div>
          <div className="extra-curricular">
            <h3 className="subsection-title">Extra-Curricular Activities</h3>
            <p className="activity-note">Active member of Kinesis Technical Society</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <Mail className="section-icon" />
            <h2 className="section-title">Get In Touch</h2>
            <div className="title-underline"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out!
              </p>
              <div className="contact-details">
                <a href="mailto:swarnach14@gmail.com" className="contact-detail">
                  <Mail size={20} />
                  <span>swarnach14@gmail.com</span>
                </a>
                <a href="https://github.com/SwarnaChaudhary1412" target="_blank" rel="noopener noreferrer" className="contact-detail">
                  <Github size={20} />
                  <span>github.com/SwarnaChaudhary1412</span>
                </a>
                <a href="https://linkedin.com/in/swarna-chaudhary" target="_blank" rel="noopener noreferrer" className="contact-detail">
                  <Linkedin size={20} />
                  <span>linkedin.com/in/swarna-chaudhary</span>
                </a>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your.email@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Swarna Chaudhary. Designed & Built with passion.</p>
          <div className="footer-links">
            <a href="mailto:swarnach14@gmail.com"><Mail size={18} /></a>
            <a href="https://github.com/SwarnaChaudhary1412" target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
            <a href="https://linkedin.com/in/swarna-chaudhary" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio {
          background: #0a0e1a;
          color: #e4e8f0;
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
        }

        /* Custom Cursor */
        .cursor-glow {
          position: fixed;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: opacity 0.3s;
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
          background: rgba(10, 14, 26, 0.3);
          backdrop-filter: blur(10px);
        }

        .navbar.scrolled {
          padding: 1rem 0;
          background: rgba(10, 14, 26, 0.95);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2.5rem;
        }

        .nav-links button {
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
          text-transform: capitalize;
        }

        .nav-links button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transition: width 0.3s ease;
        }

        .nav-links button:hover,
        .nav-links button.active {
          color: #3b82f6;
        }

        .nav-links button.active::after {
          width: 100%;
        }

        /* Hero Section */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 8rem 3rem 4rem;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.3;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          animation: float 20s infinite ease-in-out;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent);
          top: -200px;
          right: -200px;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent);
          bottom: -150px;
          left: -150px;
          animation-delay: -10s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          width: 100%;
        }

        .hero-text {
          max-width: 800px;
        }

        .greeting {
          display: inline-block;
          color: #3b82f6;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          animation: fadeInUp 0.8s ease;
        }

        .hero-name {
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          position: relative;
          animation: fadeInUp 0.8s ease 0.2s backwards;
          letter-spacing: -0.03em;
        }

        .name-underline {
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 200px;
          height: 6px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 3px;
        }

        .hero-title {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 600;
          color: #94a3b8;
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.8s ease 0.4s backwards;
        }

        .typing-text {
          position: relative;
          display: inline-block;
        }

        .typing-text::after {
          content: '|';
          position: absolute;
          right: -10px;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero-description {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #cbd5e1;
          margin-bottom: 3rem;
          max-width: 650px;
          animation: fadeInUp 0.8s ease 0.6s backwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease 0.8s backwards;
        }

        .btn {
          padding: 1rem 2rem;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
        }

        .btn-secondary {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border: 2px solid rgba(59, 130, 246, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: #3b82f6;
        }

        .btn-outline {
          background: transparent;
          color: #94a3b8;
          border: 2px solid #334155;
        }

        .btn-outline:hover {
          border-color: #3b82f6;
          color: #3b82f6;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          animation: fadeInUp 0.8s ease 1s backwards;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .social-icon:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: #3b82f6;
          transform: translateY(-5px);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          background: none;
          border: none;
          color: #3b82f6;
          cursor: pointer;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-10px); }
          60% { transform: translateX(-50%) translateY(-5px); }
        }

        /* Container */
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 3rem;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-icon {
          color: #3b82f6;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .title-underline {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          margin: 0 auto;
          border-radius: 2px;
        }

        /* About Section */
        .about {
          padding: 8rem 0;
          position: relative;
        }

        .about-content {
          display: grid;
          gap: 3rem;
        }

        .about-text p {
          font-size: 1.15rem;
          line-height: 1.9;
          color: #cbd5e1;
          margin-bottom: 1.5rem;
        }

        .about-intro {
          font-size: 1.3rem;
          color: #e4e8f0;
          font-weight: 500;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .stat-card {
          text-align: center;
          padding: 2rem;
          background: rgba(59, 130, 246, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          background: rgba(59, 130, 246, 0.1);
          border-color: #3b82f6;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.95rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Skills Section */
        .skills {
          padding: 8rem 0;
          background: rgba(15, 23, 42, 0.5);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: rgba(30, 41, 59, 0.5);
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
        }

        .skill-category:hover {
          transform: translateY(-5px);
          border-color: #3b82f6;
          box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
        }

        .category-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #3b82f6;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          padding: 0.6rem 1.2rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #e4e8f0;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: #3b82f6;
          transform: scale(1.05);
        }

        /* Projects Section */
        .projects {
          padding: 8rem 0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2.5rem;
        }

        .project-card {
          background: rgba(30, 41, 59, 0.5);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: #3b82f6;
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.3);
        }

        .project-card:hover::before {
          transform: scaleX(1);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1rem;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e4e8f0;
          margin-bottom: 0.5rem;
        }

        .project-period {
          font-size: 0.85rem;
          color: #64748b;
          background: rgba(59, 130, 246, 0.1);
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
        }

        .project-description {
          font-size: 1rem;
          line-height: 1.7;
          color: #cbd5e1;
          margin-bottom: 1.5rem;
        }

        .project-highlights {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .project-highlights li {
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.75rem;
          color: #94a3b8;
          font-size: 0.95rem;
        }

        .project-highlights li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: #3b82f6;
          font-size: 1.2rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-badge {
          padding: 0.4rem 0.8rem;
          background: rgba(59, 130, 246, 0.15);
          border-radius: 6px;
          font-size: 0.85rem;
          color: #3b82f6;
          font-weight: 600;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          padding: 0.7rem 1.2rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          color: #3b82f6;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .project-link:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: #3b82f6;
          transform: translateX(5px);
        }

        /* Education Section */
        .education {
          padding: 8rem 0;
          background: rgba(15, 23, 42, 0.5);
        }

        .timeline {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          padding-left: 3rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background: linear-gradient(180deg, #3b82f6, #8b5cf6);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          padding-left: 2rem;
        }

        .timeline-marker {
          position: absolute;
          left: -0.55rem;
          top: 0;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background: #3b82f6;
          border: 3px solid #0a0e1a;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }

        .timeline-content {
          background: rgba(30, 41, 59, 0.5);
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateX(10px);
          border-color: #3b82f6;
          box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
        }

        .timeline-period {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: rgba(59, 130, 246, 0.15);
          border-radius: 6px;
          color: #3b82f6;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .timeline-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #e4e8f0;
        }

        .timeline-institution {
          font-size: 1rem;
          color: #94a3b8;
          margin-bottom: 0.75rem;
        }

        .timeline-grade {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 8px;
          color: white;
          font-weight: 700;
          font-size: 0.95rem;
        }

        /* Achievements Section */
        .achievements {
          padding: 8rem 0;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .achievement-card {
          background: rgba(30, 41, 59, 0.5);
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
          text-align: center;
        }

        .achievement-card:hover {
          transform: translateY(-10px);
          border-color: #3b82f6;
          box-shadow: 0 15px 50px rgba(59, 130, 246, 0.3);
        }

        .achievement-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .achievement-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #e4e8f0;
        }

        .achievement-description {
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .achievement-date {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 6px;
          color: #3b82f6;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .extra-curricular {
          text-align: center;
          padding: 2rem;
          background: rgba(59, 130, 246, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .subsection-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #3b82f6;
        }

        .activity-note {
          font-size: 1.1rem;
          color: #cbd5e1;
        }

        /* Contact Section */
        .contact {
          padding: 8rem 0;
          background: rgba(15, 23, 42, 0.5);
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-info h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #e4e8f0;
        }

        .contact-info p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #94a3b8;
          margin-bottom: 2rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-detail {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: rgba(30, 41, 59, 0.5);
          border-radius: 12px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
          color: #cbd5e1;
          text-decoration: none;
        }

        .contact-detail:hover {
          border-color: #3b82f6;
          transform: translateX(10px);
          background: rgba(59, 130, 246, 0.1);
        }

        .contact-form {
          background: rgba(30, 41, 59, 0.5);
          padding: 2.5rem;
          border-radius: 20px;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #cbd5e1;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 10px;
          color: #e4e8f0;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }

        .submit-btn {
          width: 100%;
          margin-top: 1rem;
        }

        /* Footer */
        .footer {
          background: rgba(10, 14, 26, 0.95);
          padding: 2rem 0;
          border-top: 1px solid rgba(59, 130, 246, 0.2);
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-content p {
          color: #94a3b8;
        }

        .footer-links {
          display: flex;
          gap: 1rem;
        }

        .footer-links a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-3px);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .nav-links {
            gap: 1.5rem;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 0 1.5rem;
          }

          .nav-links {
            display: none;
          }

          .hero {
            padding: 6rem 1.5rem 4rem;
          }

          .container {
            padding: 0 1.5rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
            justify-content: center;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .skills-grid,
          .achievements-grid {
            grid-template-columns: 1fr;
          }

          .timeline {
            padding-left: 2rem;
          }

          .footer-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
