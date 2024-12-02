import React, { useState, useEffect } from 'react';
import './Leftsidebar.css'
import { TbWorld } from "react-icons/tb";
import { BiLibrary } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Leftsidebar({ resetOnPageLoad  = true }) {
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    if (resetOnPageLoad) {
      // Ensure sidebar is expanded by default
      setIsExpanded(true);
    }
  }, [resetOnPageLoad]);

  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="library-header">
        <div className="library-title">
          <BiLibrary className='library-icon'/>
        </div>
        <div className='title-area'>
          <p className='librarry-title'>Your Library</p>
        </div>
        <button className="add-button">+</button>
      </div>

      <div className="library-content">
        <div className="library-section">
          <h3>Create your first playlist</h3>
          <p>It's easy, we'll help you</p>
          <button className="action-button-create" onClick={handleClick}>Create playlist</button>
        </div>
        <div className="library-section">
          <h3>Let's find some podcasts to follow</h3>
          <p>We'll keep you updated on new episodes</p>
          <button className='btn-browse'>
            <Link to='/browse-podcasts' className='action-button-browse'>Browse podcasts</Link>
          </button>

        </div>
      </div>

      <footer className="sidebar-footer">
        <ul className="footer-links">
          <li>Legal</li>
          <li>Safety & Privacy Center</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>About Ads</li>
          <li>Accessibility</li>
        </ul>
        <p className='footer-cooky'>Cookies</p>
        <button className="language-button"><TbWorld className='world-icon'/>English</button>
      </footer>
    </div>
  )
}

export default Leftsidebar