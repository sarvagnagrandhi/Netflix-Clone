import React from 'react'
import './Home.css'
import Navbar from '../../Components/navbar/navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../Components/Titlecards/Titlecards'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt='' className='banner-img' />
        <div className="hero-caption">
          <img  src={hero_title} alt='' className='caption-img'/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul emabrks on a quest to save the city from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon}/>Play</button>
            <button className='btn dark-btn'><img src={info_icon}/>More Info</button>
          </div>
          <Titlecards/>
        </div>
      </div>
      <div className="more-cards">
        <Titlecards title={"Blockbuster Movies"} category={"top_rated"}/>
        <Titlecards title={"Only on Netflix"} category={"popular"}/>
        <Titlecards title={"Upcoming"} category={"upcoming"}/>
        <Titlecards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
