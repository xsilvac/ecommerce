import React from 'react'
import './Home.css'
import firstImg from '../img/carousel/1.png'
import secondImg from '../img/carousel/2.png'
import thirdImg from '../img/carousel/3.png'
import fourthImg from '../img/carousel/4.png'
import fifthImg from '../img/carousel/5.png'

const Home = () => {
  return (
    <section id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={firstImg} className="imgCarousel" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={secondImg} className="imgCarousel" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={thirdImg} className="imgCarousel" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={fourthImg} className="imgCarousel" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={fifthImg} className="imgCarousel" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  )
}

export default Home