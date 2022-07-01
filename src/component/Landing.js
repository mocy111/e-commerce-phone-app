import React, {Fragment} from 'react'
import '../App.css'
import Sliders from './Slider';
import Main from './Main';

const Landing = ({handleAddToCart}) => {

   

   
    return (
      
      <Fragment>
       <Sliders/>
       <Main onAddToCart={handleAddToCart}  />  
       </Fragment>
    )
}

export default Landing
