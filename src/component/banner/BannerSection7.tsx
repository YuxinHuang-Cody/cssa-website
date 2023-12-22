'use client'
import { useTalimContext } from '@/context/TalimContext'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import VideoModal from '../modal/VideoModal'

const BannerSection7 = () => {
    const {openVideoModal} = useTalimContext()
  return (
    <section className="tl-8-banner yellow-clr">
        <Swiper 
        className="tl-8-banner-slider owl-carousel"
        loop={true}
        autoplay={true}
        navigation={{
            prevEl:'.owl-prev',
            nextEl:'.owl-next'
        }}
        modules={[Autoplay,Navigation]}
        >
            <SwiperSlide className="tl-8-banner-slide">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8">
                            <div className="tl-8-banner-txt">
                                <h1 className="tl-8-banner-title">Driving School To Your Car is Smarter.</h1>
                                <p className="tl-8-banner-descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra dignissim mollis Suspendisse neque consectetur in mauris fermentum luctus quam.</p>

                                <div className="tl-8-banner-btns">
                                    <a href="#" className="tl-def-btn">Find Out More</a>
                                    <a 
                                    role='button'
                                    onClick={() => openVideoModal("https://www.youtube.com/embed/CggXSu_P2GQ?si=YOONcM_FvuR-EQf4")}
                                    className="tl-banner-video-btn"
                                    >
                                        <i className="fa-solid fa-sharp fa-play"></i><span className="text-decoration-underline">Watch Our Story</span>
                                        <svg className="eltdf-svg-circle">
                                            <circle cx="50%" cy="50%" r="50%"></circle>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className="tl-8-banner-slide tl-8-banner-slide-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8">
                            <div className="tl-8-banner-txt">
                                <h1 className="tl-8-banner-title">Driving School To Your Car is Smarter.</h1>
                                <p className="tl-8-banner-descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra dignissim mollis Suspendisse neque consectetur in mauris fermentum luctus quam.</p>

                                <div className="tl-8-banner-btns">
                                    <a href="#" className="tl-def-btn">Find Out More</a>
                                    <a 
                                    className="tl-banner-video-btn"
                                    onClick={() => openVideoModal("https://www.youtube.com/embed/vfqx-tB9mvM?si=xJ0qLtKsQadjjrfL" )}
                                    >
                                        <i className="fa-solid fa-sharp fa-play"></i>
                                        <span className="text-decoration-underline">Watch Our Story</span>
                                        <svg className="eltdf-svg-circle">
                                            <circle cx="50%" cy="50%" r="50%"></circle>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

        <div className="container">
            <div className="tl-8-banner-slider-nav">
                <button type="button" role="presentation" className="owl-prev">
                    <i className="fa-regular fa-arrow-left"></i>
                </button>
                <button type="button" role="presentation" className="owl-next"> 
                    <i className="fa-regular fa-arrow-right"></i>
                </button>
            </div>
        </div>
        <VideoModal/>
    </section>
  )
}

export default BannerSection7