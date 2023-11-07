import React, { useEffect, useState } from 'react';

import subway from '../assets/subway.jpeg';
import trike from '../assets/trike.jpg'; 
import gig from '../assets/gig.jpeg'; 
import roadtrip from '../assets/roadtrip.jpeg'; 

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
    filter: 'blur(3px)', // Adjust the blur amount as needed
    zIndex: -1,
  };

  return (
    <div className="absolute z-1 top-0" style={backgroundStyle}>
    </div>
  );
}

export default Background;
