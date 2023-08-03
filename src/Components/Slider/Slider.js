import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './Slider.css';
import images from './Images';

function Slider() {
const [width, setwidth] = useState(0);
const carousel = useRef();


useEffect(() => {

setwidth(carousel.current.scrolwidth - carousel.current.offsetWidth);
}, []);


  return (
    <div className='slider'>
          <motion.div ref={carousel} className='carousel' >
              <motion.div
              drag="x"
                dragConstraints={{right: 0 }}
                className='inner-carousel'
                animate={{
                  x: 1000,
                  direction: 'rtl'
                }}
                transition={{
                  duration: 10,
                  loop: Infinity
                }}
                
                
                >
            {images.map(images => {
                return(
              <motion.div className='item' key={images}>
                  <img src={images} alt=""/>
              </motion.div>
                ); 
            })}
              </motion.div>
          </motion.div>
          <motion.div ref={carousel} className='carousel' >
              <motion.div
              drag="x"
                dragConstraints={{left: 0 }}
                className='inner-carousel'
                animate={{
                  x: -1000,
                  direction: 'lft'
                }}
                transition={{
                  duration: 10,
                  loop: Infinity
                }}
                
                
                >
            {images.map(images => {
                return(
              <motion.div className='item' key={images}>
                  <img src={images} alt=""/>
              </motion.div>
                ); 
            })}
              </motion.div>
          </motion.div>
    </div>
  );
}



export default Slider;
