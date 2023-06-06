import React from 'react'
import data from "../asset/data.json"
const Timeline = () => { 
  return (
    <>
    <div id="timeline">
        <div className="timelineBox">
            {
                data.projects.map((d,i)=>{
                   return <TimelineItem
                    heading={d.title}
                    text={d.date}
                    key={i}
                    index={i}
                    />
                })
            }
        </div>
    </div>
    </>
  )
}

const TimelineItem = ({heading,text,index}) => (
    <div className={`timelineItem ${index % 2 ===0?"leftTimeline":"righTimeline"}`}>
<div>
<h2>{heading}</h2>
    <p>{text}</p>

</div>
   

    </div>
)
export default Timeline
