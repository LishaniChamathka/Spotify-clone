import React from 'react'
import './Playlists.css'
import playlist1 from '../../Images/playlist1.jpg'
import playlist2 from '../../Images/playlist2.jpg'
import playlist3 from '../../Images/playlist3.jpg'
import playlist4 from '../../Images/playlist4.jpg'
import playlist5 from '../../Images/playlist5.jpg'
import playlist6 from '../../Images/playlist6.jpg'
import Navbar from '../Navbar/Navbar'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import playButton from '../../Images/play-button.png'
import Footer from '../Footer/Footer'


function Playlists() {
    const playlists = [
        { name: "Who's now and", role: "next in pop. Cover:...", image:  playlist1 },
        { name: "Soft instrumental", role: "Jazz for all your act...", image:  playlist2 },
        { name: "Soothing piano and ", role: "strings to help you...", image:  playlist3 },
        { name: "Chill out to the", role: "sweetest soul songs...", image:  playlist4 },
        { name: "chill beats, lofi vibes,", role: "new tracks every we...", image:  playlist5 },
        { name: "The 50 best from the", role: "of music. Always fre...", image:  playlist6 },
        { name: "Who's now and", role: "next in pop. Cover:...", image:  playlist1 },
        { name: "Soft instrumental", role: "Jazz for all your act...", image:  playlist2 },
        { name: "Soothing piano and ", role: "strings to help you...", image:  playlist3 },
        { name: "Chill out to the", role: "sweetest soul songs...", image:  playlist4 },
        { name: "chill beats, lofi vibes,", role: "new tracks every we...", image:  playlist5 },
        { name: "The 50 best from the", role: "of music. Always fre...", image:  playlist6 },
      ];

  return (
    <div className="artist-page">
        <Leftsidebar resetOnPageLoad={false} />
        <div className="artist-content">
            <Navbar/>
            <div className="playlist-section">
                <p className='playlist-title'>Playlists from our Editors</p>
                <div className="artists">
                {playlists.map((artist, index) => (
                    <div key={index} className="playlist">
                    <img src={artist.image} className="playlist-image"/>
                    <img src={playButton} className="play-icon"/>
                    <h3>{artist.name}</h3>
                    <p>{artist.role}</p>
                    </div>
                ))}
                </div>
                <Footer/>
            </div>
        </div>
     </div>
  )
}

export default Playlists