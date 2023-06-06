import React, { useRef } from 'react'
import { animate, motion } from "framer-motion"
import  Typewriter  from 'typewriter-effect';
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs"
import me from "../asset/pic2.png"

const Home = () => {
    const clientCount = useRef()
    const projectCount = useRef()

    const animationClientCount = ()=>{
        animate(0,100,{
            duration:1,
            onUpdate:(v)=>clientCount.current.textContent = v.toFixed()
        })
    }

    const animationProjectCount = ()=>{
animate(0,500,{
    duration:1,
    onUpdate:(v)=>projectCount.current.textContent = v.toFixed()
})
    }
    const animation = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },

        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },

        },
    };

  return(
    <>
        <div id="home">
            <section>
                <div>
                    <motion.h1 {...animation.h1}>
                        Hii, I Am <br /> Sarvaiya Pratik
                    </motion.h1>

                    <Typewriter options={{
                        strings:["A Developer","A Designer","A Creator"],
                        autoStart:true,
                        loop:true,
                        wrapperClassName:"typewriterpara"
                    }} />

                    <div>
                        <a href="mailto:pratikrajput125@gmail.com">Hire Me</a>
                        <a href="#work">Projects <BsArrowUpRight/></a>
                    </div>
                    
                    
                    
                        <article className='top'>
                            <p>Contact Me</p>

                            <span>pratikrajput125@gmail.com</span>
                        </article>

                    <aside>
                   


                        <article className="leftside">
                            <p>
                                +<motion.span whileInView={animationProjectCount} ref={projectCount}></motion.span>
                            </p>
                            <span>Projects Done</span>
                        </article>

                        <article className='rightside' >
                            <p>
                                + <motion.span whileInView={animationClientCount} ref={clientCount}></motion.span>
                            </p>
                            <span>Clients</span>
                        </article>

                    </aside>
                </div>
            </section>
            <section>
                <img src={me} alt="" />
            </section>
            <a href="#footer">

                <BsChevronDown/>
            </a>
        </div>
    </>
  )
}

export default Home
