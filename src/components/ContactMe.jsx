import React from 'react';
import gitHubLogo from '../components/images/github-logo.png';
import linkedInLogo from '../components/images/linkedin-logo.png';
import twitterLogo from '../components/images/twitter.png';
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
          <a href="https://github.com/Nithin1729S" target='_blank'><img src={linkedInLogo} alt={props.Alt} /></a>
          <a href="https://twitter.com/Nithin1729S" target='_blank'><img src={twitterLogo} alt={props.Alt} /></a>
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