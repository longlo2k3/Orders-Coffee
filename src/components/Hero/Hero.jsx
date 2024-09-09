import React, { useRef, useEffect } from "react";
import BgImage from "../../assets/bg-slate.png";
import { motion,useAnimate,useInView } from "framer-motion";

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '750px',
    width: '100%',
}

const Hero = () => {

    return (
        <main style={bgImage}>
            <section>
                <div className="container">
                    <motion.div className="header"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.5, 
                            delay: 0.4,
                            type: "spring",
                            stiffness: 120,
                            damping: 10
                        }}
                    >
                        <div className="flex justify-between items-center md:grid-cols-2 py-[2rem]">
                            <div className="text-primary text-opacity-1">
                                <p className="text-2xl font-bold ">ORDERS <span className="text-white">COFFEE.</span></p>
                            </div>
                            <span class="material-symbols-outlined text-white text-4xl">
                                menu
                            </span>
                        </div>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[700px]">
                        <div className="text-lightOrange md:mt-0 p-4 space-y-28 flex-auto">
                            <motion.h1 className="text-7xl font-bold leading-tight ml-14 md:w-32 lg:w-48 "
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.4,
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 10
                                }}
                            >Blvck Tumbler</motion.h1>
                            <motion.div className="relative z-10 space-y-2"
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 1.5,
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 10
                                }}
                            >
                                    <h1 className="text-2xl leading-tight ">Black Lifestyle Lovers,</h1>
                                    <p className="text-sm opacity-55 md:w-[340px]  leading-loose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur, cumque eos neque dolorem architecto deserunt quis voluptatibus in quisquam quia ducimus</p>
                            </motion.div>

                            <motion.div className="absolute top-[390px] xl:w-[250px] lg:w-[0px]  left-[0px] z-0 h-[190px] bg-gray-700/20"
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 1.5,
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 10
                                }}
                            >
                            </motion.div>
                        </div>

                        <div className="flex-auto relative">
                            <motion.img
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1,scale: 1 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: 0.8,
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 10 
                                }}
                                src="/src/assets/black.png" 
                                alt="glass" 
                                className="relative z-40  md:h-[700px] bottom-[30px] img-shadow opacity-100 transform-none" 
                            />
                            <motion.div
                                initial={{ opacity: 0, y: 200 }}
                                whileInView={{ opacity: 2, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 1.2,
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 10
                                }}
                                className="h-[180px] z-10 w-[180px] absolute md:-right-20 top-16  rounded-full border-primary border-[20px] img-shadow opacity-100 transform-none"
                              >   
                            </motion.div>
                        </div>
                        <div className="text-lightOrange md:mt-0 p-4 space-y-28 flex-auto lg:block hidden ">
                            <div className="relative bottom-[-100px]  z-10 space-y-2 ">
                                    <motion.div 
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 1.5,
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 10
                                    }}>
                                        <h1 className="text-2xl leading-tight "> Blvck Tumbler</h1>
                                        <p className="text-sm opacity-55 md:w-[460px] w-full leading-loose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur,Delectus aspernatur, Delectus aspernatur,Delectus aspernatur,</p>
                                    </motion.div>
                                    
                            </div>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 1.5,
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 10
                                }}
                                className="absolute top-[390px] xl:w-[250px] lg:w-[0px]  right-[0px] z-0   h-[190px] bg-darkGray opacity-50">

                            </motion.div>
                        </div>
                        <div className="absolute z-5 -top-[60px] right-[55%] xl:w-[0] ">
                            <motion.div className="text-[140px] scale-105 text-darkGray font-bold"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 0.5, x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 1.4,
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 10
                                }}
                            >BLVCK TUMBLER</motion.div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </main>
    )
}
export default Hero;

