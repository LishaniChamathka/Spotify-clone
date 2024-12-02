import React from 'react'
import './Maincontent.css'
import Footer from '../Footer/Footer'
import artist1 from '../../Images/artist1.jpg'
import artist2 from '../../Images/artist2.jpg'
import artist3 from '../../Images/artist3.jpg'
import artist4 from '../../Images/artist4.jpg'
import artist5 from '../../Images/artist5.jpg'
import artist6 from '../../Images/artist6.jpg'
import album1 from '../../Images/Gold.jpg'
import album2 from '../../Images/ridma.jpg'
import album3 from '../../Images/madiha.jpg'
import album4 from '../../Images/nubaha.jpg'
import album5 from '../../Images/nohithunata.jpg'
import album6 from '../../Images/four.jpg'
import radio1 from '../../Images/radio1.jpg'
import radio2 from '../../Images/radio2.jpg'
import radio3 from '../../Images/radio3.jpg'
import radio4 from '../../Images/radio4.jpg'
import radio5 from '../../Images/radio5.jpg'
import radio6 from '../../Images/radio6.jpg'
import chart1 from '../../Images/chart1.jpg'
import chart2 from '../../Images/chart2.jpg'
import chart3 from '../../Images/chart3.jpg'
import chart4 from '../../Images/chart4.jpg'
import chart5 from '../../Images/chart5.jpg'
import chart6 from '../../Images/chart6.jpg'
import playlist1 from '../../Images/playlist1.jpg'
import playlist2 from '../../Images/playlist2.jpg'
import playlist3 from '../../Images/playlist3.jpg'
import playlist4 from '../../Images/playlist4.jpg'
import playlist5 from '../../Images/playlist5.jpg'
import playlist6 from '../../Images/playlist6.jpg'
import playButton from '../../Images/play-button.png'

function Maincontent() {
    const popularArtists = [
        { name: "Dhayan Hewage", role: "Artist", image: artist1},
        { name: "DILU Beats", role: "Artist", image: artist2},
        { name: "Yuki Navaratne", role: "Artist", image: artist3},
        { name: "Dinesh Gamage", role: "Artist", image: artist4},
        { name: "Mihiran", role: "Artist", image: artist5},
        { name: "Piyath Rajapakse", role: "Artist", image: artist6},
      ];
    
      const popularAlbums = [
        { title: "Gold", artist: "La Signore", image:  album1},
        { title: "Ridma", artist: "Ridma Weerawardena", image: album2},
        { title: "Maa Dihaa", artist: "DILU Beats", image: album3},
        { title: "Numba Ha", artist: "DILU Beats", image: album4},
        { title: "Nohithunata", artist: "Yuki Navaratne", image: album5},
        { title: "FOUR (Deluxe)", artist: "One Direction", image: album6},
      ];

      const popularRadio = [
        { name: "With Dhanith Sri,", role: "Ridma...", image:  radio1},
        { name: "With Mihiran,", role: "Dhyan Hewage,...", image:  radio2},
        { name: "With Dilu Beats,", role: "Dhyan Hewage,...", image:  radio3},
        { name: "With Damith,", role: "Asanka,Sangeeth...", image:  radio4},
        { name: "With La Signore,", role: "Ranidu,Dhanith S...", image:  radio5},
        { name: "With DJ Janaka,", role: "Madawa,Dilo and...", image:  radio6},
      ];

      const featuredCharts = [
        { name: "Your weekly", role: "update of the mos...", image:  chart1},
        { name: "Your weekly", role: "update of the mos...", image:  chart2},
        { name: "Your daily update", role: "of the most playe...", image:  chart3},
        { name: "Your daily update", role: "of the most playe...", image:  chart4},
        { name: "Your daily update", role: "of the most playe...", image:  chart5},
        { name: "Your daily update", role: "of the most playe...", image:  chart6},
      ];

      const playlists = [
        { name: "Who's now and", role: "next in pop. Cover:...", image:  playlist1 },
        { name: "Soft instrumental", role: "Jazz for all your act...", image:  playlist2 },
        { name: "Soothing piano and ", role: "strings to help you...", image:  playlist3 },
        { name: "Chill out to the", role: "sweetest soul songs...", image:  playlist4 },
        { name: "chill beats, lofi vibes,", role: "new tracks every we...", image:  playlist5 },
        { name: "The 50 best from the", role: "of music. Always fre...", image:  playlist6 },
      ];

  return (
    <div className="main-content">
      <div className="section">
        <a href='/populer-artist' className='main-main'>Popular artists</a>
        <a href='/populer-artist' className='show-link-artist'>Show all</a>
        <div className="artists-popular">
          {popularArtists.map((artist, index) => (
            <div key={index} className="artist">
                <img src={artist.image} className="artist-image"/>
                <img src={playButton} className="play-icon"/>
              <h3 className='artist-name'>{artist.name}</h3>
              <p>{artist.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <a href='/populer-album' className='main-main'>Popular albums and singles</a>
        <a href='/populer-album' className='show-link-album'>Show all</a>
        <div className="albums">
          {popularAlbums.map((album, index) => (
            <div key={index} className="album">
              <img src={album.image} className="album-cover-popular"/>
              <img src={playButton} className="play-icon"/>
              <h3 className='album-title'>{album.title}</h3>
              <p className='album-artist'>{album.artist}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <a href='/populer-radio' className='main-main'>Popular radio</a>
        <a href='/populer-radio' className='show-link-radio'>Show all</a>
        <div className="artists">
          {popularRadio.map((artist, index) => (
            <div key={index} className="radio">
              <img src={artist.image} className="album-cover-popular"/>
              <img src={playButton} className="play-icon"/>
              <h3 className='radio-artistname'>{artist.name}</h3>
              <p>{artist.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <a href='/featured-charts'className='main-main'>Featured Charts</a>
        <a href='/featured-charts' className='show-link-charts'>Show all</a>
        <div className="artists">
          {featuredCharts.map((artist, index) => (
            <div key={index} className="charts">
              <img src={artist.image} className="album-cover-popular"/>
              <img src={playButton} className="play-icon"/>
              <h3>{artist.name}</h3>
              <p>{artist.role}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="section">
        <a href='/playlists' className='main-main'>Playlists from our Editors</a>
        <a href='/playlists' className='show-link-playlists'>Show all</a>
        <div className="artists">
          {playlists.map((artist, index) => (
            <div key={index} className="playlist">
              <img src={artist.image} className="album-cover-popular"/>
              <img src={playButton} className="play-icon"/>
              <h3>{artist.name}</h3>
              <p>{artist.role}</p>
            </div>
          ))}
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default Maincontent