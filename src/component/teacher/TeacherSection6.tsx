'use client'
import { teacherList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const TeacherSection6 = () => {
  return (
    <section className="tl-1-teachers pt-120 pb-120">
        <div className="container">
            <div className="tl-14-section-heading">
                <h2 className="tl-14-section-title">Our Best Teachers.</h2>
                <Link href="/staff" className="tl-14-section-heading-action tl-def-btn tl-14-def-btn">View All member</Link>
            </div>

            <Swiper 
            className="tl-1-teachers-slider owl-carousel" 
            id="tl-14-teachers-slider"
            slidesPerView={3}
            spaceBetween={30}
            autoplay={true}
            loop={true}
            pagination={{
                el:'#tl-1-teachers-slider-dots',
                bulletClass: 'tl-14-dot',
                bulletActiveClass: 'active',
                bulletElement: 'button'
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                576: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                },
                1200: {
                    spaceBetween: 30,
                }
            }}
            >
                {teacherList.slice(0,6).map((item) => (
                 <SwiperSlide className="tl-1-teacher tl-14-teacher" key={item.id}>
                    <img src={item.imgSrc} alt="Teacher Image" className="tl-1-teacher-img"/>

                    <div className="tl-1-teacher-info tl-14-teacher-info">
                        <h5 className="tl-14-teacher-title"><Link href={`/staff/${item.slug}`}>{item.name}</Link></h5>
                        <h6 className="tl-14-teacher-sub-title">{item.position}</h6>
                    </div>
                </SwiperSlide>   
                ))}
                
            </Swiper>

            <div className="tl-6-slider-dots tl-14-slider-dots" id="tl-1-teachers-slider-dots"></div>
        </div>
    </section>
  )
}

export default TeacherSection6