import React from 'react';
import ExpCard from '../Cards/ExpCard';
import { useState, useEffect } from 'react';
import experience from './data/experience'

function Experience() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const MobileExp = () => (
    <>
      <section id='Experience' className='exp-card-sec flex justify-center'>
      <div className='exp-card-div' style={{ marginLeft: '78px' }}>
        {experience.map((exp)=>(
           <ExpCard {...exp}/>
        ))}
      </div>
    </section>
    </>
  );

  const DesktopExp = () => (
    <>
      <section id='Experience' className='exp-card-sec flex justify-center'>
      <div className='exp-card-div' style={{ marginLeft: '78px' }}>
        {experience.map((exp)=>(
           <ExpCard {...exp}/>
        ))}
      </div>
    </section>
    </>
  );

  return (
    isMobile ? <MobileExp /> : <DesktopExp />
  );
}

export default Experience;
