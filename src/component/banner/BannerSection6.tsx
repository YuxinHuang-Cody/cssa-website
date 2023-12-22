'use client'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slideData = [
  {
    id: 1,
    title: 'Dance to the',
    lastWord: 'Rhythm',
    subtitle: 'Unlock Your Inner Dancer',
    imgSrc: '',
  },
  {
    id: 2,
    title: 'Groove with',
    lastWord: 'Grace',
    subtitle: 'Discover Your Dance Passion',
    imgSrc: 'tl-7-banner-single-slide-2',
  },
  {
    id: 3,
    title: 'Embrace the',
    lastWord: 'Beat',
    subtitle: 'Join Our Dance Community',
    imgSrc: 'tl-7-banner-single-slide-3',
  },
];

const BannerSection6 = () => {
  return (
    <section className="tl-7-banner">
        <Swiper
        className="tl-7-banner-slider owl-carousel"
        loop={true}
        autoplay={true}
        modules={[Autoplay, Pagination]}
        pagination={{
            el: '.tl-7-banner-slider-dots',
            clickable: true,
            bulletClass: 'custom-tl-7',
            bulletActiveClass: 'active',
            renderBullet: function (index, className) {
            return (
                '<button class="' + className + '">'
                + '<img src="assets/images/tl-7/banner-dot-' + (index + 1) + '.png" alt="Slider Image ' + (index + 1) + '" />'
                + '</button>'
            );
            },
        }}
        >
        {slideData.map((item) => (
          <SwiperSlide
            className={`tl-7-banner-single-slide ${item.imgSrc}`}
            key={item.id}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xxl-8 col-lg-9 col-10 col-xxs-12">
                  <div className="tl-7-banner-txt">
                    <h6 className="tl-7-banner-sub-title">{item.subtitle}</h6>
                    <h1 className="tl-7-banner-title">
                      {item.title} <span className="last-word">{item.lastWord}</span>
                    </h1>

                    <div className="tl-7-banner-btns">
                      <a href="#" className="tl-7-def-btn">
                        Get started
                      </a>
                      <a href="#" className="tl-7-def-btn tl-7-def-btn-2">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="tl-7-banner-slider-dots">
      </div>
    </section>
  );
}

export default BannerSection6;
