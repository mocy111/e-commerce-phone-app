import React from 'react'
import AOS from 'aos';
const Facility = () => {
    AOS.init();

    return (
        // <Facility Section >
        <section className="facility__section section" id="facility">
        <div className="container">
          <div className="facility__contianer" data-aos="fade-up" data-aos-duration="1200">
            <div className="facility__box">
              <div className="facility-img__container">
              <i className="fas fa-plane fa-2x"></i>
              </div>
              <p>FREE SHIPPING WORLD WIDE</p>
            </div>
  
            <div className="facility__box">
              <div className="facility-img__container">
              <i className="fas fa-credit-card fa-2x"></i>
              </div>
              <p>100% MONEY BACK GUARANTEE</p>
            </div>
  
            <div className="facility__box">
              <div className="facility-img__container">
              <i className="fab fa-cc-mastercard fa-2x"></i>
              </div>
              <p>MANY PAYMENT GATWAYS</p>
            </div>
  
            <div className="facility__box">
              <div className="facility-img__container">
              <i className="fas fa-headphones fa-2x"></i>
              </div>
              <p>24/7 ONLINE SUPPORT</p>
            </div>
          </div>
        </div>
      </section>
       
    )
}

export default Facility
