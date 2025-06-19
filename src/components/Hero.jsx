import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 2rem 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

  @media (max-width: 768px) {
    padding: 8rem 1rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const Content = styled.div`
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #2d3436;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    color: #636e72;
    margin-bottom: 2rem;

    @media (max-width: 480px) {
      font-size: 1.25rem;
    }
  }

  p {
    color: #636e72;
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }
`;

const ProfileImage = styled(motion.div)`
  width: 100%;
  height: 400px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 350px;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="about">
      <Container>
        <Content>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Basanagouda Meti</h1>
            <h2>Computer Science Graduate</h2>
            <p>
            Enthusiastic and technically skilled Computer Science graduate seeking an entry-level software engineering role in a technology-driven firm. Proficient in full-stack development using JavaScript (MERN), Python (Django/Flask), and Java, with hands-on experience in building AI-integrated web applications. Passionate about implementing scalable solutions and launching innovative projects using machine learning, computer vision, and microservices architecture. Highly eager to explore and work with emerging technologies, constantly striving to expand technical knowledge and apply it to real-world problems.
            </p>
          </motion.div>
        </Content>
        <ProfileImage
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Add your profile image here */}
          <img src="ME.jpg" alt="Profile" />
        </ProfileImage>
      </Container>
    </HeroSection>
  );
};

export default Hero;