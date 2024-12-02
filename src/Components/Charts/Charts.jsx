import React from 'react'
import './Charts.css'
import chart1 from '../../Images/chart1.jpg'
import chart2 from '../../Images/chart2.jpg'
import chart3 from '../../Images/chart3.jpg'
import chart4 from '../../Images/chart4.jpg'
import chart5 from '../../Images/chart5.jpg'
import chart6 from '../../Images/chart6.jpg'
import Navbar from '../Navbar/Navbar'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import playButton from '../../Images/play-button.png'
import Footer from '../Footer/Footer'


function Charts() {
    const featuredCharts = [
        { name: "Your weekly", role: "update of the mos...", image:  chart1},
        { name: "Your weekly", role: "update of the mos...", image:  chart2},
        { name: "Your daily update", role: "of the most playe...", image:  chart3},
        { name: "Your daily update", role: "of the most playe...", image:  chart4},
        { name: "Your daily update", role: "of the most playe...", image:  chart5},
        { name: "Your daily update", role: "of the most playe...", image:  chart6},
      ];

  return (
    <div className="artist-page">
        <Leftsidebar resetOnPageLoad={false} />
        <div className="artist-content">
            <Navbar/>
            <div className="chart-section">
                <p className='chart-title'>Featured Charts</p>
                <div className="artists">
                {featuredCharts.map((artist, index) => (
                    <div key={index} className="charts">
                    <img src={artist.image} className="chart-image"/>
                    <img src={playButton} className="play-icon"/>
                    <h3 className='chartartist'>{artist.name}</h3>
                    <p className='chartrole'>{artist.role}</p>
                    </div>
                ))}
                </div>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Charts