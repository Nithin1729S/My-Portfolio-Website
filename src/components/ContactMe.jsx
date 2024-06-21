import React from 'react';
import gitHubLogo from '../components/images/github-logo.png';
import linkedInLogo from '../components/images/linkedin-logo.png';
import xLogo from '../components/images/x.png';
import leetcodeLogo from '../components/images/leetcode.png';
import mediumLogo from '../components/images/medium.png';
import codeforcesLogo from '../components/images/codeforces.png';
import mailLogo from '../components/images/mail.png';

function ContactMe(props) {
  return (
    <section id='ContactMe' className='flex justify-center'>
      <div className='card bg-transparent border-0 contact-me' style={{ marginBottom: '20px' }}>
        <div>
          <span>Know More About Me:</span>
        </div>
        <div className='contact-me-links' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2px' }}>
          <a href="mailto:sureshnithin1729@gmail.com" target='_blank'><img src={mailLogo} alt={props.Alt} /></a>
          <a href="https://www.linkedin.com/in/nithin1729s/" target='_blank'><img src={linkedInLogo} alt={props.Alt} /></a>
          <a href="https://github.com/Nithin1729S" target='_blank'><img src={gitHubLogo} alt={props.Alt} /></a>
          <a href="https://x.com/Nithin1729S" target='_blank'><img src={xLogo} alt={props.Alt} /></a>
          <a href="https://leetcode.com/u/sureshnithin1729/" target='_blank'><img src={leetcodeLogo} alt={props.Alt} /></a>
          <a href="https://codeforces.com/profile/sureshnithin1729" target='_blank'><img src={codeforcesLogo} alt={props.Alt} /></a>
          <a href="https://codeforces.com/profile/sureshnithin1729" target='_blank'><img src={mediumLogo} alt={props.Alt} /></a>
        </div>
        <div>
        copyright 2024
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
