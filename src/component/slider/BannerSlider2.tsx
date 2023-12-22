'use client'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const bannerImages = [
    {
        id: 1,
        imgSrc: "assets/images/tl-14/banner-bg-1.jpg",
    },
    {
        id: 2,
        imgSrc: "assets/images/tl-14/banner-bg-2.jpg",
    },
    {
        id: 3,
        imgSrc: "assets/images/tl-14/banner-bg-3.jpg",
    },
]
const BannerSlider2 = () => {
  return (
    <>
        <Swiper 
        className="tl-14-banner-slider owl-carousel"
        navigation={{
            nextEl: '.tl-14-banner-next',
            prevEl: '.tl-14-banner-prev'
        }}
        autoplay= {true}
        loop={true}
        modules={[Autoplay,Navigation]}
        >
            {bannerImages.map((item) => (
                <SwiperSlide key={item.id}>
                    <img 
                    className="tl-14-banner-slide" 
                    src={item.imgSrc}
                    alt="Banner Background"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
        <div className="tl-14-banner-slider-nav" id="tl-14-banner-slider-nav">
            <button type="button" role="presentation" className="tl-14-banner-prev">
                <i className="fa-light fa-arrow-left"></i>
            </button>
            <button type="button" role="presentation" className="tl-14-banner-next">
                <i className="fa-light fa-arrow-right"></i>
            </button>
        </div>
    </>
  )
}

export default BannerSlider2