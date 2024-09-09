import Service from '../Services/Service'
import img1 from '../../assets/coffee/coffee1.png'
import img2 from '../../assets/coffee/coffee3.png'
import { motion } from 'framer-motion'
const Coffee = () => {
  return (
    <>
      <div className="  text-center mt-20  overflow-hidden">
        <div className="flex flex-col justify-center items-center mt-6">
          <motion.h1 className='text-3xl font-bold'
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.6,
              type: "spring",
              stiffness: 120,
              damping: 10
            }}>Fresh and <span className='text-primary'>Tasty coffee</span></motion.h1>
          <motion.p className='md:w-[530px] sm:w-[300px] text-[14px] text-center leading-tight mt-4'
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.7,
              type: "spring",
              stiffness: 120,
              damping: 10
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit eum ducimus, distinctio cum eaque totam voluptatem ex dolorem fuga.
          </motion.p>
        </div>
        <motion.div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  mt-10 gap-10"
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
          <Service img={img1} name="Black Coffee" desc="lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
          <Service img={img2} name="Hot Coffee" desc="lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
          <Service img={img1} name="Cold Coffee" desc="lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        </motion.div>
      </div>
    </>
  )
}

export default Coffee