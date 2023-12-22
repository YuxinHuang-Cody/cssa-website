'use client'
import { teacherList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const FacultySlider2 = () => {
  return (
    <section className="tl-7-faculty tl-7-section-spacing">
        <div className="container">
            <div className="tl-7-section-heading">
                <h6 className="tl-7-section-sub-title">Meet The Faculty</h6>
                <h2 className="tl-7-section-title">Meet The <span className="last-word">Faculty</span></h2>
            </div>

            <Swiper 
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
                el: '.owl-dots',
                bulletClass: 'owl-dot',
                bulletActiveClass: 'active',
                bulletElement: 'button',
                clickable: true,
            }}
            autoplay={true}
            modules={[Autoplay,Pagination]}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
    
                480: {
                    slidesPerView: 2,
                },
    
                768: {
                    slidesPerView: 3,
                },
    
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }}
            className="tl-3-staff-row tl-7-faculty-row owl-carousel">
                {teacherList.slice(20,26).map((item) => (
                  <SwiperSlide className="tl-3-single-staff tl-7-single-fac" key={item.id}>
                    <div className="tl-3-single-staff-img">
                        <img src={item.imgSrc} alt="Staff Image"/>
                        <ul className="tl-3-single-staff-socials">
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>

                    <div className="tl-3-single-staff-txt tl-7-single-fac-txt">
                        <h5 className="tl-3-single-staff-name"><Link href={`/staff/${item.slug}`}>{item.name}</Link></h5>
                        <span className="tl-3-single-staff-role">{item.position}</span>
                    </div>
                </SwiperSlide>  
                ))}
                
                <div className='owl-dots'></div>
            </Swiper>
        </div>
    </section>
  )
}

export default FacultySlider2