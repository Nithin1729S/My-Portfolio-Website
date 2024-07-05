import React from 'react';



function Navbar(props) {
  return (
    <section id='Navbar'>
      <div id="navigation-bar" className="navbar navbar-expand-lg justify-content-center">
        <ul className="nav nav-pills col col-sm-3 col-md-6 col-lg-5 justify-content-center">
          <li className="nav-item ">
            <div className='Home'>
              <a className="nav-link link-dark" href="https://drive.google.com/file/d/1H7ZaD7siI3BBSeEX08JqgOf1RNmICwZw/view?usp=sharing" target="_blank" rel="noreferrer">              <span className="border border-dark transition duration-300 ease-in-out hover:border-gray-700 hover:text-white hover:bg-black hover:scale-105">Resume</span>
              </a>
            </div>
          </li>
          <li className="nav-item ">
            <a className="nav-link link-dark" href={props.SkillsId}>
              <span className="border border-dark transition duration-300 ease-in-out hover:border-gray-700 hover:text-white hover:bg-black hover:scale-105">SKILLS</span>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link link-dark" href={props.ProjectsId}>
              <span className="border border-dark transition duration-300 ease-in-out hover:border-gray-700 hover:text-white hover:bg-black hover:scale-105">PROJECTS</span>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link link-dark" href={props.ExperienceId}>
              <span className="border border-dark transition duration-300 ease-in-out hover:border-gray-700 hover:text-white hover:bg-black hover:scale-105">EXPERIENCE</span>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link link-dark" href={props.ContactMeId}>
              <span className="border border-dark transition duration-300 ease-in-out hover:border-gray-700 hover:text-white hover:bg-black hover:scale-105">CONTACT ME</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;