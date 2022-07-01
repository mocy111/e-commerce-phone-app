import React from 'react';
import Collection from './Main/Collection';
import LatestProduct from './Main/LatestProduct';
import Categorie from './Main/Categorie';
import Facility from './Main/Facility';
import Testimonial from './Main/Testimonial';
import News from './Main/News';
import NewsLetter from './Main/NewsLetter';

const Main = ({ onAddToCart }) => {
  return (
    <main id='main'>
      <div className='container'>
        <Collection />

        <LatestProduct onAddToCart={onAddToCart} />

        <Categorie onAddToCart={onAddToCart} />
      </div>
      <Facility />
      <Testimonial />
      <News />
      <NewsLetter />
    </main>
  );
};

export default Main;
