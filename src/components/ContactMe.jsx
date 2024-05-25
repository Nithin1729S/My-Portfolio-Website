import React from 'react';
import gitHubLogo from '../components/images/github-logo.png';
import linkedInLogo from '../components/images/linkedin-logo.png';
import xLogo from '../components/images/x.png';
import leetcodeLogo from '../components/images/leetcode.png';
import codeforcesLogo from '../components/images/codeforces.png';


function ContactMe(props) {
  return (
    <section id='ContactMe'>
      <div className='card bg-transparent border-0 contact-me'>
        <div>
          <span>Know More About Me:</span>
        </div>
        <div className='contact-me-links'>
          <a href="https://github.com/Nithin1729S" target='_blank'><img src={gitHubLogo} alt={props.Alt} /></a>
          <a href="https://www.linkedin.com/in/nithin1729s/" target='_blank'><img src={linkedInLogo} alt={props.Alt} /></a>
          <a href="https://x.com/Nithin1729S" target='_blank'><img src={xLogo} alt={props.Alt} /></a>
          <a href="https://leetcode.com/u/sureshnithin1729/" target='_blank'><img src={leetcodeLogo} alt={props.Alt} /></a>
          <a href="https://codeforces.com/profile/sureshnithin1729" target='_blank'><img src={codeforcesLogo} alt={props.Alt} /></a>

        </div>
        <div>
          copyright 2024
        </div>
      </div>
    </section>
  );
}


export default ContactMe;
