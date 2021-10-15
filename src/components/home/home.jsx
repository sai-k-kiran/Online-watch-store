import React from 'react';
import Navbar from './navbar';
import Items from '../menu/items'
import './home.css';
import { motion } from 'framer-motion';
import gear from '../images/gear.png'
import Cards from '../directory/cards'
import Footer from './footer';


const HomePage = () => {
  const fadeTop ={
    hidden: {opacity: 0, y : -100},
    visible: {opacity: 1, y: 0},
  }
  return (
  <div>
    <Navbar />
   <div className='banner'>
    <motion.div className='banner-image'
    initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
      <img src={gear} alt='model' className='banner-img' />
    </motion.div>
     <motion.div className='banner-text' variants={fadeTop} initial='hidden' animate='visible'
     transition={{duration: 1}}>
      <h1>lorem ipsum dolor sit</h1>
      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,<br></br> consectetur, adipisci velit...</p>
     </motion.div>
   </div>
   <hr className='section-line'></hr>
   <Items title={'Featured items'} />
   <Cards title={'Categories'} />
   <Footer />
  </div>
  )
}

export default HomePage;