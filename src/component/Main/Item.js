import React from 'react'

const Item = ({param,onAddToCart}) => {


const addToShoppingCart = (e)=>{
  let  title= e.target.parentElement.children[0].textContent;
  let price = parseInt(e.target.parentElement.children[2].children[0].textContent);
  let imageUrl = e.target.parentElement.previousElementSibling.children[0].getAttribute('src');
  let id = param.id
  let count= param.count
   
 onAddToCart(id,title,price,imageUrl,count)


 
 
}
    return (
        <div className="product category__products">
         <div className="product__header">
           <img src={param.image} alt="product"/>
         </div>
         <div className="product__footer">
           <h3  >{param.title}</h3>
           <div className="rating">
          
           <i className="fas fa-star"></i>
           <i className="fas fa-star"></i>
           <i className="fas fa-star"></i>
           <i className="fas fa-star"></i>
           <i className="far fa-star"></i>
           </div>
           <div className="product__price">
             <h4>{param.price}</h4>
           </div>
          <button type="button" onClick={(e)=> {addToShoppingCart(e);   } }  className="product__btn">Add To Cart</button>
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
    )
}

export default Item
