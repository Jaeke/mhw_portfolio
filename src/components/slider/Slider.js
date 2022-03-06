import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Slider from 'react-slick';

import './Slider.style.scss';
import montaukImage from '../../assets/montauk_house.jpeg';
import flowerImage from '../../assets/flower_wine.jpeg';
import retailImage from '../../assets/bike_jacket.jpeg';

const Images = [montaukImage, flowerImage, retailImage];

const ImgSlider = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="right arrow" onClick={onClick}>
        <BsChevronRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="left arrow" onClick={onClick}>
        <BsChevronLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyload: true,
    speed: 800,
    slideToShow: 1,
    centerMode: true,
    centerPadding: 50,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    cssEase: 'ease',
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {Images.map((image, i) => (
          <div
            key={i}
            className={i === imageIndex ? 'slide activeSlide' : 'slide'}
          >
            <img src={image} alt={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImgSlider;
