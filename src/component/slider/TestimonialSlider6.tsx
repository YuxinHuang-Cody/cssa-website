'use client'
import React, { useState } from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide} from 'swiper/react'

const TestimonialSlider6 = () => {
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlayPause = () => {
      setIsPlaying(!isPlaying);
  };


  return (
    <>
    <div className="autoplay-progress">
      <svg viewBox="0 0 70 70">
        <circle cx="35" cy="35" r="33" />
      </svg>
      <span 
      role='button'
      onClick={togglePlayPause}
      >
        {isPlaying ? (
        <i className="fa-solid fa-sharp fa-pause"></i>
        ) : (
        <i className="fa-solid fa-sharp fa-play"></i>
        )}
      </span>
    </div>
   <Swiper 
    key={isPlaying ? 'playing' : 'paused'} 
    className="tl-12-testimonial-slider"
    navigation={{
        nextEl: '.tl-12-testimonial-slider-next',
        prevEl: '.tl-12-testimonial-slider-prev'
    }}
    loop={true}
    autoplay={isPlaying ? {
      delay: 2500,
      disableOnInteraction: false
    } : false}
    modules={[Navigation,Autoplay]}
    >
            <SwiperSlide>
                <div className="tl-12-testimony">
                    <p className="tl-12-testimony-txt">Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis, id luctus sem lacinia quis. Quisque sit amet velit sit amet dui hendrerit ultricies a id ipsum</p>

                    <div className="tl-12-testimony-user">
                        <h5 className="tl-12-testimony-user-name">Thomas R. Toe</h5>
                        <p className="tl-12-testimony-user-info">
                            <span className="tl-12-testimony-user-role">Product Designer</span>
                            <img className="tl-12-testimony-user-company" src="assets/images/tl-12/user-company.png" alt=""/>
                        </p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="tl-12-testimony">
                    <p className="tl-12-testimony-txt">Morbi consectetur elementum purus mattis cursus purus vel metus iaculis sagittis. Vestibulum molestie bibendum turpis, id luctus sem lacinia quis. Quisque sit amet velit sit amet dui hendrerit ultricies a id ipsum</p>

                    <div className="tl-12-testimony-user">
                        <h5 className="tl-12-testimony-user-name">Thomas R. Toe</h5>
                        <p className="tl-12-testimony-user-info">
                            <span className="tl-12-testimony-user-role">Product Designer</span>
                            <img className="tl-12-testimony-user-company" src="assets/images/tl-12/user-company.png" alt=""/>
                        </p>
                    </div>
                </div>
            </SwiperSlide>

        <div className="tl-12-testimonial-slider-nav">
            <button className="tl-12-testimonial-slider-prev"><i className="fa-regular fa-arrow-left"></i></button>
            <button className="tl-12-testimonial-slider-next"><i className="fa-regular fa-arrow-right"></i></button>
        </div>
    </Swiper>
    </>
  )
}

export default TestimonialSlider6