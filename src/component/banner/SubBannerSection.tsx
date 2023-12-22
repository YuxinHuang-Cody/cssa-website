"use client";
import React from "react";
import Slider from "react-slick";

const SubBannerSection = () => {
    const settingsReverse = {
    dots: false,
    arrows: false,
    infinite: true, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 18000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    rtl: true,
    vertical:false,
    pauseOnHover: false,
    };

    const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 0,
    vertical: false,
    cssEase: "linear",
    pauseOnHover: false,
    };
  return (
    <section className="tl-1-sub-banner pt-50 text-center">
      <div className="sub-banner-img-container">
        <img src="assets/images/tl-1/sub-banner.png" alt="Sub Banner Image" />
      </div>
      
      <div className="tl-1-sub-banner-text-top">
        <Slider
        {...settingsReverse} 
        className="tl-1-sub-banner-ticker tl-1-sub-banner-ticker-2"
        >
          <h3>Take Best Course Online For Free</h3>
          <></>
        </Slider>
      </div>

      <div className="tl-1-sub-banner-text">
        <Slider 
        {...settings}
        className="tl-1-sub-banner-ticker">
          <h3>Take Best Course Online For Free</h3>
          <></>
        </Slider>
      </div>
    </section>
  );
};

export default SubBannerSection;
