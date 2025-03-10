import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import skill icons remain the same
import pythonIcon from '../Assets/Images/python-icon.png';
import javaIcon from '../Assets/Images/java-icon.png';
import htmlIcon from '../Assets/Images/html-icon.png';
import cssIcon from '../Assets/Images/css-icon.png';
import phpIcon from '../Assets/Images/php-icon.png';
import mysqlIcon from '../Assets/Images/mysql-icon.png';
import mongodbIcon from '../Assets/Images/mongodb-icon.png';
import figmaIcon from '../Assets/Images/figma-icon.png';
import flaskIcon from '../Assets/Images/flask-icon.png';
import javascriptIcon from '../Assets/Images/javascript.png';
import cIcon from '../Assets/Images/c.png';
import cppIcon from '../Assets/Images/c++.png';
import azureIcon from '../Assets/Images/azure.png';
import synapseIcon from '../Assets/Images/Synapse.png';
import powerbiIcon from '../Assets/Images/Power-BI.png';
import reactIcon from '../Assets/Images/react.png';
import angular from '../Assets/Images/Angular.png';
import node from '../Assets/Images/node.png';
import pandas from '../Assets/Images/Pandas.png';
import numpy from '../Assets/Images/logo.png';
import tensorflow from '../Assets/Images/tensorflow.png';
import sklearn from '../Assets/Images/Scikit_Learn.png';
import Fabric from '../Assets/Images/Microsoft fabric.png';
// Import profile image
import profileImage from '../Assets/Images/about.jpg';
// ... other imports remain the same

// Skill categories remain the same
const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: 'Python', icon: pythonIcon },
      { name: 'Java', icon: javaIcon },
      { name: 'JavaScript', icon: javascriptIcon },
      { name: 'C', icon: cIcon },
      { name: 'C++', icon: cppIcon },
      { name: 'PHP', icon: phpIcon },
    ]
  },
  {
    name: "Web Technologies",
    skills: [
      { name: 'HTML', icon: htmlIcon },
      { name: 'CSS', icon: cssIcon },
      { name: 'React', icon: reactIcon },
      { name: 'Angular', icon: angular },
      { name: 'Node', icon: node },
    ]
  },
  {
    name: "Data & ML",
    skills: [
      { name: 'Pandas', icon: pandas },
      { name: 'Numpy', icon: numpy },
      { name: 'Tensorflow', icon: tensorflow },
      { name: 'Sklearn', icon: sklearn },
    ]
  },
  {
    name: "Databases & Cloud",
    skills: [
      { name: 'MySQL', icon: mysqlIcon },
      { name: 'MongoDB', icon: mongodbIcon },
      { name: 'Azure', icon: azureIcon },
      { name: 'Synapse', icon: synapseIcon },
      { name: 'Power BI', icon: powerbiIcon },
      { name: 'Fabric', icon: Fabric },
    ]
  },
  {
    name: "Tools",
    skills: [
      { name: 'Figma', icon: figmaIcon },
      { name: 'Flask', icon: flaskIcon },
    ]
  }
];

// Updated CSS styles with improved mobile styling
const styles = `
/* About section styles */
#about {
  padding: 100px 0;
  background-color: #f8f9fa;
  marginTop: '3000px',
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-heading {
  position: relative;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-top: 70px;
  margin-bottom: 60px;
  color: #333;
  z-index: 10;
}

.about-heading::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #e74c3c, #3498db);
  border-radius: 2px;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.text-section {
  flex: 1;
}

.text-section p {
  margin-bottom: 20px;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
}

.category-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 30px 0 15px;
  color: #e74c3c;
}

.skills-container {
  margin: 30px 0;
}

.skill-category {
  margin-bottom: 30px;
}

.category-heading {
  color: #e74c3c;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 2px solid rgba(231, 76, 60, 0.2);
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 15px;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.skill-item img {
  height: 30px;
  width: 30px;
  object-fit: contain;
  margin-bottom: 8px;
  z-index: 2;
}

.skill-name {
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  z-index: 2;
}

.about-image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 20px;
}

.profile-image-container {
  position: relative;
  width: 300px;
  height: 300px;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 8px solid white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 2;
}

.image-backdrop {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border-radius: 50%;
  background: linear-gradient(45deg, #e74c3c, #3498db, #2ecc71, #f1c40f);
  opacity: 0.7;
  filter: blur(15px);
  z-index: 1;
}

.tech-badge {
  position: absolute;
  bottom: 0;
  right: 40px;
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 3;
}

.tech-badge img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

/* Responsive styles - improved for mobile */
@media (max-width: 1200px) {
  .container {
    max-width: 900px;
  }
  
  .skill-item {
    width: 75px;
    height: 75px;
  }
  
  .profile-image-container {
    width: 280px;
    height: 280px;
  }
}

@media (max-width: 992px) {
  .about-content {
    flex-direction: column;
  }
  
  .about-image {
    margin-top: 40px;
  }
}

@media (min-width: 992px) {
  .about-content {
    flex-direction: row;
    align-items: center;
  }
}

@media (max-width: 768px) {
  #about {
    padding: 60px 0;
  }
  
  .about-heading {
    font-size: 2.2rem;
    margin-bottom: 40px;
  }
  
  .text-section p {
    font-size: 1rem;
  }
  
  .skills-grid {
    gap: 12px;
    justify-content: flex-start;
  }
  
  .skill-item {
    width: 70px;
    height: 70px;
  }
  
  .profile-image-container {
    width: 250px;
    height: 250px;
  }
}

/* Improved mobile styles */
@media (max-width: 576px) {
  #about {
    padding: 40px 0;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .about-heading {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  .text-section p {
    margin-bottom: 15px;
    font-size: 0.95rem;
  }
  
  .category-title {
    font-size: 1.2rem;
    margin: 20px 0 10px;
  }
  
  .category-heading {
    font-size: 1.1rem;
  }
  
  /* Optimize skill grid for small screens */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
    margin-top: 15px;
  }
  
  .skill-item {
    width: 100%;
    min-width: unset;
    height: auto;
    aspect-ratio: 1/1;
    padding: 8px;
  }
  
  .skill-item img {
    height: 25px;
    width: 25px;
    margin-bottom: 5px;
  }
  
  .skill-name {
    font-size: 0.7rem;
    line-height: 1.2;
  }
  
  .profile-image-container {
    width: 200px;
    height: 200px;
  }
  
  .tech-badge {
    width: 40px;
    height: 40px;
    right: 20px;
  }
  
  .tech-badge img {
    width: 22px;
    height: 22px;
  }
}

@media (max-width: 400px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
  
  .skill-item {
    padding: 6px;
  }
  
  .skill-item img {
    height: 22px;
    width: 22px;
    margin-bottom: 4px;
  }
  
  .skill-name {
    font-size: 0.65rem;
  }
  
  .profile-image-container {
    width: 180px;
    height: 180px;
  }
}
`;

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [headingRef, headingInView] = useInView({
    threshold: 0.05,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Create the style element and append it to the head
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const imageContainerVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 }
    }
  };

  const skillItemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: i * 0.03,
        duration: 0.4,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }),
    hover: { 
      scale: 1.05, 
      y: -5,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 0.7,
      scale: 1,
      transition: { duration: 0.8 }
    },
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        delay: 0.8,
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    hover: { 
      scale: 1.2, 
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.7 }
    },
  };

  return (
    <section id="about">
      <div className="container">
        <motion.h2 
          className="about-heading"
          ref={headingRef}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          About Me
        </motion.h2>
  
        <motion.div 
          className="about-content"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div 
            className="text-section"
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              Hello there! I'm an experienced full stack developer and professional data analyst with a passion for crafting comprehensive digital solutions.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Armed with extensive expertise across the entire development stack, I navigate both frontend and backend realms with confidence, while also extracting powerful insights through advanced data analysis techniques.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Join me on this professional journey as I combine robust application development with data-driven decision making to create seamless, impactful solutions that transform business challenges into opportunities.
            </motion.p>
            
            <motion.div className="skills-container" variants={containerVariants}>
              <motion.h3 variants={itemVariants} className="category-title">
                My Technical Skills
              </motion.h3>
              
              {skillCategories.map((category, categoryIndex) => (
                <motion.div 
                  key={categoryIndex} 
                  className="skill-category"
                  variants={itemVariants}
                >
                  <motion.h4 
                    variants={itemVariants}
                    className="category-heading"
                  >
                    {category.name}
                  </motion.h4>
                  
                  <div className="skills-grid">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="skill-item"
                        custom={categoryIndex * 5 + skillIndex}
                        variants={skillItemVariants}
                        whileHover="hover"
                      >
                        <img src={skill.icon} alt={skill.name} />
                        <span className="skill-name">{skill.name}</span>
                        
                        <motion.div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(135deg, rgba(231,76,60,0.1), rgba(52,152,219,0.1))',
                            borderRadius: '10px',
                            zIndex: 1
                          }}
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            variants={containerVariants}
          >
            <motion.div 
              className="profile-image-container"
              variants={imageContainerVariants}
            >
              <motion.div 
                className="image-backdrop"
                variants={backdropVariants}
                animate="animate"
              />
              
              <img 
                src={profileImage} 
                alt="Profile" 
                className="profile-image"
              />
              
              <motion.div 
                className="tech-badge"
                variants={badgeVariants}
                whileHover="hover"
              >
                <img src={reactIcon} alt="React" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;