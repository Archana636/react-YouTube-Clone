import React from "react"
import "./_video.scss"

import {AiFillEye} from 'react-icons/ai';

const Video = ()=> {
  return(
   <div className="video">
     <div className="video__top">
<img src="https://i.ytimg.com/vi/7CqJlxBYj-M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDxjFwmXzKz2hjiFBAJbaj3SckP4A" alt="Mern Stack"/>
<span>05:43</span>
</div>
<div className="video__title">
MERN Stack in 2 hours
</div>
   <div className="video__details">
     <span>
   <AiFillEye/> 5m Views •
     </span>
  <span>
    5 days ago 
    </span>


   </div>
   <div className="video__channel">
     <img src="https://yt3.ggpht.com/ytc/AKedOLRkU2-RDemsCSaVVsPwc-yxtWruCB1Gr2VIgQKOKg=s88-c-k-c0x00ffffff-no-rj" alt=""/>
     <p>CodeCamp</p>
   </div>
   </div>
  )
}
  
export default Video;