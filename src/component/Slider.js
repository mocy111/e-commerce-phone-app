import React, {useEffect} from 'react';
import Glide from '@glidejs/glide';


const Slider = () => {
  
  useEffect(() => {
    const slider1 = document.getElementById("glide_1");
  if (slider1) {
    new Glide(slider1, {
      type: "carousel",
      startAt: 0,
      autoplay: 3000,
      hoverpause: true,
      perView: 1,
      animationDuration: 800,
      animationTimingFunc: "linear",
    }).mount();
  }
    
  })
  


  return (
    <div>
      <div className="hero">
      <div className="glide" id="glide_1">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <div className="hero__center">
                <div className="hero__left">
                  <span className="">New Inspiration 2020</span>
                  <h1 className="">PHONES MADE FOR YOU!</h1>
                  <p>Trending from mobile and headphone style collection</p>
                  <a href="!#"><button className="hero__btn">SHOP NOW</button></a>
                </div>
                <div className="hero__right">
                  <div className="hero__img-container">
                    <img className="banner_01" src='/image/banner_01.png' alt="banner2" />
                  </div>
                </div>
              </div>
            </li>
            <li className="glide__slide">
              <div className="hero__center">
                <div className="hero__left">
                  <span>New Inspiration 2020</span>
                  <h1>PHONES MADE FOR YOU!</h1>
                  <p>Trending from mobile and headphone style collection</p>
                  <a href="!#"><button className="hero__btn">SHOP NOW</button></a>
                </div>
                <div className="hero__right">
                  <img className="banner_02" src='/image/banner_02.png' alt="banner2" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0"></button>
          <button className="glide__bullet" data-glide-dir="=1"></button>
        </div>

        <div className="glide__arrows" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          <i className="fas fa-arrow-left fa-lg "></i>
          </button>
          <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          <i className="fas fa-arrow-right fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Slider
