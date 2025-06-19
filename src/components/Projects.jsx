import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: #f5f7fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #2d3436;
  margin-bottom: 3rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  .content {
    padding: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
    color: #2d3436;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0 0 1rem 0;
  }

  li {
    color: #636e72;
    margin-bottom: 0.5rem;
    line-height: 1.6;
    padding-left: 1.2rem;
    position: relative;

    &:before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--primary-color);
    }
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .tech-tag {
    background: #e1e8ed;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9rem;
    color: #2d3436;
  }

  .project-links {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .project-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    background: #0984e3;
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    transition: background 0.3s ease;

    &:hover {
      background: #0769b5;
    }

    svg {
      font-size: 1rem;
    }
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "VILLAGE VULNERABILITY RADAR",
      description: [
        "Led the development of an AI-powered Grievance Management System using React, NodeJs and Flask",
        "implementing dual ML models for automated complaint processing and scheme recommendations.",
        "Architected a micro services-based solution integrating modern frontend (React), RESTful APIs (Node.js/Express), and ML inference (Flask), demonstrating end-to-end system design capabilities."
      ],
      techStack: ["React", "Flask","TensorFlow","Pytorch","ResNet18", "Express","Node.js"],
      date: "June 2025",
      github: "https://github.com/bsm2709/village-vulnerability-radar",
      website: "https://village-vulnerability-radar.vercel.app"
    },
    {
      title: "NIRMAAN-AI: CONSTRUCTION PROGRESS MONITORING SYSTEM",
      description: [
        "Engineered a hybrid neural network combining visual data for construction progress prediction",
        "Integrated project metrics (timeline, budget) to predict construction delays with high accuracy",
        "Built a modern web application using React and Flask architecture",
        "Implemented real-time image processing and prediction capabilities through RESTful APIs",
        "Utilized TensorFlow and OpenCV for advanced computer vision tasks"
      ],
      techStack: ["React","Flask","Tensorflow","Python", "OpenCV", "Machine Learning", "RESTful APIs", "JavaScript"],
      date: "Dec 2025",
      github: "https://github.com/bsm2709/nirmaan-ai",
      website: "https://nirmaan-ai.vercel.app"
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="content">
                <h3>{project.title}</h3>
                <ul>
                  {project.description.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
                <p><strong>Date:</strong> {project.date}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.website} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;