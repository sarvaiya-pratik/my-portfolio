import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import data from "../asset/data.json"
import "react-responsive-carousel/lib/styles/carousel.min.css"


const Work = () => {
  return (
    <div id='work'>

        <h2>Work</h2>
        <section>
            <article>
                <Carousel className='workItem' interval={2000} infiniteLoop={true} autoPlay={true}  showStatus={false} showThumbs={false} showIndicators={false} preventMovementUntilSwipeScrollTolerance={true} >
                    {
                     data.projects.map((d,i)=>{
                       return(
        <div className="workItem">

                            <img src={d.imgsrc} alt={d.title} />
                            <aside>
                                <h3>{d.title}</h3>
                                <p>{d.desc}</p>
                                <a target={'blank'} href={d.url}>View Demo</a>
                            </aside>
                </div>

                           
                        )
                     })
                    }
                </Carousel>
                </article>
            
        </section>
      
    </div>
  )
}

export default Work
