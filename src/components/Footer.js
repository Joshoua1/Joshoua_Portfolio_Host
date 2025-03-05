// components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Joshoua Simon. All rights reserved.</p>
        <div className="footer-links">
          <motion.a 
            href="#privacy"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Privacy Policy
          </motion.a>
          <motion.a 
            href="#terms"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Terms of Service
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;