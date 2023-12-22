'use client'
import { eventList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const MusicEventSlider = () => {

  return (
    <section className="tl-9-events tl-9-section-spacing">
        <div className="container">
            <div className="tl-9-section-heading text-center text-lg-start">
                <div className="row gy-3 align-items-center">
                    <div className="col-sm-6 text-center text-sm-start">
                        <h2 className="tl-9-section-title music-event-section" data-text="Our Events">Music Events</h2>
                    </div>

                    <div className="col-sm-6 text-center text-lg-end">
                        <div className="tl-9-events-slider-nav">
                            <button type="button" role="presentation" className="owl-prev">
                                <i className="fa-light fa-arrow-left"></i>
                            </button>

                            <button type="button" role="presentation" className="owl-next"> 
                                <i className="fa-light fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tl-9-events-slider-timeline owl-carousel d-flex"></div>

            <Swiper 
            className="tl-9-events-slider-content owl-carousel"
            slidesPerView={3}
            slidesPerGroup={3}
            spaceBetween={30}
            autoplay={true}
            pagination={{
                el: '.tl-9-events-slider-timeline.owl-carousel',
                bulletClass: 'timeline-step',
                bulletActiveClass: 'clicked',
                clickable: true,
            }}
            navigation={{
                prevEl: '.owl-prev',
                nextEl: '.owl-next'
            }}
            modules={[Autoplay,Pagination,Navigation]}
            breakpoints={{
                0: {
                    spaceBetween: 10,
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
    
                480: {
                    slidesPerView: 1.4,
                    spaceBetween: 15,
                },
    
                768: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                    slidesPerGroup: 2
                },
    
                992: {
                    slidesPerView: 2.5,
                    spaceBetween: 25,
                },
    
                1200: {
                    spaceBetween: 30,
                    slidesPerView: 3,
                }
            }}
            >
                {eventList.slice(5,14).map((item) => (
                    <SwiperSlide className="tl-9-event" key={item.id}>
                        <div className="tl-9-event-img">
                            <img src={item.imgSrc} alt="Article Image"/>
                        </div>

                        <div className="tl-9-event-txt">
                            <div className="tl-3-single-event-info">
                                <h6 className="tl-3-single-event-location">
                                    <i className="fa-regular fa-location-dot"></i> {item.location}
                                </h6>
                                <h6 className="tl-3-single-event-time">
                                    <i className="fa-regular fa-clock"></i> {item.startTime} - {item.endTime}
                                </h6>
                            </div>
                            <h3 className="tl-6-latest-article-title"><Link href={`/event/${item.slug}`}>{item.title}</Link></h3>
                            <Link href={`/event/${item.slug}`} className="tl-9-event-btn">Get Ticket <i className="fa-regular fa-arrow-right"></i></Link>
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    </section>
  )
}

export default MusicEventSlider