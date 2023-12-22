"use client";
import { bannerSliderData } from "@/data/Data";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerSection2 = () => {
  return (
    <section className="tl-2-banner">
      <Swiper 
      className="tl-2-banner-slider owl-carousel"
      loop={true}
      autoplay={{delay:2000}}
      navigation={{
        nextEl:'.owl-next',
        prevEl:'.owl-prev'
      }}
      modules={[Autoplay,Navigation]}
      >
        {bannerSliderData.map((item) => (
          <SwiperSlide
            className={`tl-2-banner-slide ${item.banner} bg-defaults pt-380`}
            key={item.id}
          >
            <div className="container">
              <div className="tl-2-banner-slide-txt">
                <h1 className="tl-2-banner-title">
                  {item.title}
                </h1>
                <p className="tl-2-banner-descr">
                  {item.desc}
                </p>
                <a href="#" className="tl-2-blog-btn">
                  <span className="tl-2-blog-btn-icon">
                    <i className="fa-regular fa-arrow-up-right"></i>
                  </span>{" "}
                  Find Out More
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="tl-2-banner-slider-nav-container container">
        <div 
        className="tl-2-services-slider-nav" 
        id="tl-2-banner-slider-nav"
        >
          <button type="button" role="presentation" className="owl-prev">
            <i className="fa-light fa-arrow-left"></i>
          </button>
          <button type="button" role="presentation" className="owl-next"> 
            <i className="fa-light fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection2;
