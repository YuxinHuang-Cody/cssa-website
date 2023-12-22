'use client'
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const BannerSlider = () => {
  return (
    <section className="tl-6-banner pb-50 pt-50 ml-30 mr-30">
        <Swiper 
        className="tl-6-banner-slider swiper-container"
        slidesPerView='auto'
        autoplay={true}
        modules={[Autoplay]}
        breakpoints={{
            0: {
              slidesPerView: 1,
              slideActiveClass: 'swiper-slide-next',
              slideNextClass: 'swiper-slide-active',
            },
            992: {
              slidesPerView: 'auto',
            },
            1200: {
              spaceBetween: 30,
            },
          }}
        >
            <SwiperSlide className="swiper-slide">
                <div className="tl-6-banner-post">
                    <div className="tl-6-banner-post-img">
                        <img src="assets/images/tl-6/banner-img-1.jpg" alt="Banner Image"/>
                    </div>

                    <div className="tl-6-banner-post-txt">
                        <div className="tl-6-banner-post-infos">
                            <h6 className="tl-6-info-pill">April 18, 2023</h6>
                            <h6 className="tl-6-info-pill">Education</h6>
                        </div>
                        <h3 className="tl-6-banner-post-title"><a href="#">The Scholar's Chronicle: Unveiling The Secrets of Education.</a></h3>
                        <a href="#" className="tl-6-banner-post-btn"><span className="tl-6-banner-post-btn-txt">Read More</span> <i className="fa-regular fa-arrow-right"></i></a>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
                <div className="tl-6-banner-post">
                    <div className="tl-6-banner-post-img">
                        <img src="assets/images/tl-6/banner-img-2.jpg" alt="Banner Image"/>
                    </div>

                    <div className="tl-6-banner-post-txt">
                        <div className="tl-6-banner-post-infos">
                            <h6 className="tl-6-info-pill">April 18, 2023</h6>
                            <h6 className="tl-6-info-pill">Education</h6>
                        </div>
                        <h3 className="tl-6-banner-post-title"><a href="#">Educational Insights: Discovering the Art of Learning.</a></h3>
                        <a href="#" className="tl-6-banner-post-btn"><span className="tl-6-banner-post-btn-txt">Read More</span> <i className="fa-regular fa-arrow-right"></i></a>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
                <div className="tl-6-banner-post">
                    <div className="tl-6-banner-post-img">
                        <img src="assets/images/tl-6/banner-img-3.jpg" alt="Banner Image"/>
                    </div>

                    <div className="tl-6-banner-post-txt">
                        <div className="tl-6-banner-post-infos">
                            <h6 className="tl-6-info-pill">April 18, 2023</h6>
                            <h6 className="tl-6-info-pill">Education</h6>
                        </div>
                        <h3 className="tl-6-banner-post-title"><a href="#">Educational Insights: Discovering the Art of Learning.</a></h3>
                        <a href="#" className="tl-6-banner-post-btn"><span className="tl-6-banner-post-btn-txt">Read More</span> <i className="fa-regular fa-arrow-right"></i></a>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
                <div className="tl-6-banner-post">
                    <div className="tl-6-banner-post-img">
                        <img src="assets/images/tl-6/banner-img-2.jpg" alt="Banner Image"/>
                    </div>

                    <div className="tl-6-banner-post-txt">
                        <div className="tl-6-banner-post-infos">
                            <h6 className="tl-6-info-pill">April 18, 2023</h6>
                            <h6 className="tl-6-info-pill">Education</h6>
                        </div>
                        <h3 className="tl-6-banner-post-title"><a href="#">Educational Insights: Discovering the Art of Learning.</a></h3>
                        <a href="#" className="tl-6-banner-post-btn"><span className="tl-6-banner-post-btn-txt">Read More</span> <i className="fa-regular fa-arrow-right"></i></a>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
                <div className="tl-6-banner-post">
                    <div className="tl-6-banner-post-img">
                        <img src="assets/images/tl-6/banner-img-2.jpg" alt="Banner Image"/>
                    </div>

                    <div className="tl-6-banner-post-txt">
                        <div className="tl-6-banner-post-infos">
                            <h6 className="tl-6-info-pill">April 18, 2023</h6>
                            <h6 className="tl-6-info-pill">Education</h6>
                        </div>
                        <h3 className="tl-6-banner-post-title"><a href="#">Educational Insights: Discovering the Art of Learning.</a></h3>
                        <a href="#" className="tl-6-banner-post-btn"><span className="tl-6-banner-post-btn-txt">Read More</span> <i className="fa-regular fa-arrow-right"></i></a>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default BannerSlider