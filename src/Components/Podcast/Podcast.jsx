import React from 'react'
import Navbar from '../Navbar/Navbar'
import Leftsidebar from '../Leftsidebar/Leftsidebar'
import Footer from '../Footer/Footer'
import './Podcast.css'

const categories = [
    { name: "Educational", image: "path_to_educational_image" },
    { name: "Documentary", image: "path_to_documentary_image" },
    { name: "Comedy", image: "path_to_comedy_image" },
    { name: "Pop Culture", image: "path_to_pop_culture_image" },
    // { name: "Fitness & Nutrition", image: null },
    { name: "Celebrities", image: null },
    { name: "TV", image: null },
    { name: "Beauty", image: null },
    { name: "Video Game", image: null },
    { name: "Film", image: null },
  ];

  const CategoryCard = ({ name, image }) => (
    <div className="category-card">
      <div className="content">
        <h3>{name}</h3>
        {image && <img src={image} alt={`${name} thumbnail`} />}
      </div>
    </div>
  );


function Podcast() {
  return (
    <div className="artist-page">
        <Leftsidebar resetOnPageLoad={false} />
        <div className="artist-content">
            <Navbar/>
            <div className="Podcast-section">
                <header>
                    <h1>Podcasts</h1>
                </header>
                    <section className="categories-section">
                        <h2>Categories</h2>
                        <div className="categories-grid">
                        {categories.map((category, index) => (
                            <CategoryCard
                            key={index}
                            name={category.name}
                            // image={category.image}
                            />
                        ))}
                        </div>
                        <a href="/categories" className="categories-link">
                          See all categories <span className="arrow">&gt;</span>
                        </a>
                    </section>
                    <Footer/>
                </div>
            </div>
        </div>
  )
}

export default Podcast