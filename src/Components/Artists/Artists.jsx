import React from 'react'
import './Artists.css'
import Navbar from '../Navbar/Navbar'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import artist1 from '../../Images/artist1.jpg'
import artist2 from '../../Images/artist2.jpg'
import artist3 from '../../Images/artist3.jpg'
import artist4 from '../../Images/artist4.jpg'
import artist5 from '../../Images/artist5.jpg'
import artist6 from '../../Images/artist6.jpg'
import artist7 from '../../Images/artist7.jpg'
import artist8 from '../../Images/artist8.jpg'
import artist9 from '../../Images/artist9.jpg'
import artist10 from '../../Images/artist10.jpg'
import playButton from '../../Images/play-button.png'
import Footer from '../Footer/Footer'

function Artists() {
    const popularArtists = [
        { name: "Dhayan Hewage", role: "Artist", image: artist1},
        { name: "DILU Beats", role: "Artist", image: artist2},
        { name: "Yuki Navaratne", role: "Artist", image: artist3},
        { name: "Dinesh Gamage", role: "Artist", image: artist4},
        { name: "Mihiran", role: "Artist", image: artist5},
        { name: "Piyath Rajapakse", role: "Artist", image: artist6},
        { name: "Dhanith Sri", role: "Artist", image: artist7},
        { name: "Lo Signore", role: "Artist", image: artist8},
        { name: "Iraj", role: "Artist", image: artist9},
        { name: "Raveen Tharuka", role: "Artist", image: artist10},
        { name: "Mihiran", role: "Artist", image: artist5},
        { name: "Piyath Rajapakse", role: "Artist", image: artist6},
        { name: "Dhayan Hewage", role: "Artist", image: artist1},
        { name: "DILU Beats", role: "Artist", image: artist2},
        { name: "Yuki Navaratne", role: "Artist", image: artist3},
        { name: "Dinesh Gamage", role: "Artist", image: artist4},
        { name: "Mihiran", role: "Artist", image: artist5},
        { name: "Piyath Rajapakse", role: "Artist", image: artist6},
      ];

  return (
    <div className="artist-page">
        <Leftsidebar resetOnPageLoad={false} />
    <div className="artist-content">
        <Navbar/>
        <div className="view-artists">
            <div className="view-section">
                <p className='main-title-artist'>Popular artists</p>
                <div className="all-artists">
                {popularArtists.map((artist, index) => (
                    <div key={index} className="artist-artist">
                        <img src={artist.image} className="artist-artist-image"/>
                        <img src={playButton} className="play-icon"/>
                    <h3>{artist.name}</h3>
                    <p>{artist.role}</p>
                    </div>
                ))}
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  </div>
  )
}

export default Artists