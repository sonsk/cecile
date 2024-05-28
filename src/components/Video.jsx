import React from 'react';
import ReactPlayer from 'react-player';
import video from '../video/anniv.mp4'

export default function Video() {
  return (
    <div className="w-11/12 md:w-4/12 mx-auto m-4 flex justify-center items-center ">
            
            <ReactPlayer controls={true} url= {video}  />
    </div>
  )
}
