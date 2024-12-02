import React from 'react'
import './Radio.css'
import radio1 from '../../Images/radio1.jpg'
import radio2 from '../../Images/radio2.jpg'
import radio3 from '../../Images/radio3.jpg'
import radio4 from '../../Images/radio4.jpg'
import radio5 from '../../Images/radio5.jpg'
import radio6 from '../../Images/radio6.jpg'
import playButton from '../../Images/play-button.png'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Leftsidebar from '../Leftsidebar/Leftsidebar'

function Radio() {
    const popularRadio = [
        { name: "With Dhanith Sri,", role: "Ridma...", image:  radio1},
        { name: "With Mihiran,", role: "Dhyan Hewage,...", image:  radio2},
        { name: "With Dilu Beats,", role: "Dhyan Hewage,...", image:  radio3},
        { name: "With Damith,", role: "Asanka,Sangeeth...", image:  radio4},
        { name: "With La Signore,", role: "Ranidu,Dhanith S...", image:  radio5},
        { name: "With DJ Janaka,", role: "Madawa,Dilo and...", image:  radio6},
        { name: "With Dhanith Sri,", role: "Ridma...", image:  radio1},
        { name: "With Mihiran,", role: "Dhyan Hewage,...", image:  radio2},
        { name: "With Dilu Beats,", role: "Dhyan Hewage,...", image:  radio3},
        { name: "With Damith,", role: "Asanka,Sangeeth...", image:  radio4},
        { name: "With La Signore,", role: "Ranidu,Dhanith S...", image:  radio5},
        { name: "With DJ Janaka,", role: "Madawa,Dilo and...", image:  radio6},
        { name: "With Dhanith Sri,", role: "Ridma...", image:  radio1},
        { name: "With Mihiran,", role: "Dhyan Hewage,...", image:  radio2},
        { name: "With Dilu Beats,", role: "Dhyan Hewage,...", image:  radio3},
        { name: "With Damith,", role: "Asanka,Sangeeth...", image:  radio4},
        { name: "With La Signore,", role: "Ranidu,Dhanith S...", image:  radio5},
        { name: "With DJ Janaka,", role: "Madawa,Dilo and...", image:  radio6},
      ];

  return (
    <div className="artist-page">
        <Leftsidebar resetOnPageLoad={false} />
    <div className="artist-content">
        <Navbar/>
        <div className="radio-section">
        <p className='radio-title'>Popular radio</p>
        <div className="artists">
          {popularRadio.map((artist, index) => (
            <div key={index} className="radio">
              <img src={artist.image} className="radio-image"/>
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

export default Radio