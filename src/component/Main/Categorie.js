import React, {useEffect, useState} from 'react'
import Data from './data/products.json'
import AOS from 'aos';
import Item from './Item'

const Categorie = ({onAddToCart,updateCart}) => {
  AOS.init();

  const [products, setProducts] = useState([])
useEffect(() => {
  setProducts(Data.products)
}, [])
  

const handleCategorie = (e) =>{
  const filterBtn = document.querySelectorAll(".filter-btn");

   const target =  e.target.closest('.section__title') 
   if (!target) return;
  const id = target.dataset.id;
   

  filterBtn.forEach(btn =>{
    btn.classList.remove("active")
  });
  target.classList.add('active')

  let menuCategorie = Data.products.filter(param =>{
    
    if (param.category === id) {
      return param
    }
  })
  console.log(menuCategorie);
  id === "All Products"? setProducts(Data.products) : (setProducts(menuCategorie))

   
}


  

 
    return (
     
        <section className="category__section section" id="category" onClick={handleCategorie}>
        <div className="tab__list">
          <div className="title__container tabs">
            
            <div className="section__titles category__titles" >
              <div className="section__title filter-btn active yeah" data-id="All Products"  >
                <span className="dot"></span>
                <h1 className="primary__title">All Products </h1>
               
              </div>
            </div>
            
            <div className="section__titles" >
              <div className="section__title filter-btn" data-id="Trending Products"   >
                <span className="dot"></span>
                <h1 className="primary__title">Trending Products</h1>
              </div>
            </div>

            <div className="section__titles" >
              <div className="section__title filter-btn" data-id="Special Products"  >
                <span className="dot"></span>
                <h1 className="primary__title">Special Products</h1>
              </div>
            </div>

            <div className="section__titles" >
              <div className="section__title filter-btn" data-id="Featured Products"   >
                <span className="dot"></span>
                <h1 className="primary__title">Featured Products</h1>
              </div>
            </div>

          </div>
        </div>
        <div className="category__container" data-aos="fade-up" data-aos-duration="1200">
          <div className="category__center" >
        
          {products.map((param)=> <Item param={param} key={param.id} onAddToCart={onAddToCart}  />)

          }

          </div>
         
        </div>
   
    </section>
   
    )
}

export default Categorie
