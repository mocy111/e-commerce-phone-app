import React, {useEffect} from 'react'
import Glide from '@glidejs/glide';
import AOS from 'aos';
const News = () => {
    AOS.init();
    useEffect(() => {
        const slider5 = document.getElementById("glide_5");


        if (slider5) {
            new Glide(slider5, {
              type: "carousel",
              startAt: 0,
              perView: 3,
              rewin: false,
              autoplay: 3000,
              animationDuration: 800,
              animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
              breakpoints: {
                998: {
                  perView: 2,
                },
                768: {
                  perView: 1,
                },
              },
            }).mount();
          }
       
    }, [])

    return (
        <section className="section news" id="news">
        <div className="container" data-aos="fade-up" data-aos-duration="1200">
          <div className="title__container">
            <div className="section__titles">
              <div className="section__title active">
                <span className="dot"></span>
                <h1 className="primary__title">Phone News</h1>
              </div>
            </div>
          </div>
          <div className="news__container">
            <div className="glide" id="glide_5">
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  <li className="glide__slide">
                    <div className="new__card">
                      <div className="card__header">
                        <img src="/image/news1.jpg" alt=""/>
                      </div>
                      <div className="card__footer">
                        <h3>Styling White Shirts After A Cool Day</h3>
                        <span>By Admin</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                          provident rem sed minus natus unde vel modi!</p>
                        <a href="!#"><button>Read More</button></a>
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="new__card">
                      <div className="card__header">
                        <img src="/image/news2.jpg" alt=""/>
                      </div>
                      <div className="card__footer">
                        <h3>Styling White Shirts After A Cool Day</h3>
                        <span>By Admin</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                          provident rem sed minus natus unde vel modi!</p>
                        <a href="!#"><button>Read More</button></a>
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="new__card">
                      <div className="card__header">
                        <img src="/image/news3.jpg" alt=""/>
                      </div>
                      <div className="card__footer">
                        <h3>Styling White Shirts After A Cool Day</h3>
                        <span>By Admin</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                          provident rem sed minus natus unde vel modi!</p>
                        <a href="!#"><button>Read More</button></a>
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="new__card">
                      <div className="card__header">
                        <img src="/image/news4.jpg" alt=""/>
                      </div>
                      <div className="card__footer">
                        <h3>Styling White Shirts After A Cool Day</h3>
                        <span>By Admin</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                          provident rem sed minus natus unde vel modi!</p>
                        <a href="!#"><button>Read More</button></a>
                      </div>
                    </div>
                  </li>
                  <li className="glide__slide">
                    <div className="new__card">
                      <div className="card__header">
                        <img src="/image/news5.jpg" alt=""/>
                      </div>
                      <div className="card__footer">
                        <h3>Styling White Shirts After A Cool Day</h3>
                        <span>By Admin</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium, numquam non
                          provident rem sed minus natus unde vel modi!</p>
                        <a href="!#"><button>Read More</button></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    )
}

export default News
