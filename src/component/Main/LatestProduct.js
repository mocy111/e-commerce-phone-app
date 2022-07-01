import React, {Fragment,useEffect,useRef} from 'react'
import AOS from 'aos';
import Glide from '@glidejs/glide'

const LatestProduct = ({onAddToCart}) => {
    AOS.init();
   const priceRef = useRef(null)
   const imageRef = useRef(null)
   const nameRef = useRef(null)

   const priceRef2 = useRef(null)
   const imageRef2 = useRef(null)
   const nameRef2 = useRef(null)

   const priceRef3 = useRef(null)
   const imageRef3 = useRef(null)
   const nameRef3 = useRef(null)

   const priceRef4 = useRef(null)
   const imageRef4 = useRef(null)
   const nameRef4 = useRef(null)

   const priceRef5 = useRef(null)
   const imageRef5 = useRef(null)
   const nameRef5 = useRef(null)

   const priceRef6 = useRef(null)
   const imageRef6 = useRef(null)
   const nameRef6 = useRef(null)

   const priceRef7 = useRef(null)
   const imageRef7 = useRef(null)
   const nameRef7 = useRef(null)

   const priceRef8 = useRef(null)
   const imageRef8 = useRef(null)
   const nameRef8 = useRef(null)

   const priceRef9 = useRef(null)
   const imageRef9 = useRef(null)
   const nameRef9 = useRef(null)


    

 

    useEffect(() => {
        const slider2 = document.getElementById("glide_2");
        
        if (slider2) {
            new Glide(slider2, {
              type: "carousel",
              startAt: 0,
              perView: 4,
              rewin: false,
              animationDuration: 800,
              animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
              breakpoints: {
                1200: {
                  perView: 3,
                },
                768: {
                  perView: 2,
                },
              },
            }).mount();
          }
        
      })

    return (
        <Fragment>

      {/*  Latest Products */}
      <section className="section latest__products" id="latest">
        <div className="title__container">
          <div className="section__title active" data-id="Latest Products">
            <span className="dot"></span>
            <h1 className="primary__title">Latest Products</h1>
          </div>
        </div>
        <div className="container" data-aos="fade-up" data-aos-duration="1200">
          <div className="glide" id="glide_2" >
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides latest-center">
                <li className="glide__slide">
                  <div className="product">
                    <div className="product__header">
                      <img ref={imageRef} src='/image/products/iPhone/iphone6.jpeg' alt="product"/>
                    </div>
                    <div className="product__footer">
                      <h3 ref={nameRef} >Apple iPhone 11</h3>
                      <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                      </div>
                      <div className="product__price">
                        <h4 ref={priceRef} >750</h4>
                      </div>
                      <button type="submit" className="product__btn" onClick={()=>  onAddToCart(111,nameRef.current.textContent,parseInt(priceRef.current.textContent),imageRef.current.getAttribute('src'),1 )  }  >Add To Cart</button>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="!#">
                        <i className="far fa-eye white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="!#">
                        <i className="far fa-heart white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="!#">
                        <i className="fas fa-sync white"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="product">
                    <div className="product__header">
                      <img ref={imageRef2} src='/image/products/sumsung/samsung5.jpeg' alt="product samsung"/>
                    </div>
                    <div className="product__footer">
                      <h3 ref={nameRef2} >Samsung Galaxy</h3>
                      <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                      </div>
                      <div className="product__price">
                        <h4 ref={priceRef2} >900</h4>
                      </div>
                      <button type="submit" className="product__btn" onClick={()=>  onAddToCart(222,nameRef2.current.textContent,parseInt(priceRef2.current.textContent),imageRef2.current.getAttribute('src'),1 )  }   >Add To Cart</button>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="!#">
                        <i className="far fa-eye  white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="!#">
                        <i className="far fa-heart white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="!#">
                        <i className="fas fa-sync white"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="product">
                    <div className="product__header">
                      <img ref={imageRef3} src='/image/products/headphone/headphone4.jpeg' alt="product"/>
                    </div>
                    <div className="product__footer">
                      <h3 ref={nameRef3}>Sony WH-CH510</h3>
                      <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                      </div>
                      <div className="product__price">
                        <h4 ref={priceRef3} >600</h4>
                      </div>
                      <button type="submit" className="product__btn"  onClick={()=>  onAddToCart(333,nameRef3.current.textContent,parseInt(priceRef3.current.textContent),imageRef3.current.getAttribute('src'),1 )  }  >Add To Cart</button>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="!#">
                        <i className="far fa-eye white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="!#">
                        <i className="far fa-heart white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="!#">
                        <i className="fas fa-sync white"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="product">
                    <div className="product__header">
                      <img ref={imageRef4} src='/image/products/sumsung/samsung3.jpeg' alt="product"/>
                    </div>
                    <div className="product__footer">
                      <h3 ref={nameRef4}>Samsung Galaxy</h3>
                      <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                      </div>
                      <div className="product__price">
                        <h4 ref={priceRef4}>850</h4>
                      </div>
                      <button type="submit" className="product__btn" onClick={()=>  onAddToCart(444,nameRef4.current.textContent,parseInt(priceRef4.current.textContent),imageRef4.current.getAttribute('src'),1 )  }   >Add To Cart</button>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="!#">
                        <i className="far fa-eye white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="!#">
                        <i className="far fa-heart white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="!#">
                        <i className="fas fa-sync white"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="product">
                    <div className="product__header">
                      <img ref={imageRef5} src='/image/products/iPhone/iphone2.jpeg' alt="product"/>
                    </div>
                    <div className="product__footer">
                      <h3 ref={nameRef5}>Apple iPhone 11</h3>
                      <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                      </div>
                      <div className="product__price">
                        <h4 ref={priceRef5}>450</h4>
                      </div>
                      <button type="submit" className="product__btn" onClick={()=>  onAddToCart(555,nameRef5.current.textContent,parseInt(priceRef5.current.textContent),imageRef5.current.getAttribute('src'),1 )  }   >Add To Cart</button>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="!#">
                        <i className="far fa-eye white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="!#">
                        <i className="far fa-heart white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="!#">
                        <i className="fas fa-sync white"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="product">
                    <div className="product__header">
                      <img ref={imageRef6} src='/image/products/headphone/headphone2.jpeg' alt="product"/>
                    </div>
                    <div className="product__footer">
                      <h3 ref={nameRef6}>Sony WH-CH510</h3>
                      <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                      </div>
                      <div className="product__price">
                        <h4 ref={priceRef6} >300</h4>
                      </div>
                      <button type="submit" className="product__btn" onClick={()=>  onAddToCart(666,nameRef6.current.textContent,parseInt(priceRef6.current.textContent),imageRef6.current.getAttribute('src'),1 )  }   >Add To Cart</button>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="!#">
                        <i className="far fa-eye white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="!#">
                        <i className="far fa-heart white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="!#">
                        <i className="fas fa-sync white"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="product">
                    <div className="product__header">
                      <img ref={imageRef7} src='/image/products/sumsung/samsung1.jpeg' alt="product"/>
                    </div>
                    <div className="product__footer">
                      <h3 ref={nameRef7}>Samsung Galaxy</h3>
                      <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                      </div>
                      <div className="product__price">
                        <h4 ref={priceRef7} >300</h4>
                      </div>
                      <button type="submit" className="product__btn"  onClick={()=>  onAddToCart(777,nameRef7.current.textContent,parseInt(priceRef7.current.textContent),imageRef7.current.getAttribute('src'),1 )  }  >Add To Cart</button>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="!#">
                        <i className="far fa-eye white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="!#">
                        <i className="far fa-heart white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="!#">
                        <i className="fas fa-sync white"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="product">
                    <div className="product__header">
                      <img ref={imageRef8} src='/image/products/headphone/headphone1.jpeg' alt="product"/>
                    </div>
                    <div className="product__footer">
                      <h3 ref={nameRef8}>Sony WH-CH510</h3>
                      <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                      </div>
                      <div className="product__price">
                        <h4 ref={priceRef8}>250</h4>
                      </div>
                      <button type="submit" className="product__btn" onClick={()=>  onAddToCart(888,nameRef8.current.textContent,parseInt(priceRef8.current.textContent),imageRef8.current.getAttribute('src'),1 )  }   >Add To Cart</button>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="!#">
                        <i className="far fa-eye white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="!#">
                        <i className="far fa-heart white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="!#">
                        <i className="fas fa-sync white"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="glide__slide">
                  <div className="product">
                    <div className="product__header">
                      <img ref={imageRef9} src='/image/products/iPhone/iphone1.jpeg' alt="product"/>
                    </div>
                    <div className="product__footer">
                      <h3 ref={nameRef9}>Apple iPhone XR</h3>
                      <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                      </div>
                      <div className="product__price">
                        <h4 ref={priceRef9}>550</h4>
                      </div>
                      <button type="submit" className="product__btn"  onClick={()=>  onAddToCart(999,nameRef9.current.textContent,parseInt(priceRef9.current.textContent),imageRef9.current.getAttribute('src'),1 )  }  >Add To Cart</button>
                    </div>
                    <ul>
                      <li>
                        <a data-tip="Quick View" data-place="left" href="!#">
                        <i className="far fa-eye white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Wishlist" data-place="left" href="!#">
                        <i className="far fa-heart white"></i>
                        </a>
                      </li>
                      <li>
                        <a data-tip="Add To Compare" data-place="left" href="!#">
                        <i className="fas fa-sync white"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glide__arrows" data-glide-el="controls">
              <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
              <i className="fas fa-arrow-left fa-lg colorBlack"></i>
              </button>
              <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
              <i className="fas fa-arrow-right fa-lg colorBlack"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
        </Fragment>
    )
}

export default LatestProduct
