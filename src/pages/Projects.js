// components/Projects.js
import React, { useState, useEffect } from 'react';
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

// Inline styles for responsiveness
const styles = {
  projectsSection: {
    padding: '60px 0',
  },
  container: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '2.5rem',
  },
  filterButtons: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: '40px',
  },
  filterButton: {
    padding: '10px 20px',
    backgroundColor: '#f5f5f5',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  },
  activeFilterButton: {
    backgroundColor: '#3498db',
    color: 'white',
  },
  filterToggleContainer: {
    display: 'none',
    marginBottom: '20px',
  },
  filterToggleBtn: {
    width: '100%',
    padding: '12px 20px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '500',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggleIcon: {
    fontSize: '12px',
  },
  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
  },
  projectCard: {
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: 'white',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    height: '100%',
  },
  projectImageContainer: {
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
  },
  projectImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  projectLink: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    height: '100%',
  },
  projectInfo: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center',
  },
  projectTitle: {
    marginTop: '0',
    marginBottom: '10px',
    fontSize: '1.3rem',
  },
  projectDescription: {
    fontSize: '0.9rem',
    marginBottom: '20px',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
  },
  viewProjectBtn: {
    padding: '8px 16px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: '500',
  }
};

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
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [responsiveStyles, setResponsiveStyles] = useState({});

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Update responsive styles based on window width
    updateResponsiveStyles();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  // Update styles based on screen size
  const updateResponsiveStyles = () => {
    let updatedStyles = {};

    if (windowWidth <= 992) {
      updatedStyles = {
        projectGrid: {
          ...styles.projectGrid,
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
        },
        sectionTitle: {
          ...styles.sectionTitle,
          fontSize: '2.2rem',
        }
      };
    }

    if (windowWidth <= 768) {
      updatedStyles = {
        ...updatedStyles,
        filterToggleContainer: {
          ...styles.filterToggleContainer,
          display: 'block',
        },
        filterButtons: {
          ...styles.filterButtons,
          display: showMobileFilter ? 'flex' : 'none',
          flexDirection: 'column',
          width: '100%',
        },
        filterButton: {
          ...styles.filterButton,
          width: '100%',
          textAlign: 'left',
          borderRadius: '8px',
          padding: '12px 15px',
        },
        projectGrid: {
          ...styles.projectGrid,
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        },
        projectInfo: {
          ...styles.projectInfo,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '15px',
          opacity: 1, // Always visible on mobile
        },
        projectDescription: {
          ...styles.projectDescription,
          WebkitLineClamp: '2',
          fontSize: '0.85rem',
        },
        sectionTitle: {
          ...styles.sectionTitle,
          fontSize: '2rem',
          marginBottom: '30px',
        }
      };
    }

    if (windowWidth <= 576) {
      updatedStyles = {
        ...updatedStyles,
        projectGrid: {
          ...styles.projectGrid,
          gridTemplateColumns: '1fr',
          gap: '25px',
        },
        projectImage: {
          ...styles.projectImage,
          height: '180px',
        },
        projectTitle: {
          ...styles.projectTitle,
          fontSize: '1.2rem',
        },
        container: {
          ...styles.container,
          width: '92%',
        }
      };
    }

    setResponsiveStyles(updatedStyles);
  };

  // Get the correct style based on responsive state
  const getStyle = (styleName) => {
    return responsiveStyles[styleName] || styles[styleName];
  };

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

  // Toggle mobile filter dropdown
  const toggleMobileFilter = () => {
    setShowMobileFilter(!showMobileFilter);
  };

  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={getStyle('projectsSection')}
    >
      <div style={getStyle('container')}>
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={getStyle('sectionTitle')}
        >
          Projects
        </motion.h2>

        {/* Mobile filter toggle button */}
        <motion.div 
          style={getStyle('filterToggleContainer')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.button 
            style={getStyle('filterToggleBtn')}
            onClick={toggleMobileFilter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter === 'all' ? 'All Projects' : 
             filter === 'web' ? 'Web Development' : 
             filter === 'app' ? 'Applications' : 'Machine Learning'} 
            <span style={getStyle('toggleIcon')}>{showMobileFilter ? '▲' : '▼'}</span>
          </motion.button>
        </motion.div>

        {/* Desktop and mobile filter buttons */}
        <motion.div 
          style={getStyle('filterButtons')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.button 
            style={{
              ...getStyle('filterButton'), 
              ...(filter === 'all' ? styles.activeFilterButton : {})
            }}
            onClick={() => {
              setFilter('all');
              setShowMobileFilter(false);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          <motion.button 
            style={{
              ...getStyle('filterButton'), 
              ...(filter === 'web' ? styles.activeFilterButton : {})
            }}
            onClick={() => {
              setFilter('web');
              setShowMobileFilter(false);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Web Development
          </motion.button>
          <motion.button 
            style={{
              ...getStyle('filterButton'), 
              ...(filter === 'app' ? styles.activeFilterButton : {})
            }}
            onClick={() => {
              setFilter('app');
              setShowMobileFilter(false);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Applications
          </motion.button>
          <motion.button 
            style={{
              ...getStyle('filterButton'), 
              ...(filter === 'ml' ? styles.activeFilterButton : {})
            }}
            onClick={() => {
              setFilter('ml');
              setShowMobileFilter(false);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Machine Learning
          </motion.button>
        </motion.div>

        <motion.div 
          style={getStyle('projectGrid')}
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              style={getStyle('projectCard')}
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              layout
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {project.noRedirect ? (
                // For the Agro Pedia project, use a div instead of an anchor
                <div style={getStyle('projectImageContainer')}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={getStyle('projectImage')} 
                  />
                  <motion.div 
                    style={{
                      ...getStyle('projectInfo'),
                      opacity: windowWidth <= 768 ? 1 : (hoveredProject === project.id ? 1 : 0)
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: windowWidth <= 768 ? 1 : (hoveredProject === project.id ? 1 : 0)
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 style={getStyle('projectTitle')}>{project.title}</h3>
                    <p style={getStyle('projectDescription')}>{project.description}</p>
                    <motion.button 
                      style={getStyle('viewProjectBtn')}
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
                  style={getStyle('projectLink')}
                >
                  <div style={getStyle('projectImageContainer')}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={getStyle('projectImage')} 
                    />
                    <motion.div 
                      style={{
                        ...getStyle('projectInfo'),
                        opacity: windowWidth <= 768 ? 1 : (hoveredProject === project.id ? 1 : 0)
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: windowWidth <= 768 ? 1 : (hoveredProject === project.id ? 1 : 0)
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 style={getStyle('projectTitle')}>{project.title}</h3>
                      <p style={getStyle('projectDescription')}>{project.description}</p>
                      <motion.button 
                        style={getStyle('viewProjectBtn')}
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