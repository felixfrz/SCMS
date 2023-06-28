import React, { useRef } from "react";
import { useParams } from 'react-router-dom';


function MyVid() {

  const videoRef = useRef(null);

  const { path } = useParams();


  return (
    <div className='container text-center embed-responsive embed-responsive-21by9'>
      <video
        className='embed-responsive-item w100'
        ref={videoRef}
        controls
        height='480'
        width='100%'
      >
        <source src={`/uploads/${path}`} type='video/mp4' />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

export default MyVid;