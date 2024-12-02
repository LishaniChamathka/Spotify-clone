import React from 'react'
import './Navbar.css'
import logo from '../../Images/logo.png'
import spotifyLogo from '../../Images/spotify-logo.png'
import { AiOutlineHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { GoArchive } from "react-icons/go";

function Navbar() {
  return (
    <div className='top-nav-bar'>
      <a href='/'>
        <img src={spotifyLogo} alt='logo' className='logo' />
      </a>
     
      <div className="nav-links">
        {/* <button className="icon-button">
          <i className="home-icon"></i>
        </button> */}
        <a href="/" className="home-link">
          <AiOutlineHome className="home-icon" />
        </a>
        {/* <div className="search-bar">
          <i className="search-icon"></i>
          <input type="text" placeholder="What do you want to play?" />
          <div className="divider-line"></div>
        </div>
        <button className="icon-button">
          <i className="collection-icon"></i>
        </button> */}
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="search-input"
          />
          <div className="divider"></div>
          <GoArchive className="game-icon" />
        </div>
      </div>

      <div className="auth-buttons">
        <button className="signup-button">Sign up</button>
        <button className="login-button">Log in</button>
      </div>

    </div>
  )
}

export default Navbar