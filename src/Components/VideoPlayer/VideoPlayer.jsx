import React from 'react'
import "./VideoPlayer.scss"
import video from '../../assets/video-college.mp4'
const VideoPlayer = () => {
  return (
   <div className="video-player">
    <video src={video} autoPlay muted controls></video>
   </div>
  )
}

export default VideoPlayer