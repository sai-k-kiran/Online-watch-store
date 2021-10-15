import Atropos from 'atropos/react/atropos-react.esm';
import React, {useEffect} from 'react';
import {categories} from '../data/jsondata'
import './directory.css'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Cards = ({title}) => {
    const {ref, inView} = useInView({
        threshold: 0.2
    })
    const animation = useAnimation()

    useEffect(() => {
        if(inView){
            animation.start({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1
                }
            })
        } else{
            animation.start({
                opacity: 0,
            })
        }
    }, [inView])
    return ( 
        <>
            <div className='category-title'>
                <h1>{title}</h1>
            </div>
            <div ref={ref} className='cards-menu'>
                {categories.map(category => 
                    <motion.div className='cards' 
                    animate={animation} key={category.id}>
                        <Atropos>
                            <div className='overlayImg'>
                                <img className ='card-img'
                                src={category.imageUrl} alt={category.title}/>
                            </div>
                        </Atropos >
                        <div className='card-title'>
                            <h2>{category.title}</h2>
                        </div>
                    </motion.div>
                )}
            </div>
        </>
     )
}
 
export default Cards;