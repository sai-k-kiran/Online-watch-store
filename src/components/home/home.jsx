import React from 'react';
import Navbar from './navbar';
import Items from '../menu/items'
import './home.css';
import Suit from './suit.png'
import Cards from '../directory/cards'
import Footer from './footer';

const HomePage = () => (
  <div>
    <Navbar />
   <div className='banner'>
    <div className='banner-image'>
      <img src={Suit} alt='model' className='banner-img' />
    </div>
     <div className='banner-text'>
      <h1>lorem ipsum dolor sit</h1>
      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,<br></br> consectetur, adipisci velit...</p>
     </div>
   </div>
   <hr className='section-line'></hr>
   <Items title={'Featured items'} />
   <Cards title={'Categories'} />
   <Footer />
  </div>
);

export default HomePage;