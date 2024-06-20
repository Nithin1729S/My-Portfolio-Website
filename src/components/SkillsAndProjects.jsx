import React, { useState,useEffect } from 'react';
import ProjectCard from '../Cards/ProjectCard';
import ProjectCard_M from '../Cards/ProjectCard_m';
import SkillCard from '../Cards/SkillCard';
import SkillCard_M from '../Cards/SkillCard_m';
import githubLogo from '../components/images/github-logo.png';
import liveLogo from '../components/images/live.png';
import androidFull from '../components/images/androidFull.png';
import java from '../components/images/java.png';
import oops from '../components/images/oops.png';
import firebase from '../components/images/firebase_google.png';
import tailwind from '../components/images/tailwind.png';
import cpp from '../components/images/cpp.png';
import c from '../components/images/c.png';
import javascript from '../components/images/javascript.png';
import typescript from '../components/images/typescript.png';
import react2 from '../components/images/react2.png';
import metamask from '../components/images/metamask.png';
import express from '../components/images/express.png';
import postman from '../components/images/postman.png';
import node from '../components/images/node.png';
import git from '../components/images/git.png';
import github from '../components/images/github.png';
import mysql from '../components/images/mysql.png';
import html2 from '../components/images/html2.png';
import css2 from '../components/images/css2.png';
import ethereum from '../components/images/ethereum.png';
import solidity from '../components/images/solidity.png';
import postgresql from '../components/images/postgresql.png';
import python from '../components/images/python.png';
import pyTorch from '../components/images/pytorch.png';
import ml from '../components/images/ml.png';
import django from '../components/images/django.png';
import docker from '../components/images/docker.png';
import flask from '../components/images/flask.png';
import tailwindcss from '../components/images/tailwindcss.png';
import mongodb from '../components/images/mongodb.png';
import nodejs from '../components/images/nodejs.png';
import react from '../components/images/react.png';
import machinelearninglogo from '../components/images/machine-learning.png';
import blockchainlogo from '../components/images/blockchain.png';
import idealogo from '../components/images/idea.png';


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

  const projects = [
    
    {
      id: "machine learning",
      title: "Image Style Transfer Using CNNs",
      desc: "A Flask application that uses neural style transfer to blend content and style images effortlessly",
      link1: "https://github.com/Nithin1729S/Image-Style-Transfer-Using-CNNs.git",
      link2: "https://www.youtube.com/watch?v=6c5A9ZEjpB8",
      imgSrc: githubLogo,
      imgSrc1: liveLogo,
      alt: "Link Logo",
      ts1: python,
      wts1: "python",
      ts2: pyTorch,
      wts2: "pyTorch"
    },
    {
      id: "Web Development",
      title: "Food Ordering Application",
      desc: "An app that helps you locate profs during working hours",
      link: "https://github.com/pranav-salunkhe/ProfFinder",
      imgSrc: githubLogo,
      imgSrc1: liveLogo,
      alt: "GitHub Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase",
      ts4: firebase,
      wts4: "firebase"
    },
    {
      id: "blockchain",
      title: "Web3 Vault Dapp",
      desc: "Decentralized password manager, compiled in Remix IDE and deployed on Sepolia TestNet",
      link1: "https://github.com/Nithin1729S/Web3-Vault-dApp",
      link2: "https://web3vault.vercel.app/",
      imgSrc: githubLogo,
      imgSrc1: liveLogo,
      alt: "External Link Logo",
      ts1: ethereum,
      wts1: "ethereum",
      ts2: react,
      wts2: "react",
      ts3: metamask,
      wts3: "metamask",
      // ts4: react,
      // wts4: "react"
    },
    {
      id: "Web Development",
      title: "AniTalk",
      desc: "An app that helps you locate profs during working hours",
      link: "https://github.com/pranav-salunkhe/ProfFinder",
      imgSrc: githubLogo,
      imgSrc1: liveLogo,
      alt: "GitHub Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "machine learning",
      title: "ml2",
      desc: "An app that helps you locate profs during working hours",
      link: "https://github.com/pranav-salunkhe/ProfFinder",
      imgSrc: githubLogo,
      imgSrc1: liveLogo,
      alt: "GitHub Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "blockchain",
      title: "bc2",
      desc: "An app that helps you locate profs during working hours",
      link: "https://github.com/pranav-salunkhe/ProfFinder",
      imgSrc: githubLogo,
      alt: "GitHub Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "Web Development",
      title: "wd3",
      desc: "An app that helps you locate profs during working hours",
      link: "https://github.com/pranav-salunkhe/ProfFinder",
      imgSrc: githubLogo,
      imgSrc1: liveLogo,
      alt: "GitHub Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase",
      ts4: firebase,
      wts4: "firebase"
    },
    {
      id: "machine learning",
      title: "ml3",
      desc: "An app that helps you locate profs during working hours",
      link: "https://github.com/pranav-salunkhe/ProfFinder",
      imgSrc: githubLogo,
      alt: "GitHub Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "bc3",
      title: "Prof-Finder",
      desc: "An app that helps you locate profs during working hours",
      link: "https://github.com/pranav-salunkhe/ProfFinder",
      imgSrc: githubLogo,
      alt: "GitHub Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "Web Development",
      title: "wd4",
      desc: "An app that helps you locate profs during working hours",
      link: "https://github.com/pranav-salunkhe/ProfFinder",
      imgSrc: githubLogo,
      alt: "GitHub Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "machine learning",
      title: "ml4",
      desc: "An app that helps you locate profs during working hours",
      link: "https://github.com/pranav-salunkhe/ProfFinder",
      imgSrc: githubLogo,
      alt: "GitHub Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    },
    {
      id: "blockchain",
      title: "bc4",
      desc: "An app that helps you locate profs during working hours",
      link: "https://github.com/pranav-salunkhe/ProfFinder",
      imgSrc: githubLogo,
      alt: "GitHub Logo",
      ts1: androidFull,
      wts1: "android",
      ts2: java,
      wts2: "java",
      ts3: firebase,
      wts3: "firebase"
    }
    // Add more projects here
  ];


  const skills = [
    {
      title: 'C',
      imgSrc: c
    },
    {
      title: 'C++',
      imgSrc: cpp
    },
    {
      title: 'Python',
      imgSrc: python
    },
    {
      title: 'Java',
      imgSrc: java
    },
    {
      title: 'Solidity',
      imgSrc: solidity
    },
    {
      title: 'Javascript',
      imgSrc: javascript
    },
    {
      title: 'OOPS',
      imgSrc: oops
    },
    {
      title: 'Machine Learning',
      imgSrc: ml
    },
    {
      title: 'Blockchain',
      imgSrc: ethereum
    },
    {
      title: 'Django',
      imgSrc: django
    },
    {
      title: 'Flask',
      imgSrc: flask
    },
    {
      title: 'HTML',
      imgSrc: html2
    },
    {
      title: 'CSS',
      imgSrc: css2
    },
    {
      title: 'TailwindCSS',
      imgSrc: tailwind
    },
    {
      title: 'MySQL',
      imgSrc: mysql
    },
    {
      title: 'MongoDB',
      imgSrc: mongodb
    },
    {
      title: 'TypeScript',
      imgSrc: typescript
    },
    {
      title: 'React',
      imgSrc: react
    },
    {
      title: 'Express',
      imgSrc: express
    },
    {
      title: 'NodeJS',
      imgSrc: node
    },
    {
      title: 'Git',
      imgSrc: git
    },
    {
      title: 'GitHub',
      imgSrc: github
    },
    {
      title: 'Docker',
      imgSrc: docker
    },
    {
      title: 'Firebase',
      imgSrc: firebase
    },
    {
      title: 'Postman',
      imgSrc: postman
    },
    {
      title: 'PyTorch',
      imgSrc: firebase
    },
    {
      title: 'Postgresql',
      imgSrc: postgresql
    },
    {
      title: 'Tensorflow',
      imgSrc: firebase
    },
    {
      title: 'Tensorflow',
      imgSrc: firebase
    },
    {
      title: 'Tensorflow',
      imgSrc: firebase
    },
    

    // Add more skills here
  ];

  const filteredProjects = filter ? projects.filter(project => project.id === filter) : projects;

  // return (
  //   <>

  //     <section id="SkillsAndProjects1">
  //       <div className="skills-text-main-div">
  //         <h1 class="gradient-text">Skills</h1>
  //       </div>
  //     </section>
  //     <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pl-5">

  //       {skills.map((skill, index) => {
  //         return <div><SkillCard {...skill} /></div>;
  //       })}
  //     </div>


  //     <section id="SkillsAndProjects">
  //       <div className="skills-text-main-div">
  //         <h1 className="gradient-text">PROJECTS</h1>
  //       </div>

  //       <div className="skills-switch-div">
  //         <div className="btn-group btn-group-toggle" data-toggle="buttons" >
  //           <button className="btn btn-lg rounded-left some-div active block mx-2 bg-dark text-white " onClick={() => handleFilterChange("Web Development")}>
  //             <div id='webdev' className="container">
  //               <span className="react-logo">
  //                 <span className="nucleo"></span>
  //               </span>
  //             </div>
  //           </button>
  //           <button className="btn btn-outline-dark btn-lg rounded-0 some-div active block mx-2 bg-dark text-white flex items-center justify-center" onClick={() => handleFilterChange("machine learning")}>
  //             <img id='ml' src={machinelearninglogo} alt="Machine-Learning" />
  //           </button>
  //           <button className="btn btn-outline-dark btn-lg rounded-0 some-div active block mx-2 bg-dark text-white flex items-center justify-center" onClick={() => handleFilterChange("blockchain")}>
  //             <img id='blockchain' src={blockchainlogo} alt="Blockchain" />
  //           </button>
  //           <button className="btn btn-outline-dark btn-lg rounded-right some-div active flex items-center justify-center" onClick={() => handleFilterChange("miscellaneous")}>
  //             <img id='misc' src={idealogo} alt="idea" />
  //           </button>
  //         </div>
  //       </div>

  //       {filter && (
  //         <div className="text-center mt-4 mb-2">
  //           <h2 className="text-4xl font-bold">{filter.toUpperCase()}</h2>
  //         </div>
  //       )}

  //       <div class="project-card-super grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-4 md:gap-5">
  //         {filteredProjects.map((project, index) => (
  //           <div key={index}>
  //             <ProjectCard
  //               {...project}
  //             />
  //           </div>
  //         ))}
  //       </div>
  //     </section>
  //   </>
  // );

  const MobileSkillsAndProjects = () => (
    <>
      <section id="SkillsAndProjects1">
        <div className="skills-text-main-div">
        <h1 className="gradient-text" style={{ fontSize: '70px' }}>Skills</h1>
        </div>
      </section>
      <div className="grid grid-cols-2 gap-4 pr-9">
        {skills.map((skill, index) => {
          return <div key={index}><SkillCard_M {...skill} /></div>;
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
              <ProjectCard_M {...project} />
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
          <h1 className="gradient-text">Skills</h1>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pl-5">
        {skills.map((skill, index) => {
          return <div key={index}><SkillCard {...skill} /></div>;
        })}
      </div>
      <section id="SkillsAndProjects">
        <div className="skills-text-main-div">
          <h1 className="gradient-text">PROJECTS</h1>
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
            <button className="btn btn-outline-dark btn-lg rounded-0 some-div active block mx-2 bg-dark text-white items-center justify-center pl-10 "  onClick={() => handleFilterChange("blockchain")}>
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

