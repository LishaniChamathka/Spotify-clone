import React from 'react'
import './Albums.css'
import album1 from '../../Images/Gold.jpg'
import album2 from '../../Images/ridma.jpg'
import album3 from '../../Images/madiha.jpg'
import album4 from '../../Images/nubaha.jpg'
import album5 from '../../Images/nohithunata.jpg'
import album6 from '../../Images/four.jpg'
import Navbar from '../Navbar/Navbar'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import playButton from '../../Images/play-button.png'
import Footer from '../Footer/Footer'

function Albums() {
    const popularAlbums = [
        { title: "Gold", artist: "La Signore", image:  album1},
        { title: "Ridma", artist: "Ridma Weerawardena", image: album2},
        { title: "Maa Dihaa", artist: "DILU Beats", image: album3},
        { title: "Numba Ha", artist: "DILU Beats", image: album4},
        { title: "Nohithunata", artist: "Yuki Navaratne", image: album5},
        { title: "FOUR (Deluxe)", artist: "One Direction", image: album6},
        { title: "Gold", artist: "La Signore", image:  album1},
        { title: "Ridma", artist: "Ridma Weerawardena", image: album2},
        { title: "Maa Dihaa", artist: "DILU Beats", image: album3},
        { title: "Numba Ha", artist: "DILU Beats", image: album4},
        { title: "Nohithunata", artist: "Yuki Navaratne", image: album5},
        { title: "FOUR (Deluxe)", artist: "One Direction", image: album6},
        { title: "Gold", artist: "La Signore", image:  album1},
        { title: "Ridma", artist: "Ridma Weerawardena", image: album2},
        { title: "Maa Dihaa", artist: "DILU Beats", image: album3},
        { title: "Numba Ha", artist: "DILU Beats", image: album4},
        { title: "Nohithunata", artist: "Yuki Navaratne", image: album5},
        { title: "FOUR (Deluxe)", artist: "One Direction", image: album6},
      ];

  return (
    <div className="artist-page">
        <Leftsidebar resetOnPageLoad={false} />
    <div className="artist-content">
        <Navbar/>
    <div className='album-page'>
        <div className="album-section">
        <p className='maintitle-album'>Popular albums and singles</p>
        <div className="albums">
          {popularAlbums.map((album, index) => (
            <div key={index} className="album">
              <img src={album.image} className="album-image"/>
              <img src={playButton} className="play-icon"/>
              <h3 className='album-tit'>{album.title}</h3>
              <p className='album-artist'>{album.artist}</p>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Albums