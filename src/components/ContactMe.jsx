import React from 'react';
import gitHubLogo from '../components/images/github.svg';
import linkedInLogo from '../components/images/linkedin.svg';
import xLogo from '../components/images/x.svg';
import leetcodeLogo from '../components/images/leetcode.svg';
import codeforcesLogo from '../components/images/cf.svg';
import mailLogo from '../components/images/mail.svg';

function ContactMe(props) {
  return (
    <section id='ContactMe' className='flex justify-center'>
      <div className='card bg-transparent border-0 contact-me' style={{ marginBottom: '20px' }}>
        <div>
          <span>Know More About Me:</span>
        </div>
        <div className='contact-me-links' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2px' }}>
          <a href="mailto:sureshnithin1729@gmail.com" target='_blank' rel="noreferrer"><img src={mailLogo} alt={props.Alt} style={{ width: '50px', height: '50px' }} /></a>
          <a href="https://www.linkedin.com/in/nithin1729s/" target="_blank" rel="noreferrer">
            <img src={linkedInLogo} alt={props.Alt} style={{ width: '32px', height: '32px' }} />
          </a>
          <a href="https://github.com/Nithin1729S" target='_blank' rel="noreferrer" ><img src={gitHubLogo} alt={props.Alt} /></a>
          <a href="https://x.com/Nithin1729S" target='_blank' rel="noreferrer"><img src={xLogo} alt={props.Alt} /></a>
          <a href="https://leetcode.com/u/sureshnithin1729/" target="_blank" rel="noreferrer">
            <img src={leetcodeLogo} alt={props.Alt} style={{ width: '32px', height: '32px' }} />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <img src={codeforcesLogo} alt={props.Alt} style={{ width: '32px', height: '32px' }} />
          </a>
          {/* <a href="https://codeforces.com/profile/sureshnithin1729" target='_blank'><img src={mediumLogo} alt={props.Alt} /></a> */}
        </div>
        <div>
          copyright 2024
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
