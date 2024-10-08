import React from 'react';
import './Module.css';
import { useNavigate } from 'react-router-dom';

const navigate=useNavigate

const handleLoginButton = () => {
    navigate("/login")
}

const Navbar = () => {
  return (
    <header className="header">
      <div className="logoContainer">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/51c0ebb204e772641b721b0705816b92d4b314689f85efa9baf9f969d4de608a?placeholderIfAbsent=true&apiKey=e7dda70c916341879913bab85255224e" className="logo" alt="HomeStay logo" />
        <div className="brandName">HOME STAY</div>
      </div>
      <div className="loginContainer">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec1f1057b72886157acbeb6165c55477b6d4b2d11401f5f0a6ba08de20a3c8c2?placeholderIfAbsent=true&apiKey=e7dda70c916341879913bab85255224e" className="loginIcon" alt="Login icon" />
        <div className="loginText">LOGIN</div>
      </div>
    </header>
  );
};

export default Navbar;