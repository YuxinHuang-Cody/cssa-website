'use client'
import { teacherList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const FacultySlider = () => {
  return (
    <section className="tl-5-faculties">
        <div className="container">
            <h2 className="tl-5-section-title">Meet The Faculty</h2>

            <Swiper 
            slidesPerView={4}
            spaceBetween={30}
            autoplay={true}
            loop={true}
            pagination={{
                bulletClass: 'owl-dot',
                bulletActiveClass: 'active',
                bulletElement: 'button',
                clickable: true,
            }}
            modules={[Autoplay,Pagination]}
            className="tl-5-faculties-slider owl-carousel"
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
                  slidesPerView: 4,
                  spaceBetween: 30,
              }
          }}
            >   
                {teacherList.slice(32,40).map((item) => (
                  <SwiperSlide className="tl-5-single-faculty" key={item.id}>
                    <span className="tl-5-single-faculty-role">{item.position}</span>
                    <img src={item.imgSrc} alt="Staff Image" className="tl-5-single-faculty-img"/>
                    <h4 className="tl-5-single-faculty-name"><Link href={`/staff/${item.slug}`}>{item.name}</Link></h4>
                    <div className="tl-5-single-faculty-socials">
                        <a href="#">TW</a>
                        <a href="#">BE</a>
                        <a href="#">LI</a>
                    </div>
                </SwiperSlide>  
                ))}
                
            </Swiper>
        </div>
    </section>
  )
}

export default FacultySlider