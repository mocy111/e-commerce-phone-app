import React from 'react';
import AOS from 'aos';
const Collection = () => {
    AOS.init();
    
    return (
      
          
      <section id="collection" className="section collection">
        <div className="collection__container" data-aos="fade-up" data-aos-duration="1200">
          <div className="collection__box">
            <div className="img__container">
              <img className="collection_02" src='/image/collection_02.png' alt="collection_02"/>
            </div>
            <div className="collection__content">
              <div className="collection__data">
                <span>New Colors Introduced</span>
                <h1>HEADPHONES</h1>
                <a href="#shop">SHOP NOW</a>
              </div>
            </div>
          </div>
          <div className="collection__box">
            <div className="img__container">
              <img className="collection_01" src='/image/collection_01.png' alt="collection_01"/>
            </div>
            <div className="collection__content">
              <div className="collection__data">
                <span>Phone Device Presets</span>
                <h1>SMARTPHONES</h1>
                <a href="#shop">SHOP NOW</a>
              </div>
            </div>
          </div>
          </div>
      </section>
         
      
    )
}

export default Collection
