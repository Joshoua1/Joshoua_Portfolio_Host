// components/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Importing images
import linkedinIcon from '../Assets/Images/linkedin-icon.png';
import githubIcon from '../Assets/Images/github-icon.png';
import instagramIcon from '../Assets/Images/instagram-icon.png';
// Import the resume PDF
import resumePDF from '../Assets/pdf/Joshoua Simon Resume.pdf';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
  
    try {
      // Send email using fetch or axios to your backend endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          recipient: 'simonjoshoua23@gmail.com' // Email to send to
        }),
      });
  
      // Log more information
      console.log("Form submission response:", response.status);
      
      try {
        const data = await response.json();
        console.log("Response data:", data);
      } catch (jsonError) {
        console.error("Could not parse JSON response:", jsonError);
      }
  
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>

        <motion.div
          className="contact-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="contact-info">
            <p>Feel free to reach out to discuss potential collaborations or for any inquiries:</p>

            <div className="social-media">
              <motion.a
                href="https://www.linkedin.com/in/joshoua-simon-319718251/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={linkedinIcon} alt="LinkedIn Icon" />
              </motion.a>

              <motion.a
                href="https://github.com/Joshoua1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={githubIcon} alt="GitHub Icon" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/joshouasimon/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={instagramIcon} alt="Instagram Icon" />
              </motion.a>
            </div>

            <motion.a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
              download="Joshoua Simon Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="download-button">Download Resume</button>
            </motion.a>
          </div>

          <motion.div
            className="contact-form"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                disabled={formStatus === 'sending'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>

              {formStatus === 'success' && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Message sent successfully!
                </motion.div>
              )}

              {formStatus === 'error' && (
                <motion.div
                  className="error-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  There was an error sending your message. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;