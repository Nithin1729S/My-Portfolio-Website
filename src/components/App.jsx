import React from 'react';
import ContactMe from './ContactMe';
import Experience from './Experience';
import Home from './Home';
import Navbar from './Navbar';
import SkillsAndProjects from './SkillsAndProjects';
import index from '../index.css';

function App() {
  return (
    <div>
      <Home />
      <Navbar
        NavbarId="#Navbar"
        HomeId='#Home'
        SkillsId='#SkillsAndProjects1'
        ProjectsId='#SkillsAndProjects'
        ExperienceId='#Experience'
        ContactMeId='#ContactMe'
      />
      <div style={{ marginTop: '500px' }}>
        <SkillsAndProjects />
      </div>        <Experience />
      <ContactMe />

    </div>
  );
}

export default App;
