// components/Home.js
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCode, FaDatabase, FaChartBar, FaServer, FaReact, FaPython } from 'react-icons/fa';

const Home = () => {
  const particlesRef = useRef(null);
  
  useEffect(() => {
    // Create data particles for background effect - matches your existing particle CSS
    const createParticles = () => {
      const container = particlesRef.current;
      if (!container) return;
      
      container.innerHTML = '';
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      
      // Adjust number of particles based on screen size
      const particleCount = window.innerWidth < 768 ? 25 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 5 + 3;
        const posX = Math.random() * containerWidth;
        const posY = Math.random() * containerHeight;
        const delay = Math.random() * 2;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.animationDelay = `${delay}s`;
        
        container.appendChild(particle);
      }
    };
    
    createParticles();
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);
  
  // Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const techStackVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 1
      }
    }
  };
  
  const iconVariants = {
    hidden: { scale: 0, rotate: -30 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };
  
  // Data for skills visualization
  const skills = [
    { name: "Front-end Development", value: 90 },
    { name: "Back-end Development", value: 85 },
    { name: "Data Analysis", value: 92 },
    { name: "Database Management", value: 88 },
    { name: "Data Visualization", value: 90 },
    { name: "API Integration", value: 87 }
  ];
  
  return (
    <section id="home" style={{ overflow: 'hidden', position: 'relative' }}>
      <div ref={particlesRef} className="particles-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}></div>
      
      <motion.div 
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div className="intro" style={{ textAlign: 'center', padding: '20px' }}>
          <motion.h1
            variants={itemVariants}
            className="gradient-text"
            style={{
              background: 'linear-gradient(135deg, #d62828 0%, #fcbf49 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginTop: '40px',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              lineHeight: '1.2'
            }}
          >
            Welcome to My Portfolio
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            style={{
              height: '4px',
              width: '80px',
              background: 'linear-gradient(to right, #d62828, #fcbf49)',
              margin: '0 auto 30px',
              borderRadius: '2px'
            }}
          />
          
          <motion.h2 
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              fontWeight: '600',
              marginBottom: '20px',
              color: '#444'
            }}
          >
            Full Stack Developer & Data Analyst
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              maxWidth: '800px',
              margin: '0 auto 30px',
              lineHeight: '1.6'
            }}
          >
            Passionate about creating innovative solutions and delivering high-quality projects
            that transform complex data into intuitive web applications.
          </motion.p>
          
          <motion.div 
            className="tech-stack"
            variants={techStackVariants}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 'clamp(10px, 2vw, 25px)',
              marginTop: '40px',
              marginBottom: '40px'
            }}
          >
            {[
              { icon: FaReact, name: 'React' },
              { icon: FaServer, name: 'Backend' },
              { icon: FaPython, name: 'Python' },
              { icon: FaDatabase, name: 'Databases' },
              { icon: FaChartBar, name: 'Analytics' },
              { icon: FaCode, name: 'Coding' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={iconVariants}
                whileHover="hover"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  margin: '5px',
                  flex: '0 0 calc(33.333% - 20px)',
                  minWidth: '80px',
                  maxWidth: '110px'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 'clamp(45px, 10vw, 60px)',
                  height: 'clamp(45px, 10vw, 60px)',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  color: '#d62828',
                  fontSize: 'clamp(20px, 5vw, 28px)'
                }}>
                  <item.icon />
                </div>
                <span style={{ 
                  fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)', 
                  fontWeight: '600', 
                  color: '#555',
                  textAlign: 'center'
                }}>
                  {item.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            style={{
              marginBottom: '40px',
              width: '100%'
            }}
          >
            <h3 style={{ 
              fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)', 
              textAlign: 'center', 
              marginBottom: '20px',
              color: '#444'
            }}>
              My Expertise
            </h3>
            
            <div style={{ maxWidth: '700px', margin: '0 auto', width: '100%', padding: '0 10px' }}>
              {skills.map((skill, index) => (
                <div key={index} style={{ marginBottom: '15px' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginBottom: '8px', 
                    fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                    fontWeight: '500'
                  }}>
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div style={{ 
                    height: 'clamp(8px, 1.5vw, 10px)', 
                    backgroundColor: '#eee', 
                    borderRadius: '5px', 
                    overflow: 'hidden' 
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ duration: 1, delay: 1.8 + index * 0.1 }}
                      style={{ 
                        height: '100%', 
                        backgroundColor: index % 2 === 0 ? '#d62828' : '#fcbf49',
                        borderRadius: '5px'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="cta-buttons" 
            variants={itemVariants}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 'clamp(10px, 3vw, 20px)',
              margin: '0 auto'
            }}
          >
            <Link to="/projects" style={{ textDecoration: 'none' }}>
              <motion.button 
                className="primary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: 'clamp(10px, 2vw, 15px) clamp(20px, 4vw, 30px)',
                  fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                  backgroundColor: '#d62828',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(214, 40, 40, 0.2)'
                }}
              >
                View Projects
              </motion.button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <motion.button 
                className="secondary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: 'clamp(10px, 2vw, 15px) clamp(20px, 4vw, 30px)',
                  fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                  backgroundColor: 'transparent',
                  color: '#d62828',
                  border: '2px solid #d62828',
                  borderRadius: '5px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;