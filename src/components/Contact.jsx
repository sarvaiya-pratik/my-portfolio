import React, { useState } from 'react'
import vg from "../asset/vg.png"
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import {addDoc,collection} from "firebase/firestore"
import { db } from '../firebase'


const Contact = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [disableBtn,setDisableBtn] = useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setDisableBtn(true)
        try {
            await addDoc(collection(db,"contacts"),{
                name,
                email,
                message,
            })
            setEmail("");
            setMessage("");
            setName("");
        toast.success("Submited")
        setDisableBtn(false)
        } catch (error) {
            toast.error("Error")
        setDisableBtn(false)

            console.log(error)
        }
       




        console.log(name,email,message)
    }

    const animation={
        form:{
            initial:{
                x:"-100%",
                opacity:0,
            },
            whileInView:{
                x:"0",
                opacity:1,
            }
        },
        btn:{
            initial:{
                y:"-100%",
                opacity:0,
            },
            whileInView:{
                y:"0",
                opacity:1,
            },
           
        }
    }
  return (
    <div id="contact" onSubmit={handleSubmit}>
        <section>
            <motion.form action="" {...animation.form}>
                <h2>Contact Me</h2>

                <input type="text" placeholder='Your Name' required value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="email" placeholder='Your Email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" placeholder='Your Message' required value={message} onChange={(e)=>setMessage(e.target.value)}/>

                <motion.button className={disableBtn?"disableBtn":""} disabled={disableBtn} type='submit' {...animation.btn} transition={{delay:0.5}}>Send me</motion.button>
            </motion.form>
        </section>

        <aside>
            <img src={vg} alt="" />
        </aside>
    </div>
  )
}

export default Contact
