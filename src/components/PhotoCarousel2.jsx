import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import style from '../styles/PhotoCarousel.module.css';
const PhotoCarousel = ({ images }) => {

  return (
    <div className={style.carousel2}>
    <Carousel  autoPlay infiniteLoop  showStatus={false} showArrows={false} showIndicators={false}  showThumbs={false} >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default PhotoCarousel;