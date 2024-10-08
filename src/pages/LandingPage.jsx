import React from 'react';
import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection';
import SearchBox from '../components/SearchBox';
import '../components/Module.css'

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Navbar />
      <div className="navBarSeparator" />
      <main className="mainContent">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8448172de44c86d835a7993dbbbe63685d04b85aca26937dd8ac8b5ccfe85c7?placeholderIfAbsent=true&apiKey=e7dda70c916341879913bab85255224e" className="backgroundImage" alt="" />
        <div className="contentWrapper">
          <div className="contentColumns">
            <HeroSection />
            <div className="rightColumn">
              <SearchBox />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;