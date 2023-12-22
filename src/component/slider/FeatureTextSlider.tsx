'use client'
import React from 'react'
import Slider from 'react-slick';

const FeatureTextSlider = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 0,
        vertical: false,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        };
  return (
    <Slider className="tl-13-about-features" {...settings}>
        <span className="tl-13-about-feature">Continuing </span>
        <span className="tl-13-about-feature">Academy </span>
        <span className="tl-13-about-feature">Learning management </span>
        <span className="tl-13-about-feature">teaching </span>
        <span className="tl-13-about-feature">Learning </span>
    </Slider>
  )
}

export default FeatureTextSlider