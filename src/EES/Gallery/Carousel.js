import React, { useState, useRef } from 'react';
import left from './VectorL.png';
import right from './Vector.png';
import './Galley.css';
import Data from './Data';

const Carousel = ({ reqArr }) => {
  const arr = Data(reqArr);
  const currentImage = useRef(null);
  const prevImage = useRef(null);
  const nextImage = useRef(null);
  const [next, setNext] = useState(2);
  const [current, setCurrent] = useState(1);
  const [prev, setPrev] = useState(0);
  const prevClick = () => {
    prevImage.current.style.opacity = '0';
    currentImage.current.style.opacity = '0';
    currentImage.current.style.transform = 'scale(0.88)';
    nextImage.current.style.opacity = '0';
    setTimeout(() => {
      if (current == 0) {
        setCurrent(current + arr.length - 1); // depending on the number of images n update count to count + (n-1)
      } else {
        setCurrent(current - 1);
      }
      if (prev == 0) {
        setPrev(prev + arr.length - 1); // depending on the number of images n update count to count + (n-1)
      } else {
        setPrev(prev - 1);
      }
      if (next == 0) {
        setNext(next + arr.length - 1); // depending on the number of images n update count to count + (n-1)
      } else {
        setNext(next - 1);
      }
    }, 300);
  };
  const handleTransitionEnd = () => {
    prevImage.current.style.opacity = '1';
    prevImage.current.style.transform = 'scale(0.5)';
    currentImage.current.style.opacity = '1';
    currentImage.current.style.transform = 'scale(0.9)';
    nextImage.current.style.opacity = '1';
    nextImage.current.style.transform = 'scale(0.5)';
  };
  const nextClick = () => {
    prevImage.current.style.opacity = '0';
    currentImage.current.style.opacity = '0';
    currentImage.current.style.transform = 'scale(0.88)';
    nextImage.current.style.opacity = '0';
    setTimeout(() => {
      setNext((next + 1) % arr.length);
      setCurrent((current + 1) % arr.length);
      setPrev((prev + 1) % arr.length);
    }, 300);
  };
  return (
    <div className="workshop-carousel">
      <button className="carousel-btn" id="carousel-btn-left" onClick={nextClick}>
        <img src={left}></img>
      </button>
      <img className="img prev-image-gallery" src={arr[prev]} ref={prevImage} onTransitionEnd={handleTransitionEnd} />
      <img className="img current-image-gallery" src={arr[current]} ref={currentImage} onTransitionEnd={handleTransitionEnd} />
      <img className="img next-image-gallery" src={arr[next]} ref={nextImage} onTransitionEnd={handleTransitionEnd} />
      <button className="carousel-btn" id="carousel-btn-right" onClick={prevClick}>
        <img src={right}></img>
      </button>
    </div>
  );
};

export default Carousel;
