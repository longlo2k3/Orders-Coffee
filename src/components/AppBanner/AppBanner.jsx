import React from 'react'
import AppBannerImage from '../../assets/coffee-cover.jpg'
import { motion } from "framer-motion";
import AppStore from '../../assets/website/app_store.png'
import PlayStore from '../../assets/website/play_store.png'
const AppBanner = () => {
    const appBannerImage = {
        backgroundImage: `url(${AppBannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
    }
  return (
    //sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl overflow-hidden
    <section className='container  ' >
        <div className="h-[100px] w-full flex justify-end" style={appBannerImage}>
            <div className='flex flex-col justify-center items-center my-14'>
                <motion.h1 className='text-2xl text-center sm:text-4xl font-semibold'
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.5,
                                        delay: 0.4,
                                        type: 'spring',
                                        stiffness: 120,
                                        damping: 10,
                                        ease: 'easeInOut',
                                    }}
                                >Download the app</motion.h1>
                <motion.p className='text-center sm:text-sm sm:max-w-[300px] my-[20px]'
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.5,
                                        delay: 0.6,
                                        type: 'spring',
                                        stiffness: 120,
                                        damping: 10,
                                        ease: 'easeInOut',
                                        }}>Lorem ipsum dolor sit amet consedolor sit amet consectetur adipisicing elit. Officiis</motion.p>    
                <div className='flex flex-col sm:flex-row gap-4'>
                    <motion.img src={AppStore} alt="app-banner" className='max-w-[120px] sm:max-w-[200px] md:max-w-[250px] '
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.5,
                                        delay: 0.8,
                                        type: 'spring',
                                        stiffness: 120,
                                        damping: 10,
                                        ease: 'easeInOut'           
                                    }}
                                />
                    <motion.img src={PlayStore} alt="app-banner" className='max-w-[120px] sm:max-w-[200px] md:max-w-[250px]'
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.5,
                                        delay: 1,
                                        type: 'spring',
                                        stiffness: 120,
                                        damping: 10,
                                        ease: 'easeInOut'           
                                    }}
                                />
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default AppBanner

/**
                           





 */