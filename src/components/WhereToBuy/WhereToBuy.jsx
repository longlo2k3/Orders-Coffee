import { div } from 'framer-motion/client'
import React from 'react'
import img from '../../assets/world-map.png'
import {motion} from 'framer-motion'

const WhereToBuy = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center mt-20">
        <div className="flex flex-row p-[50px] ">
            <div>
                <motion.h1  className='text-4xl font-bold text-dark  lg:w-[500px] mb-8'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                        duration: 0.7,
                        delay:0.4,
                        type:'spring',
                        stiffness:120,
                        damping:10,
                    }}    
                >Buy our products from anywhere</motion.h1>
                <motion.div className='flex flex-row gap-4 mb-8'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                        duration: 0.7,
                        delay:0.6,
                        type:'spring',
                        stiffness:120,
                        damping:10,
                    }}>
                    <input type="text" placeholder='Name' className='input-style w-full lg:w-[150px] w-[50%]'/>
                    <input type="text" placeholder='Email' className='input-style w-full flex-1'/>
                    </motion.div>
                <motion.div className='flex flex-row gap-4 mb-8'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                        duration: 0.7,
                        delay:0.8,
                        type:'spring',
                        stiffness:120,
                        damping:10,
                    }}>
                    <input type="text" placeholder='Country' className='input-style w-full flex-1'/>
                    <input type="text" placeholder='Zipcode' className='input-style w-full lg:w-[150px] w-[50%]'/>
                </motion.div>
                
                <motion.button className='h-[41px] w-full bg-primary text-white rounded-md'
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{
                        duration: 0.7,
                        delay:1,
                        type:'spring',
                        stiffness:120,
                        damping:10,
                    }}    
                >Order Now</motion.button>
            </div>
        </div>
        <motion.img src={img} alt="map" className='lg:w-[500px] w-[300px] object-cover object-center ' 
            initial={{opacity:0, scale:0}}
            whileInView={{opacity:1, scale:1}}
            transition={{
                duration: 1.4,
                delay:0.8,
                type:'spring',
                stiffness:120,
                damping:10,
            }} />
    </div>
  )
}

export default WhereToBuy