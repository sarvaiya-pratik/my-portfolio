import React from 'react'

const Testmonial = () => {
  return (
    <>
     <div id="testimonial">
        <h2>Testmonial</h2>

        <section>
          <TestmonialCard name={"Shushant Rajput"} feedback={"Your Programing skills so good.."}/>
          <TestmonialCard name={"Dharmesh Vyas"} feedback={"Wow What a Portfolio. I can't Imagine in my mind.."}/>
          <TestmonialCard name={"Vipul Desai"} feedback={"I like your Projects Well Done Bro..."}/>
        </section>
     </div>
    </>
  )

  
}

const TestmonialCard = ({name,feedback}) =>(
   <article>
   
      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
      <h4>{name}</h4>
      <p>{feedback}</p>
    
   </article>
  )
export default Testmonial
