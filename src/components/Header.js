import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <Link className="logo" to="/">
              <span className="logo-text">Joshua Simon</span>
            </Link>
          </div>
          
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            ☰
          </div>
          
          <nav className="nav">
            <ul className={`nav-list ${mobileMenuOpen ? 'active' : ''}`}>
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${location.pathname === "/" ? "active-link" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/about" 
                  className={`nav-link ${location.pathname === "/about" ? "active-link" : ""}`}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/projects" 
                  className={`nav-link ${location.pathname === "/projects" ? "active-link" : ""}`}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/contact" 
                  className={`nav-link ${location.pathname === "/contact" ? "active-link" : ""}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      <style jsx>{`
        .header {
          background-color: #1A4B84;
          padding: 15px 0;
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 1000;
          transition: background-color 0.3s ease;
          min-height: 60px;
          display: flex;
          align-items: center;
        }
        
        .header.scrolled {
          background-color: rgba(26, 75, 132, 0.95);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          position: relative;
        }
        
        .logo-container {
          display: flex;
          align-items: center;
        }
        
        .logo {
          text-decoration: none;
        }
        
        .logo-text {
          color: #F39C12;
          font-weight: bold;
          font-size: 1.5rem;
          letter-spacing: 1px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          display: inline-block;
        }
        
        .mobile-menu-toggle {
          display: none;
          cursor: pointer;
          font-size: 1.5rem;
          color: white;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        
        .nav-list {
          display: flex;
          align-items: center;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .nav-item {
          margin: 0 10px;
        }
        
        .nav-link {
          color: #FFFFFF;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          position: relative;
          padding: 5px 0;
          transition: color 0.3s ease;
          display: inline-block;
        }
        
        .nav-link.active-link {
          color: #F39C12;
        }
        
        /* Mobile styles */
        @media (max-width: 768px) {
          .header {
            min-height: 70px;
          }
          
          .mobile-menu-toggle {
            display: block;
            padding: 10px;
            z-index: 1001;
          }
          
          .nav {
            position: static;
            width: 100%;
          }
          
          .nav-list {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background-color: #1A4B84;
            flex-direction: column;
            align-items: flex-start;
            padding: 0;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          
          .nav-list.active {
            max-height: 300px;
            opacity: 1;
            padding: 15px 0;
          }
          
          .nav-item {
            width: 100%;
            margin: 0;
            text-align: left;
          }
          
          .nav-link {
            display: block;
            padding: 12px 20px;
            font-size: 1.1rem;
            width: 100%;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;