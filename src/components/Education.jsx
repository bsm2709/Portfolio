import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationSection = styled.section`
  padding: 6rem 2rem;
  background: #ffffff;
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

const EducationCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  
  h3 {
    font-size: 1.5rem;
    color: #2d3436;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1.2rem;
    color: #636e72;
    margin-bottom: 1rem;
  }

  p {
    color: #636e72;
    margin-bottom: 0.5rem;
  }

  .percentage {
    font-weight: bold;
    color: #0984e3;
  }
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <Container>
        <SectionTitle>Education</SectionTitle>
        
        <EducationCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>Bachelor of Technology</h3>
          <h4>Acharya Institute of Technology</h4>
          <p>Major in Computer Science and Engineering</p>
          <p>Year: 2022-2026</p>
          <p className="percentage">Cumulative Percentage: 87.50%</p>
        </EducationCard>

        <EducationCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Certifications and Training</h3>
          <ul>
            <li>HTML, CSS (Infosys Spring Board)</li>
            <li>Developing Front-end Apps with React (IBM)</li>
            <li>Devloping AI Applications with Python and Flask (IBM)</li>
            <li>Introduction to Linux Commands and Shell Scripting</li>
            <li>Getting Started with Git and GitHub</li>
          </ul>
        </EducationCard>
      </Container>
    </EducationSection>
  );
};

export default Education;