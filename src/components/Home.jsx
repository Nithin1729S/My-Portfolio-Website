import React, { useState, useEffect } from 'react';
import '../index.css';

function Home() {
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

  const MobileHome = () => (
    <>
      <section id="Home" className="home-section">
        <div style={{marginTop:'250px'}}className="home-div">
          <div className="home-div-p1">
            <p>Hello</p>
          </div>
          <div className="home-div-p2">
            <p>This is Nithin</p>
          </div>
          <div className="home-div-p3">
            <p>IT undergrad at NITK'26</p>
          </div>
        </div>
      </section>
    </>
  );

  const DesktopHome = () => (
    <>
      <section id="Home" className="home-section">
        <div className="home-div">
          <div className="home-div-p1">
            <p>Hello</p>
          </div>
          <div className="home-div-p2">
            <p>This is Nithin</p>
          </div>
          <div className="home-div-p3">
            <p>IT undergrad at NITK'26</p>
          </div>
        </div>
      </section>
    </>
  );

  return isMobile ? <MobileHome /> : <DesktopHome />;
}

export default Home;
