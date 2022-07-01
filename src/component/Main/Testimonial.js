import React, {useEffect} from 'react'
import Glide from '@glidejs/glide';
const Testimonial = () => {

    useEffect(() => {
        const slider4 = document.getElementById("glide_4");

        if (slider4) {
            new Glide(slider4, {
              type: "carousel",
              startAt: 0,
              perView: 1,
              rewin: false,
              animationDuration: 800,
              animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
            }).mount();
          }
       
    }, [])


    return (
        // Testimonial Section 
        <section className="section testimonial" id="testimonial">
          <div className="testimonial__container">
            <div className="glide" id="glide_4">
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  <li className="glide__slide">
                    <div className="testimonial__box">
                      <div className="client__image">
                        <img src="/image/mocy.jpg" alt="profile"/>
                      </div>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic nesciunt tempore
                        quibusdam consequatur eligendi unde officia ex quae.ipsum dolor sit amet consectetur adipisicing
                        elit. Recusandae fuga hic nesciunt tempore
                        quibusdam consequatur eligendi unde officia ex quae.</p>
                      <div className="client__info">
                        <h3>Moctar Yonli</h3>
                        <span>Founder at Apple</span>
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="testimonial__box">
                      <div className="client__image">
                        <img src="/image/profile2.jpg" alt="profile"/>
                      </div>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic nesciunt tempore
                        quibusdam consequatur
                        eligendi unde officia ex quae.ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic
                        nesciunt tempore
                        quibusdam consequatur eligendi unde officia ex quae.adipisicing elit. Recusandae fuga hic
                        nesciunt tempore
                        quibusdam consequatur eligendi unde officia ex quae.</p>
                      <div className="client__info">
                        <h3>John Smith</h3>
                        <span>Founder at Apple</span>
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="testimonial__box">
                      <div className="client__image">
                        <img src="/image/profile3.jpg" alt="profile"/>
                      </div>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic nesciunt tempore
                        quibusdam consequatur
                        eligendi unde officia ex quae.ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic
                        nesciunt tempore
                        quibusdam consequatur eligendi unde officia ex quae.adipisicing elit. Recusandae fuga hic
                        nesciunt tempore
                        quibusdam consequatur eligendi unde officia ex quae.</p>
                      <div className="client__info">
                        <h3>John Smith</h3>
                        <span>Founder at Apple</span>
                      </div>
                    </div>
    
                  </li>
                  <li className="glide__slide">
                    <div className="testimonial__box">
                      <div className="client__image">
                        <img src="/image/profile4.jpg" alt=""/>
                      </div>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga hic nesciunt tempore
                        quibusdam consequatur
                        eligendi unde officia ex quae.adipisicing elit. Recusandae fuga hic
                        nesciunt tempore
                        quibusdam consequatur eligendi unde officia ex quae.
                        hic
                        nesciunt tempore
                        quibusdam consequatur eligendi unde officia ex quae.</p>
                      <div className="client__info">
                        <h3>John Smith</h3>
                        <span>Founder at Apple</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
    
              <div className="glide__bullets" data-glide-el="controls[nav]">
                <button className="glide__bullet" data-glide-dir="=0"></button>
                <button className="glide__bullet" data-glide-dir="=1"></button>
                <button className="glide__bullet" data-glide-dir="=2"></button>
                <button className="glide__bullet" data-glide-dir="=3"></button>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Testimonial
