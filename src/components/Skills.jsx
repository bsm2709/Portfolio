import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaServer } from 'react-icons/fa';

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.3rem;
    color: #2d3436;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .icon {
    color: #0984e3;
    font-size: 1.5rem;
  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: #636e72;
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:before {
      content: '•';
      color: #0984e3;
      font-weight: bold;
    }
  }
`;

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode className="icon" />,
      skills: ['C', 'Java', 'HTML', 'CSS', 'JavaScript', 'Python']
    },
    {
      title: 'Frameworks & Libraries',
      icon: <FaTools className="icon" />,
      skills: ['React.js', 'Flask', 'TensorFlow', 'Scikit-learn', 'REST APIs','Node.js','Express.js']
    },
    {
      title: 'Databases',
      icon: <FaDatabase className="icon" />,
      skills: [ 'MySQL', 'MongoDB (Basics)']
    },
    {
      title: 'Developer Tools',
      icon: <FaServer className="icon" />,
      skills: ['VS Code', 'IntelliJ IDEA', 'PyCharm', 'Git,GitHub', 'npm', 'Maven/Gradle']
    }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Technical Skills</SectionTitle>
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3>
                {category.icon}
                {category.title}
              </h3>
              <SkillList>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;