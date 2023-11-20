import React, { useEffect, useState } from 'react';

import subway from '../assets/subway-optimized.jpg';
import trike from '../assets/trike-optimized.jpg'; 
import gig from '../assets/gig-optimized.jpg'; 
import roadtrip from '../assets/roadtrip-optimized.jpg'; 

function Background() {
  const [randImage, setRandImage] = useState(null);

  useEffect(() => {
    const images = [subway, trike, gig, roadtrip];
    const randIndex = Math.floor(Math.random() * images.length);
    setRandImage(images[randIndex]);
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${randImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    zIndex: -1,
  };

  return (
    <div className="absolute z-1 top" style={backgroundStyle}>
    </div>
  );
}

export default Background;
