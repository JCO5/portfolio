import React, { useState, useEffect } from 'react';
import gigPhoto from "../assets/gig-optimized.jpg"
import roadtripPhoto from "../assets/roadtrip-optimized.jpg"
import trikePhoto from "../assets/trike-optimized.jpg"
import subwayPhoto from "../assets/subway-optimized.jpg"

const images = [gigPhoto, roadtripPhoto, trikePhoto, subwayPhoto];

const RandomImage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const instagramLink = "https://www.instagram.com/magnumopuz/";
  
    useEffect(() => {
      // Change image every 3 seconds
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
  
      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
    }, []);
  
    return (
      <>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
        <img className="border" loading="lazy" src={images[currentImage]} alt={`Slideshow Image ${currentImage + 1}`} />
        </a>
      </>
    );
  };
  
  export default RandomImage;