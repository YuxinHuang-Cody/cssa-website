"use client";
import { aboutTestimonialList } from "@/data/Data";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
type Props = {
  pageStyle: string;
  singleCardStyle: string;
  navStyle: string;
};
const AboutTestimonialSlider = ({
  pageStyle,
  singleCardStyle,
  navStyle,
}: Props) => {
  return (
    <>
      <Swiper
        className="tl-testimonial-slider owl-carousel about-testimonial"
        slidesPerView={1.9}
        spaceBetween={60}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 2000 }}
        navigation={{
          nextEl: `.${navStyle}-testimonial-next`,
          prevEl: `.${navStyle}-testimonial-prev`,
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          480: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },

          576: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 1.8,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 1.9,
            spaceBetween: 40,
          },
          1400: {
            spaceBetween: 60,
            slidesPerView: 1.9,
          },
        }}
      >
        {aboutTestimonialList.map((item) => (
          <SwiperSlide className={singleCardStyle} key={item.id}>
            <p className={`${pageStyle}-testimony-txt`}>{item.desc}</p>

            <div className={`${pageStyle}-testimony-reviewer`}>
              <img
                src={item.imgSrc}
                alt="Person"
                className={`${pageStyle}-testimony-reviewer-img`}
              />
              <div className={`${pageStyle}-testimony-reviewer-info`}>
                <h6 className={`${pageStyle}-testimony-reviewer-name`}>
                  {item.name}
                </h6>
                <p className={`${pageStyle}-testimony-reviewer-label`}>
                  {item.label}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`${navStyle}-testimonial-slider-nav`}>
        <button className={`${navStyle}-testimonial-prev`}>
          <i className="fa-regular fa-arrow-left"></i>
        </button>
        <button className={`${navStyle}-testimonial-next`}>
          <i className="fa-regular fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
};

export default AboutTestimonialSlider;
