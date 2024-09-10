import { motion } from "framer-motion";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="overflow-hidden bg-primaryDark bg-gradient-to-r from-primary to-primaryDark mt-16 ">
            <div className="container my-12 text-white">
                <div className="footer-content grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                    <motion.div className="flex flex-col gap-4"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.5, 
                            delay: 0.4,
                            type: "spring",
                            stiffness: 120,
                            damping: 10
                        }}
                    >
                        <h1 className="text-2xl font-bold">ORDERS CAFE</h1>
                        <p className="lg:w-[300px] text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero, praesentium ab atque? Quidem maxime, numquam dolores</p>
                        <div className="flex items-center gap-2">
                            <span class="material-symbols-outlined">
                                phone_in_talk
                            </span>
                            <p>+89 81234567890</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span class="material-symbols-outlined">
                                pin_drop
                            </span>
                            <p>Hanoi, Vietnam</p>
                        </div>
                    </motion.div>
                    <motion.div className="flex flex-col gap-4"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.5, 
                            delay: 0.6,
                            type: "spring",
                            stiffness: 120,
                            damping: 10
                        }}>
                        <h1 className="text-2xl font-bold">Quick Links</h1>
                        <div className="flex flex-row justify-between items-center">
                            <ul className="flex flex-col gap-2">
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Contact</li>
                            </ul>
                            <ul className="flex flex-col gap-2 mr-40">
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div className="flex flex-col gap-6"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.5, 
                            delay: 0.8,
                            type: "spring",
                            stiffness: 120,
                            damping: 10
                        }}>
                        <h1 className="text-2xl font-bold">Follow Us</h1>
                        <div className="flex items-center gap-2">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <FaFacebookF size={20}  className="cursor-pointer" />
                                <FaInstagram size={20}  className="cursor-pointer" />
                                <FaTwitter size={20}  className="cursor-pointer" />
                                <FaGoogle size={20}  className="cursor-pointer" />
                               
                            </div>
                            
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-xl ">Payment Partners</p>
                            <img src="../src/assets/website/credit-cards.webp" alt="credit-cards" />
                        </div>
                        
                    </motion.div>
                    
                </div>
                <hr className="my-10 h-[2px] bg-white-500/60 rounded-full"/>
                <p className="text-center">Copyright © 2024 Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
