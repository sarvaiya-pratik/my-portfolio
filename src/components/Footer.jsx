import React from 'react'
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp} from "react-icons/ai"
import f1 from "../asset/f2.jpeg"

const Footer = () => {
  return (
    <footer id='footer'>

        <div>
            <img src={f1} alt="" />

            <h2>Pratik Sarvaiya</h2>
            <p>Motivation is temporary but discipline last forever..</p>

        </div>

        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://www.youtube.com/@spcreation4300"><AiFillYoutube/><span>You Tube</span></a>
                <a href="https://www.instagram.com/pratiksaravaiya/?igshid=YmMyMTA2M2Y%3D"><AiFillInstagram/><span>Instagram</span></a>
                <a href="https://www.facebook.com/pratik.saravaiya?mibextid=ZbWKwL"><AiFillFacebook/><span>Facebook</span></a>
                <a href=""><AiFillGithub/><span>GitHub</span></a>
            </article>
        </aside>

        

       <a href="#home"><AiOutlineArrowUp/></a>
       

    </footer>
  )
}

export default Footer
