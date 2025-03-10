// components/Contact.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Importing images
import linkedinIcon from '../Assets/Images/linkedin-icon.png';
import githubIcon from '../Assets/Images/github-icon.png';
import instagramIcon from '../Assets/Images/instagram-icon.png';
// Import the resume PDF
import resumePDF from '../Assets/pdf/Joshoua Simon Resume.pdf';

const Contact = () => {
  const [hovered, setHovered] = useState(null);

  // Dynamic card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      y: -10,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  // Social media hover animations
  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      transition: { duration: 0.3, type: 'spring', stiffness: 300 }
    },
    tap: { scale: 0.9 }
  };

  // Contact item hover animations
  const contactItemVariants = {
    hover: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      x: 5,
      transition: { duration: 0.2 }
    }
  };

  // Text animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.5 + (i * 0.1),
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 0.9,
        duration: 0.5,
        type: 'spring',
        stiffness: 200
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: '0 8px 25px rgba(79, 172, 254, 0.5)',
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: '80px 20px', // Reduced top/bottom padding, added horizontal padding
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '100vh', // Ensure minimum height for better mobile experience
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      {/* Animated background elements */}
      <motion.div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.05) 70%)',
          filter: 'blur(80px)',
          top: '10%',
          left: '5%',
          zIndex: 0
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.08) 0%, rgba(79, 172, 254, 0.03) 70%)',
          filter: 'blur(60px)',
          bottom: '10%',
          right: '10%',
          zIndex: 0
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />

      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 1,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto' 
      }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            textAlign: 'center', 
            marginBottom: '50px', // Reduced spacing for mobile
            padding: '0 15px' // Added horizontal padding for smaller screens
          }}
        >
          <motion.h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)', // Responsive font size
              fontWeight: 800,
              background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '25px',
              letterSpacing: '1px',
              wordBreak: 'break-word' // Prevent overflow on very small screens
            }}
          >
            Get in Touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '120px' }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              height: '4px',
              background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
              margin: '0 auto',
              borderRadius: '2px'
            }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              color: '#94a3b8',
              fontSize: 'clamp(0.9rem, 4vw, 1.1rem)', // Responsive font size
              maxWidth: '600px',
              margin: '25px auto 0',
              lineHeight: 1.6,
              padding: '0 10px' // Add padding for text on small screens
            }}
          >
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </motion.p>
        </motion.div>

        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            margin: '0 auto'
          }}
        >
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            style={{
              background: 'rgba(30, 41, 59, 0.8)',
              backdropFilter: 'blur(15px)',
              borderRadius: '24px',
              padding: 'clamp(25px, 5vw, 50px)', // Responsive padding
              width: '100%',
              maxWidth: '650px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
              position: 'relative',
              margin: '0 15px' // Add margin to prevent card touching screen edges
            }}
          >
            {/* Glassmorphism highlight effect */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(to right, #4facfe, transparent)',
              opacity: 0.7
            }} />
            
            <motion.div
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              style={{
                textAlign: 'center',
                marginBottom: '40px'
              }}
            >
              <h3 style={{
                fontSize: 'clamp(1.5rem, 5vw, 2rem)', // Responsive font size
                fontWeight: 700,
                marginBottom: '15px',
                background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Let's Connect
              </h3>
              <p style={{ 
                color: '#94a3b8', 
                fontSize: 'clamp(0.9rem, 4vw, 1.1rem)', // Responsive font size
                lineHeight: 1.6
              }}>
                Feel free to reach out for collaborations or inquiries
              </p>
            </motion.div>

            <div style={{ marginBottom: '40px' }}>
              {/* Phone Contact Item */}
              <motion.div 
                variants={contactItemVariants}
                whileHover="hover"
                custom={1}
                initial="hidden"
                animate="visible"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                  padding: 'clamp(12px, 3vw, 18px)', // Responsive padding
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHovered('phone')}
                onMouseLeave={() => setHovered(null)}
              >
                <motion.div 
                  animate={{
                    scale: hovered === 'phone' ? 1.1 : 1,
                    backgroundColor: hovered === 'phone' 
                      ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' 
                      : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: 'clamp(40px, 8vw, 48px)', // Responsive size
                    height: 'clamp(40px, 8vw, 48px)', // Responsive size
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 'clamp(15px, 3vw, 25px)', // Responsive margin
                    boxShadow: '0 4px 15px rgba(79, 172, 254, 0.4)',
                    flexShrink: 0 // Prevent icon from shrinking
                  }}
                >
                  {/* Phone Icon */}
                  <motion.svg 
                    animate={{ rotate: hovered === 'phone' ? 10 : 0 }}
                    transition={{ duration: 0.3 }}
                    width="22" 
                    height="22" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  >
                    <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3746C21.0391 21.7497 20.5099 21.9604 19.96 21.96C17.4936 21.7896 15.1158 21.0374 13 19.77C10.9752 18.5843 9.22025 16.8294 8.03454 14.8047C6.76731 12.6898 6.01507 10.3128 5.84 7.84C5.83972 7.29157 6.04957 6.76387 6.42394 6.3897C6.79831 6.01552 7.3261 5.80494 7.875 5.80001H10.875C11.3463 5.79636 11.8022 5.97477 12.1518 6.29934C12.5015 6.6239 12.7162 7.06906 12.75 7.54C12.8153 8.49084 13.0252 9.42522 13.375 10.31C13.515 10.7134 13.5448 11.1479 13.461 11.566C13.3772 11.9841 13.1839 12.3682 12.9 12.67L11.9 13.67C13.0346 15.6939 14.7265 17.3858 16.75 18.52L17.75 17.52C18.0518 17.2361 18.4359 17.0428 18.854 16.959C19.2721 16.8752 19.7066 16.905 20.11 17.045C20.9948 17.3948 21.9292 17.6047 22.88 17.67C23.3542 17.7045 23.8018 17.9218 24.1263 18.2752C24.4508 18.6286 24.628 19.0884 24.62 19.56L22 16.92Z" fill="white"/>
                  </motion.svg>
                </motion.div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden' // Prevent text overflow
                }}>
                  <motion.span 
                    custom={2}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                      fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)', // Responsive font size
                      color: '#94a3b8',
                      marginBottom: '6px',
                      fontWeight: 500
                    }}
                  >
                    Phone
                  </motion.span>
                  <motion.a 
                    custom={3}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    href="tel:+917389597240" 
                    style={{
                      color: hovered === 'phone' ? '#4facfe' : '#ffffff',
                      fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', // Responsive font size
                      textDecoration: 'none',
                      fontWeight: 600,
                      transition: 'color 0.3s ease',
                      whiteSpace: 'nowrap', // Keep text from wrapping
                      overflow: 'hidden',
                      textOverflow: 'ellipsis' // Show ellipsis if text overflows
                    }}
                  >
                    +91 7389597240
                  </motion.a>
                </div>
                <motion.div 
                  animate={{ x: hovered === 'phone' ? 10 : 0, opacity: hovered === 'phone' ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    marginLeft: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L16 12L9 19" stroke="#4facfe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </motion.div>

              {/* Email Contact Item */}
              <motion.div 
                variants={contactItemVariants}
                whileHover="hover"
                custom={4}
                initial="hidden"
                animate="visible"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                  padding: 'clamp(12px, 3vw, 18px)', // Responsive padding
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHovered('email')}
                onMouseLeave={() => setHovered(null)}
              >
                <motion.div 
                  animate={{
                    scale: hovered === 'email' ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: 'clamp(40px, 8vw, 48px)', // Responsive size
                    height: 'clamp(40px, 8vw, 48px)', // Responsive size
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 'clamp(15px, 3vw, 25px)', // Responsive margin
                    boxShadow: '0 4px 15px rgba(79, 172, 254, 0.4)',
                    flexShrink: 0 // Prevent icon from shrinking
                  }}
                >
                  {/* Email Icon */}
                  <motion.svg 
                    animate={{ rotate: hovered === 'email' ? 10 : 0 }}
                    transition={{ duration: 0.3 }}
                    width="22" 
                    height="22" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  >
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white"/>
                  </motion.svg>
                </motion.div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden' // Prevent text overflow
                }}>
                  <motion.span 
                    custom={5}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                      fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)', // Responsive font size
                      color: '#94a3b8',
                      marginBottom: '6px',
                      fontWeight: 500
                    }}
                  >
                    Email
                  </motion.span>
                  <motion.a 
                    custom={6}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    href="mailto:simonjoshoua23@gmail.com" 
                    style={{
                      color: hovered === 'email' ? '#4facfe' : '#ffffff',
                      fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', // Responsive font size
                      textDecoration: 'none',
                      fontWeight: 600,
                      transition: 'color 0.3s ease',
                      whiteSpace: 'nowrap', // Keep on one line on smaller screens
                      overflow: 'hidden',
                      textOverflow: 'ellipsis' // Show ellipsis if text overflows
                    }}
                  >
                    simonjoshoua23@gmail.com
                  </motion.a>
                </div>
                <motion.div 
                  animate={{ x: hovered === 'email' ? 10 : 0, opacity: hovered === 'email' ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    marginLeft: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L16 12L9 19" stroke="#4facfe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </motion.div>
            </div>

            <motion.h4
              custom={7}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', // Responsive font size
                fontWeight: 600,
                color: '#cbd5e1',
                textAlign: 'center',
                marginBottom: '20px',
                letterSpacing: '0.5px'
              }}
            >
              CONNECT WITH ME
            </motion.h4>

            <motion.div
              custom={8}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'clamp(15px, 3vw, 25px)', // Responsive gap
                marginBottom: '40px'
              }}
            >
              <motion.a
                href="https://www.linkedin.com/in/joshoua-simon-319718251/"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                style={{
                  width: 'clamp(45px, 8vw, 55px)', // Responsive size
                  height: 'clamp(45px, 8vw, 55px)', // Responsive size
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.07)',
                  borderRadius: '50%',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
                }}
              >
                <img 
                  src={linkedinIcon} 
                  alt="LinkedIn Icon" 
                  style={{
                    width: 'clamp(20px, 5vw, 26px)', // Responsive size
                    height: 'clamp(20px, 5vw, 26px)', // Responsive size
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              </motion.a>

              <motion.a
                href="https://github.com/Joshoua1"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                style={{
                  width: 'clamp(45px, 8vw, 55px)', // Responsive size
                  height: 'clamp(45px, 8vw, 55px)', // Responsive size
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.07)',
                  borderRadius: '50%',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
                }}
              >
                <img 
                  src={githubIcon} 
                  alt="GitHub Icon" 
                  style={{
                    width: 'clamp(20px, 5vw, 26px)', // Responsive size
                    height: 'clamp(20px, 5vw, 26px)', // Responsive size
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/joshouasimon/"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                style={{
                  width: 'clamp(45px, 8vw, 55px)', // Responsive size
                  height: 'clamp(45px, 8vw, 55px)', // Responsive size
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.07)',
                  borderRadius: '50%',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
                }}
              >
                <img 
                  src={instagramIcon} 
                  alt="Instagram Icon" 
                  style={{
                    width: 'clamp(20px, 5vw, 26px)', // Responsive size
                    height: 'clamp(20px, 5vw, 26px)', // Responsive size
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              </motion.a>
            </motion.div>

            <motion.a
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block' }}
              download="Joshoua Simon Resume.pdf"
            >
              <button style={{
                display: 'flex',
                width: '100%',
                padding: 'clamp(15px, 4vw, 18px) clamp(20px, 5vw, 30px)', // Responsive padding
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', // Responsive font size
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 5px 20px rgba(79, 172, 254, 0.3)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px'
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download Resume
              </button>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;