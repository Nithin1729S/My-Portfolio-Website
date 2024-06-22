import React, { useState, useEffect } from 'react';
import ProjectCard from '../Cards/ProjectCard';
import ProjectCardMobile from '../Cards/ProjectCardMobile';
import SkillCard from '../Cards/SkillCard';
import SkillCardMobile from '../Cards/SkillCardMobile';
import machinelearninglogo from '../components/images/machine-learning.png';
import blockchainlogo from '../components/images/blockchain.png';
import idealogo from '../components/images/idea.png';

import skills from './data/skills'
import projects from './data/projects'




function SkillsAndProjects() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [filter, setFilter] = useState(null);

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const filteredProjects = filter ? projects.filter(project => project.id === filter) : projects;

  const MobileSkillsAndProjects = () => (
    <>
      <section id="SkillsAndProjects1">
        <div className="skills-text-main-div">
          <h1 className="gradient-text" style={{ fontSize: '70px' }} >Skills</h1>
        </div>
      </section>
      <div className="grid grid-cols-2 gap-4 pr-9">
        {skills.map((skill, index) => {
          return <div key={index}><SkillCardMobile {...skill} /></div>;
        })}
      </div>
      <section id="SkillsAndProjects">
        <div className="skills-text-main-div">
          <h1 className="gradient-text" style={{ fontSize: '70px' }}>Projects</h1>
        </div>

        {filter && (
          <div className="text-center mt-4 mb-2">
            <h2 className="text-4xl font-bold">{filter.toUpperCase()}</h2>
          </div>
        )}
        <div className="project-card-super grid grid-cols-1 gap-4">
          {filteredProjects.map((project, index) => (
            <div key={index}>
              <ProjectCardMobile {...project} />
            </div>
          ))}
        </div>
      </section>
    </>
  );

  const DesktopSkillsAndProjects = () => (
    <>
      <section id="SkillsAndProjects1">
        <div className="skills-text-main-div">
          <h1 className="gradient-text" >Skills</h1>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pl-5">
        {skills.map((skill, index) => {
          return <div key={index}><SkillCard {...skill} /></div>;
        })}
      </div>
      <section id="SkillsAndProjects">
        <div className="skills-text-main-div" >
          <h1  className="gradient-text" >PROJECTS</h1>
        </div>
        <div className="skills-switch-div">
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <button className="btn btn-lg rounded-left some-div active block mx-2 bg-dark text-white" onClick={() => handleFilterChange("Web Development")}>
              <div id='webdev' className="container">
                <span className="react-logo">
                  <span className="nucleo"></span>
                </span>
              </div>
            </button>
            <button className="btn btn-outline-dark btn-lg rounded-0 some-div active block mx-2 bg-dark text-white  items-center justify-center pl-6" onClick={() => handleFilterChange("machine learning")}>
              <img id='ml' src={machinelearninglogo} alt="Machine-Learning" />
            </button>
            <button className="btn btn-outline-dark btn-lg rounded-0 some-div active block mx-2 bg-dark text-white items-center justify-center pl-10 " onClick={() => handleFilterChange("blockchain")}>
              <img id='blockchain' src={blockchainlogo} alt="Blockchain" />
            </button>
            <button className="btn btn-outline-dark btn-lg rounded-right some-div active flex items-center justify-center" onClick={() => handleFilterChange("miscellaneous")}>
              <img id='misc' src={idealogo} alt="idea" />
            </button>
          </div>
        </div>
        {filter && (
          <div className="text-center mt-4 mb-2">
            <h2 className="text-4xl font-bold">{filter.toUpperCase()}</h2>
          </div>
        )}
        <div className="project-card-super grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-4 md:gap-5">
          {filteredProjects.map((project, index) => (
            <div key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>
    </>
  );

  return isMobile ? <MobileSkillsAndProjects /> : <DesktopSkillsAndProjects />;
};

export default SkillsAndProjects;

