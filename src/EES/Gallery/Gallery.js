import background from './Card.png';
import Carousel from './Carousel';
import currbk from './CurrentBkg.png';
import './Galley.css';
import Navbar from '../Navbar/Navbar';
import leftimg from './leftimg.png';
import rightimg from './rightimg.png';

const Gallery = () => {
  return (
    <div className="entire-page-gallery">
      <Navbar />
      <div className="ees-gallery-6B">
        <div className="gallery-div">
          <h1 className="gallery-heading">GALLERY</h1>
        </div>
        <img src={background} className="mobile-heading-background"></img>
        <img src={leftimg} className="left-carousel-background"></img>
        <div className="gallery-workshop-container">
          <img src={currbk} className="current-carousel-bk"></img>
          <img src={background} className="carousel-background"></img>
          <h1 className="carousel-heading" id="workshop-gallery-heading">
            Workshops
          </h1>
          <div className="gallery-design-box" id="workshop-gallery-box-1"></div>
          <div className="gallery-design-box" id="workshop-gallery-box-2"></div>
          <Carousel reqArr="ees" />
        </div>
        <div className="right-carousel-div">
          <img src={rightimg} className="right-carousel-background"></img>
        </div>
        <div className="gallery-gradient" id="workshop-gallery-gradient"></div>
        <img src={background} className="mobile-heading-background"></img>
        <img src={leftimg} className="left-carousel-background"></img>
        <div className="gallery-workshop-container">
          <img src={currbk} className="current-carousel-bk"></img>
          <img src={background} className="carousel-background" id="udyam-gallery-carousel-bkg"></img>
          <h1 className="carousel-heading" id="udyam-gallery-heading">
            Udyam
          </h1>
          <div className="gallery-design-box" id="workshop-gallery-box-1"></div>
          <div className="gallery-design-box" id="workshop-gallery-box-2"></div>
          <Carousel reqArr="udyam" />
        </div>
        <div className="right-carousel-div">
          <img src={rightimg} className="right-carousel-background"></img>
        </div>
        <div className="gallery-gradient" id="udyam-gallery-gradient"></div>
        <img src={background} className="mobile-heading-background"></img>
        <img src={leftimg} className="left-carousel-background"></img>
        <div className="gallery-workshop-container">
          <img src={currbk} className="current-carousel-bk"></img>
          <img src={background} className="carousel-background" id="udgam-gallery-carousel-bkg"></img>
          <h1 className="carousel-heading" id="udgam-gallery-heading">
            Mashal
          </h1>
          <div className="gallery-design-box" id="workshop-gallery-box-1"></div>
          <div className="gallery-design-box" id="workshop-gallery-box-2"></div>
          <Carousel reqArr="mashal" />
        </div>
        <div className="right-carousel-div">
          <img src={rightimg} className="right-carousel-background"></img>
        </div>
        <div className="gallery-gradient" id="mashal-gallery-gradient"></div>
        <img src={background} className="mobile-heading-background"></img>
        <img src={leftimg} className="left-carousel-background"></img>
        <div className="gallery-workshop-container">
          <img src={currbk} className="current-carousel-bk"></img>
          <img src={background} className="carousel-background" id="mashal-gallery-carousel-bkg"></img>
          <h1 className="carousel-heading" id="mashal-gallery-heading">
            Udgam
          </h1>
          <div className="gallery-design-box" id="workshop-gallery-box-1"></div>
          <div className="gallery-design-box" id="workshop-gallery-box-2"></div>
          <Carousel reqArr="udgam" />
        </div>
        <div className="right-carousel-div">
          <img src={rightimg} className="right-carousel-background"></img>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
