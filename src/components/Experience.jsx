import React from 'react';
import ExpCard from '../Cards/ExpCard';
import isteLogo from '../components/images/istenitk.png';
import ieeeLogo from '../components/images/ieee.png';
import haleLogo from '../components/images/HALE.png';

function Experience() {
  return (
    <section id='Experience' className='exp-card-sec'>
    <div className='exp-card-div'>
        
        {/* <ExpCard 
            id ='2'
            imgSrc = {wecLogo}
            Where = "WEC NITK"
            Time = "Jun 2022 - Present"
            Position = "Student Member"
            WorkDone1 = "-Participated in contests hosted on Kaggle, HackerEarth."
            WorkDone2 = "-Attended KEPs."
        /> */}
        <ExpCard
            id ='1' 
            imgSrc = {isteLogo}
            Where = "ISTE NITK"
            Time = "Nov 2022 - Present"
            Position = "Web Master"
            WorkDone1 = "-Manage official website of ISTE NITK"
            WorkDone2 = "-Developed ISTE's Virtual Expo"
        />
        <ExpCard
            id ='2'
            imgSrc = {haleLogo}
            Where = "HALE LAB NITK"
            Time = "April 2024 - Present"
            Position = "Research Intern"
            WorkDone2 = "-Worked on Sentiment Analysis of Covid-19"
            WorkDone1 = "-Participated in IEEE Envision."
            WorkDone3 = "-Developed RNN based model with 81.1% accuracy."
        />
        <ExpCard
            id ='3'
            imgSrc = {ieeeLogo}
            Where = "IEEE NITK"
            Time = "Feb 2022 - Present"
            Position = "Student Member"
            WorkDone2 = "-Worked on Sentiment Analysis of Covid-19"
            WorkDone1 = "-Participated in IEEE Envision."
            WorkDone3 = "-Developed RNN based model with 81.1% accuracy."
        />
        {/* <ExpCard 
            id ='4'
            imgSrc = {One80dcLogo}
            Where = "180DC NITK"
            Time = "Dec 2022 - Present"
            Position = "Web Master"
            WorkDone1 = "-Developed 180DC NITK's official website"
            WorkDone2 = "-Deploy and manage the website on Hostinger"
        /> */}
    </div>
    </section>
  );
}

export default Experience;