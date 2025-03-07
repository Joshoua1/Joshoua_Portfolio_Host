// components/Projects.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import all images directly
import sneakerHubImage from '../Assets/Images/Sneaker.hub.png';
import todoImage from '../Assets/Images/To-do.png';
import agropediaImage from '../Assets/Images/Agropedia.png';
import scholarshipImage from '../Assets/Images/Scholarship.png';
import weatherImage from '../Assets/Images/simple weather.png';
import movieImage from '../Assets/Images/movie.png';
import House from '../Assets/Images/House_price.png';
import diabetes from '../Assets/Images/diabetes.png';

const projects = [
  {
    id: 1,
    title: 'Sneaker Hub',
    description: 'A platform for sneaker enthusiasts to explore and discover the latest trends and releases.',
    image: sneakerHubImage,
    link: 'https://github.com/Joshoua1/Sneaker.hub',
    category: 'web'
  },
  {
    id: 2,
    title: 'Interactive To-Do List',
    description: 'An interactive to-do list application that helps you stay organized and productive.',
    image: todoImage,
    link: 'https://to-do-list-eight-pearl.vercel.app/',
    category: 'web'
  },
  {
    id: 3,
    title: 'Agro Pedia',
    description: 'An agricultural information platform providing resources and knowledge for farmers.',
    image: agropediaImage,
    link: '', // Removed the redirect link
    category: 'web',
    noRedirect: true // Added a flag to identify this project as non-redirecting
  },
  {
    id: 4,
    title: 'Scholarship Portal',
    description: 'A portal connecting students with available scholarship opportunities for their education.',
    image: scholarshipImage,
    link: 'https://github.com/Joshoua1/Scholarship-Portal/tree/main',
    category: 'web'
  },
  {
    id: 5,
    title: 'Simple Weather Application',
    description: 'A basic weather application built with JavaScript and Weather Stack API.',
    image: weatherImage,
    link: 'https://github.com/Joshoua1/Scholarship-Portal/tree/main',
    category: 'app'
  },
  {
    id: 6,
    title: 'Movie Recommendation System',
    description: 'A movie recommendation system built with machine learning algorithms, implemented with Django and deployed with Flask.',
    image: movieImage,
    link: 'https://github.com/Joshoua1/Movie_Recommendation_system',
    category: 'ml'
  },
  {
    id: 7,
    title: 'House Price Prediction',
    description: 'A machine learning model to predict house prices based on various features, implemented with Django and deployed with Flask.',
    image: House,
    link: 'https://github.com/Joshoua1/House-Price-Prediction-',
    category: 'ml'
  },
  {
    id: 8,
    title: 'Diabetes Prediction',
    description: 'A machine learning model to predict diabetes based on various features, implemented with Django and deployed with Flask.',
    image: diabetes,
    link: 'https://github.com/Joshoua1/ML_LAB_2023/tree/main/Decision%20Tree',
    category: 'ml'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Function to handle click on project
  const handleProjectClick = (e, project) => {
    // If the project has the noRedirect flag, prevent default behavior
    if (project.noRedirect) {
      e.preventDefault();
      // You could add alternative behavior here if needed
      // For example, show a modal with more details:
      // setSelectedProject(project);
    }
  };

  return (
    <motion.section 
      id="projects"
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
          Projects
        </motion.h2>

        <motion.div 
          className="filter-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          <motion.button 
            className={filter === 'web' ? 'active' : ''} 
            onClick={() => setFilter('web')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Web Development
          </motion.button>
          <motion.button 
            className={filter === 'app' ? 'active' : ''} 
            onClick={() => setFilter('app')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Applications
          </motion.button>
          <motion.button 
            className={filter === 'ml' ? 'active' : ''} 
            onClick={() => setFilter('ml')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Machine Learning
          </motion.button>
        </motion.div>

        <motion.div 
          className="project-grid"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              className="project"
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              layout
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {project.noRedirect ? (
                // For the Agro Pedia project, use a div instead of an anchor
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} />
                  <motion.div 
                    className="project-info"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <motion.button 
                      className="view-project"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      View Details
                    </motion.button>
                  </motion.div>
                </div>
              ) : (
                // For all other projects, use an anchor as before
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => handleProjectClick(e, project)}
                >
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} />
                    <motion.div 
                      className="project-info"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <motion.button 
                        className="view-project"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        View Project
                      </motion.button>
                    </motion.div>
                  </div>
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
