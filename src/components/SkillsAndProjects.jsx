import React, { useState } from 'react';
import ProjectCard from '../Cards/ProjectCard';
import SkillCard from '../Cards/SkillCard';
import githubLogo from '../components/images/github-logo.png';
import linkLogo from '../components/images/link.png';
import liveLogo from '../components/images/live.png';
import externalLinkLogo from '../components/images/external-link.png';
import androidFull from '../components/images/androidFull.png';
import java from '../components/images/java.png';
import firebase from '../components/images/firebase_google.png';
import python from '../components/images/python.png';
import pyTorch from '../components/images/pytorch.png';
import tailwindcss from '../components/images/tailwindcss.png';
import mongodb from '../components/images/mongodb.png';
import nodejs from '../components/images/nodejs.png';
import react from '../components/images/react.png';
import machinelearninglogo from '../components/images/machine-learning.png';
import blockchainlogo from '../components/images/blockchain.png';
import idealogo from '../components/images/idea.png';


function SkillsAndProjects() {
  const [filter, setFilter] = useState(null);

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const projects = [
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
      id: "machine learning",
      title: "Image Style Transfer",
      desc: "Performed Sentiment Analysis on Covid-19",
      link: "https://docs.google.com/document/d/1c1YdVv_EwczIVUHz0x3YKcf7-zOtPTfOO3hjqqB0ZiE/edit?usp=sharing",
      imgSrc: githubLogo,
      imgSrc1: liveLogo,
      alt: "Link Logo",
      ts1: python,
      wts1: "python",
      ts2: pyTorch,
      wts2: "pyTorch"
    },
    {
      id: "blockchain",
      title: "Web3 Vault Dapp",
      desc: "A Fullstack Event Management Application",
      link: "https://github.com/pranav-salunkhe/wwwE",
      imgSrc: githubLogo,
      imgSrc1: liveLogo,
      alt: "External Link Logo",
      ts1: tailwindcss,
      wts1: "tailwindcss",
      ts2: mongodb,
      wts2: "mongodb",
      ts3: nodejs,
      wts3: "nodejs",
      ts4: react,
      wts4: "react"
    },
    {
      id: "Web Development",
      title: "Chatroom",
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
      ts3: firebase,
      wts3: "firebase"
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


  const filteredProjects = filter ? projects.filter(project => project.id === filter) : projects;

  return (
    <>

      <section id="SkillsAndProjects1">
        <div className="skills-text-main-div">
        <h1 class="gradient-text">Skills</h1>
                </div>
      </section>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pl-5">
        <div>
          <SkillCard
            title={"C++"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"Python"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"Java"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"Solidity"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"OOPS"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"Machine Learning"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"BlockChain"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"Cryptography"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"C++"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"C++"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"C++"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"C++"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"C++"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"C++"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"C++"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"C++"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"C++"}
            link={"jo"}
            imgSrc={java}
          />
        </div>
        <div>
          <SkillCard
            title={"C++"}
            link={"jo"}
            imgSrc={java}
          />
        </div>


      </div>









      <section id="SkillsAndProjects">
        <div className="skills-text-main-div">
          <h1 className="gradient-text">PROJECTS</h1>
        </div>

        <div className="skills-switch-div">
          <div className="btn-group btn-group-toggle" data-toggle="buttons" >
            <button className="btn btn-lg rounded-left some-div active block mx-2 bg-dark text-white " onClick={() => handleFilterChange("Web Development")}>
              <div id='webdev-pro' className="container">
                <span className="react-logo">
                  <span className="nucleo"></span>
                </span>
              </div>
            </button>
            <button className="btn btn-outline-dark btn-lg rounded-0 some-div active block mx-2 bg-dark text-white flex items-center justify-center" onClick={() => handleFilterChange("machine learning")}>
              <img id='machineLearning-pro' src={machinelearninglogo} alt="Machine-Learning" />
            </button>
            <button className="btn btn-outline-dark btn-lg rounded-0 some-div active block mx-2 bg-dark text-white flex items-center justify-center" onClick={() => handleFilterChange("blockchain")}>
              <img id='android-pro' src={blockchainlogo} alt="Blockchain" />
            </button>
            <button className="btn btn-outline-dark btn-lg rounded-right some-div active flex items-center justify-center" onClick={() => handleFilterChange("miscellaneous")}>
              <img id='android-pro' src={idealogo} alt="idea" />
            </button>
          </div>
        </div>

        {filter && (
          <div className="text-center mt-4 mb-2">
            <h2 className="text-4xl font-bold">{filter.toUpperCase()}</h2>
          </div>
        )}

        <div class="project-card-super grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-4 md:gap-5">
          {filteredProjects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                title={project.title}
                desc={project.desc}
                link={project.link}
                imgSrc={project.imgSrc}
                imgSrc1={project.imgSrc1}
                alt={project.alt}
                ts1={project.ts1}
                wts1={project.wts1}
                ts2={project.ts2}
                wts2={project.wts2}
                ts3={project.ts3}
                wts3={project.wts3}
                ts4={project.ts4}
                wts4={project.wts4}
              />
            </div>
          ))}
        </div>
      </section>



    </>
  );
}

export default SkillsAndProjects;


