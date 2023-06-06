import { motion } from 'framer-motion'
import React from 'react'
import {AiFillCiCircle,AiFillWindows,AiFillAndroid} from "react-icons/ai"

const Services = () => {
const animation = {
  whileInView:{
    x:0,
    y:0,
    opacity:1,
  },
  one:{
    opacity:0,
    y:"-100%",
  },
  twoAndThree:{
    opacity:0,
    y:"-100%",
  },
  four:{
    opacity:0,
    x:"-100%",
  },
 
}

  return (
    <>
      <div id="services"> 
        <h2>Services</h2>

        <section>
          <motion.div className='serviceBox1' whileInView={animation.whileInView} initial={animation.one}>
            <h3>5+</h3>
            <p>Year Experience</p>
          </motion.div>
          
          <motion.div  className='serviceBox2' whileInView={animation.whileInView} initial={animation.twoAndThree}>
            <AiFillCiCircle/>
            <span>Web Development</span>
          </motion.div>
          <motion.div  className='serviceBox3' whileInView={animation.whileInView} initial={animation.twoAndThree} transition={{delay:0.2}}>
            <AiFillAndroid/>
            <span>App Development</span>
          </motion.div>
          <motion.div  className='serviceBox4' whileInView={animation.whileInView} initial={animation.four}>
            <AiFillWindows/>
            <span>MERN Development</span>
          </motion.div>

        </section>
      </div>
    </>
  )
}

export default Services
