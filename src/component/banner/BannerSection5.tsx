'use client'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const slideData = [
    {
      title: 'Discover the World of Art',
      description: 'Explore a creative journey through various forms of art and unleash your artistic potential.',
      button1Text: 'Explore Courses',
      button2Text: 'Learn More',
    },
    {
      title: 'Unlock the Power of Science',
      description: 'Dive into the fascinating world of science and discover the wonders of the natural universe.',
      button1Text: 'Start Exploring',
      button2Text: 'Get Started',
    },
    {
      title: 'Embark on a Literary Adventure',
      description: 'Immerse yourself in the world of literature and let words transport you to new realms of imagination.',
      button1Text: 'Begin Your Journey',
      button2Text: 'Read More',
    },
  ];
  
  const BannerSection5 = () => {
    return (
      <section className="tl-5-banner">
        <Swiper
          className="tl-5-banner-slider owl-carousel"
          autoplay={true}
          navigation={{
            nextEl: '.owl-next',
            prevEl: '.owl-prev',
          }}
          modules={[Autoplay, Navigation]}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index} className={`tl-5-banner-single-slide tl-5-banner-single-slide-${index + 1}`}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="tl-5-banner-txt">
                      <h1 className="tl-5-banner-title">{slide.title}</h1>
                      <p className="tl-5-banner-descr">{slide.description}</p>
                      <div className="tl-1-banner-btns tl-5-banner-btns">
                        <a href="#" className="tl-5-def-btn">
                          {slide.button1Text} <i className="fa-regular fa-arrow-right-long"></i>
                        </a>
                        <a href="#" className="tl-def-btn">
                          {slide.button2Text} <i className="fa-regular fa-arrow-right-long"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="owl-nav">
            <button className="owl-prev">
              <img src="assets/images/tl-5/banner-slider-arrow.png" alt="arrow" />
            </button>
            <button className="owl-next">
              <img src="assets/images/tl-5/banner-slider-arrow-2.png" alt="arrow" />
            </button>
          </div>
        </Swiper>
      </section>
    );
  };
  
  export default BannerSection5;
  