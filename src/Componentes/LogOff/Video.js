import React from 'react';
import video1 from './../../videos/ejemplo.mp4'

function VideoComponent() {
  return (
    <div>
    
      <video width="600" controls>
        <source src={video1} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}

export default VideoComponent;
