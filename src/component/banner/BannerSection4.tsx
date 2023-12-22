"use client";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerSection4 = () => {
  // Define an array of slide data objects
  const slideData = [
    {
      subTitle: "Learn how you want",
      title: "Education is The Best key Success in Life.",
      description:
        "Through a combination of lectures, readings, and discussions, students will gain a solid foundation in educational psychology.",
    },
    {
      subTitle: "Explore your interests",
      title: "Unlock Your Potential with Lifelong Learning.",
      description:
        "Our diverse courses cater to various interests, helping you pursue your passion and enhance your knowledge.",
    },
    {
      subTitle: "Flexible Learning Options",
      title: "Adaptable Education for Busy Lifestyles.",
      description:
        "Our online platform offers flexibility, allowing you to balance your education with your busy schedule.",
    },
  ];

  return (
    <section className="tl-4-banner">
      <Swiper
        className="tl-4-banner-slider owl-carousel"
        loop={true}
        autoplay={true}
        pagination={{
          el: ".tl-4-banner-slider-dots",
          bulletClass: "owl-dot",
          bulletElement: "button",
          bulletActiveClass: "active",
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`tl-4-banner-slide slide-${index + 1} bg-defaults`}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-9 col-10 col-xxs-12">
                  <div className="tl-4-banner-txt">
                    <h6 className="tl-4-banner-sub-title">{slide.subTitle}</h6>
                    <h1 className="tl-4-banner-title">{slide.title}</h1>
                    <p className="tl-4-banner-descr">{slide.description}</p>
                    <a href="#" className="tl-4-banner-btn">
                      More Details <i className="fa-light fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="tl-4-banner-slider-dots"></div>
    </section>
  );
};

export default BannerSection4;
