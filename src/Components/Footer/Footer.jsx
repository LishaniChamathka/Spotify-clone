import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <a href='https://www.spotify.com/lk-en/about-us/contact/' className='Company'>About</a>
            <a href='https://www.lifeatspotify.com/' className='Company'>Jobs</a>
            <a href='https://newsroom.spotify.com/' className='Company'>For the Record</a>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Communities</h4>
          <ul>
            <a href='https://artists.spotify.com/home' className='Communities'>For Artists</a>
            <a href='https://developer.spotify.com/' className='Communities'>Developers</a>
            <a href='https://ads.spotify.com/en-US/' className='Communities'>Advertising</a>
            <a href='https://investors.spotify.com/home/default.aspx' className='Communities'>Investors</a>
            <a href='https://spotifyforvendors.com/' className='Communities'>Vendors</a>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <a href='https://support.spotify.com/lk-en/' className='Links'>Support</a>
            <a href='https://www.spotify.com/lk-en/free/' className='Links'>Free Mobile App</a>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Spotify Plans</h4>
          <ul>
            <a href='https://www.spotify.com/lk-en/premium/#ref=spotifycom_footer_premium_individual' className='Plans'>Premium Individual</a>
            <a href='https://www.spotify.com/lk-en/duo/#ref=spotifycom_footer_premium_duo' className='Plans'>Premium Duo</a>
            <a href='https://www.spotify.com/lk-en/family/#ref=spotifycom_footer_premium_family' className='Plans'>Premium Family</a>
            <a href='https://www.spotify.com/lk-en/student/#ref=spotifycom_footer_premium_student' className='Plans'>Premium Student</a>
            <a href='https://www.spotify.com/lk-en/free/#ref=spotifycom_footer_free' className='Plans'>Spotify Free</a>
          </ul>
        </div>
        <div className="footer-icons">
          <a href='https://www.instagram.com/spotify/' className='inster-link'><i className="fab fa-instagram"></i></a>
          <a href='https://x.com/spotify' className='twitter-link'><i className="fab fa-twitter"></i></a>
          <a href='https://www.facebook.com/Spotify' className='facebook-link'><i className="fab fa-facebook"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Spotify AB</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer