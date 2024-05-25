import React from 'react';



function Navbar(props) {
  return (
    <section id='Navbar'>
      <div id="navigation-bar" className="navbar navbar-expand-lg justify-content-center">
        <ul className="nav nav-pills col col-sm-3 col-md-6 col-lg-5 justify-content-center">
          <li className="nav-item ">
          <div className='Home'>
            <a className="nav-link link-dark" href={"/"}>
              <span className="border border-dark">Resume</span>
            </a>
            </div>
          </li>
          <li className="nav-item ">
            <a className="nav-link link-dark" href={props.SkillsId}>
            <span className="border border-dark">SKILLS</span>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link link-dark" href={props.ProjectsId}>
            <span className="border border-dark">PROJECTS</span>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link link-dark" href={props.ExperienceId}>
            <span className="border border-dark">EXPERIENCE</span>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link link-dark" href={props.ContactMeId}>
            <span className="border border-dark">CONTACT ME</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;