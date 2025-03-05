// components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={scrolled ? 'scrolled' : ''}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.a 
          className="logo" 
          href="/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Joshoua Simon
        </motion.a>
        <nav>
          <ul>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;