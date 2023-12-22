'use client'
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slideData = [
    {
      imgSrc: 'assets/images/tl-6/news-1.jpg',
      category: 'Education',
      title: 'The Education Emporium Resources and Ideas.',
      link: '#',
    },
    {
      imgSrc: 'assets/images/tl-6/news-2.jpg',
      category: 'Education',
      title: 'The Mindful Scholar Nurturing Knowledge.',
      link: '#',
    },
    {
      imgSrc: 'assets/images/tl-6/news-3.jpg',
      category: 'Education',
      title: 'The Education Emporium Resources and Ideas.',
      link: '#',
    },
    {
      imgSrc: 'assets/images/tl-6/news-4.jpg',
      category: 'Education',
      title: 'The EdTech Frontier Exploring Technology.',
      link: '#',
    },
    {
      imgSrc: 'assets/images/tl-6/news-5.jpg',
      category: 'Education',
      title: 'The Learning Odyssey: Journey to Knowledge.',
      link: '#',
    },
    {
      imgSrc: 'assets/images/tl-6/news-6.jpg',
      category: 'Education',
      title: 'Exploring the World of Educational Innovation.',
      link: '#',
    },
  ];
  

const TrendingSlider = () => {
  return (
    <section className="tl-6-news">
      <div className="container position-relative">
        <Swiper
          className="tl-6-news-slider owl-carousel"
          slidesPerView={3}
          spaceBetween={50}
          autoplay={true}
          loop={true}
          navigation={{
            nextEl: '.owl-next',
            prevEl: '.owl-prev'
          }}
          modules={[Autoplay,Navigation]}
          breakpoints={{
            0: {
                spaceBetween: 50,
                slidesPerView: 1,
            },

            576: {
                spaceBetween: 50,
                slidesPerView: 1,
            },

            768: {
                spaceBetween: 50,
                slidesPerView: 1,
                centeredSlides: true,
            },

            992: {
                spaceBetween: 50,
                slidesPerView: 2,
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1400: {
                spaceBetween: 60,
            }
        }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index} className="tl-6-news-slide">
              <img src={slide.imgSrc} alt="News Image" />
              <div className="tl-6-news-slide-txt">
                <span className="tl-6-info-pill">{slide.category}</span>
                <h5 className="tl-6-news-slide-title">
                  <a href={slide.link}>{slide.title}</a>
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="tl-6-slider-nav" id="tl-6-news-slider-nav"></div>
        <div className="tl-6-slider-nav disabled" id="tl-6-news-slider-nav">
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
}

export default TrendingSlider;
