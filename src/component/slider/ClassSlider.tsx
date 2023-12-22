'use client'
import { courseList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const ClassSlider = () => {
  return (
    <section className="tl-9-classes tl-9-section-spacing">
        <div className="container">
            <div className="tl-9-section-heading">
                <h2 className="tl-9-section-title class-slider-section" data-text="Our Classes">Most Popular Classes</h2>
            </div>

            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={true}
            navigation={{
                nextEl: '.owl-next',
                prevEl: '.owl-prev'
            }}
            modules={[Autoplay,Navigation]} 
            className="tl-9-classes-slider owl-carousel"
            breakpoints={{
                0: {
                    spaceBetween: 20,
                    navigation: false,
                    slidesPerView: 1,
                },
    
                768: {
                    spaceBetween: 24,
                    slidesPerView: 2,
                },
    
                992: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
    
                1200: {
                    navigation: true,
                    spaceBetween: 30,
                }
            }}
            >
                {courseList.slice(39,46).map((item) => (
                 <SwiperSlide className="tl-9-class tl-9-program" key={item.id}>
                    <span className="tl-9-class-tag">{item.price}</span>
                    <img src={item.imgSrc} alt="class image" className="tl-9-class-img"/>

                    <div className="tl-9-class-infos">
                        <a href="#" className="tl-9-class-category">instrument</a>
                        <span className="tl-9-class-duration"><img src="assets/images/tl-9/calender.png" alt="Icon"/>{item.duration} month</span>
                    </div>

                    <h3 className="tl-9-program-title"><Link href={`/course/${item.slug}`}>{item.title}</Link></h3>
                    <p className="tl-9-program-descr">{item.desc}</p>
                    <Link href={`/course/${item.slug}`} className="tl-9-program-btn">Learn More <i className="fa-regular fa-arrow-right"></i></Link>
                </SwiperSlide>   
                ))}
               
            </Swiper> 
            <div className="owl-nav">
            <button type="button" role="presentation" className="owl-prev">
                <i className="fa-regular fa-arrow-left"></i>
            </button>
            <button type="button" role="presentation" className="owl-next">
                <i className="fa-regular fa-arrow-right"></i>
            </button>
        </div>
        </div>
    </section>
  )
}

export default ClassSlider