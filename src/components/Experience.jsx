import React from 'react';
import ExpCard from '../Cards/ExpCard';
import isteLogo from '../components/images/istenitk.png';
import ieeeLogo from '../components/images/ieee.png';
import haleLogo from '../components/images/HALE.png';


function Experience() {
  const experience=[
    {
      id:'1',
      imgSrc:isteLogo,
      Where:"ISTE NITK",
      Time:"Nov 2022 - Present",
      Position:"Executive Member",
      WorkDone1:"-Manage official website of ISTE NITK",
      WorkDone2:"-Developed ISTE's Virtual Expo"
    },
    {
      id:'2',
      imgSrc:haleLogo,
      Where:"HALE Labs NITK",
      Time:"April 2024 - Present",
      Position:"Research Intern",
      WorkDone1:"-Manage official website of ISTE NITK",
      WorkDone2:"-Developed ISTE's Virtual Expo"
    },
    {
      id:'1',
      imgSrc:ieeeLogo,
      Where:"IEEE NITK",
      Time:"Nov 2022 - April 2023",
      Position:"Student Member",
      WorkDone1:"-Manage official website of ISTE NITK",
      WorkDone2:"-Developed ISTE's Virtual Expo"
    },
  ]
  return (
    <section id='Experience' className='exp-card-sec flex justify-center'>
      <div className='exp-card-div' style={{ marginLeft: '78px' }}>
        {experience.map((exp)=>(
           <ExpCard {...exp}/>
        ))}
      </div>
    </section>
  );
}

export default Experience;
