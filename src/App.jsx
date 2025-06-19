import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </AppContainer>
  );
}

export default App;
