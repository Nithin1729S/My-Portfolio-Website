import React from 'react';
import ExpCard from '../Cards/ExpCard';
import isteLogo from '../components/images/istenitk.png';
import ieeeLogo from '../components/images/ieee.png';
import haleLogo from '../components/images/HALE.png';

function Experience() {
  return (
    <section id='Experience' className='exp-card-sec flex justify-center'>
      <div className='exp-card-div' style={{ marginLeft: '78px' }}>
        <ExpCard
          id='1' 
          imgSrc={isteLogo}
          Where="ISTE NITK"
          Time="Nov 2022 - Present"
          Position="Executive Member"
          WorkDone1="-Manage official website of ISTE NITK"
          WorkDone2="-Developed ISTE's Virtual Expo"
        />
        <ExpCard
          id='2'
          imgSrc={haleLogo}
          Where="HALE LAB NITK"
          Time="April 2024 - Present"
          Position="Research Intern"
          WorkDone2="-Worked on Sentiment Analysis of Covid-19"
          WorkDone1="-Participated in IEEE Envision."
          WorkDone3="-Developed RNN based model with 81.1% accuracy."
        />
        <ExpCard
          id='3'
          imgSrc={ieeeLogo}
          Where="IEEE NITK"
          Time="Nov 2022 - April 2023"
          Position="Student Member"
          WorkDone2="-Worked on Sentiment Analysis of Covid-19"
          WorkDone1="-Participated in IEEE Envision."
          WorkDone3="-Developed RNN based model with 81.1% accuracy."
        />
      </div>
    </section>
  );
}

export default Experience;
