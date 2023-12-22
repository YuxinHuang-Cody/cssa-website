'use client'
import { membershipList } from '@/data/Data'
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const MemberSlider2 = () => {
  return (
    <section className="tl-6-membership tl-9-membership">
        <div className="container">
            <Swiper 
            className="tl-6-members tl-9-members owl-carousel"
            slidesPerView={5}
            autoplay={{delay: 2000, disableOnInteraction: true}}
            modules={[Autoplay]}
            >
                {membershipList.map((item) => (
                    <SwiperSlide className="tl-6-member tl-9-member" key={item.id}>
                        <img src={item.imgSrc} alt="Member logo"/>
                    </SwiperSlide>
                ))}
                <div className="tl-6-members-nav">
                <button className="tl-6-members-prev">
                    <i className="fa-regular fa-arrow-left"></i>
                </button>
                <button className="tl-6-members-next">
                    <i className="fa-regular fa-arrow-right"></i>
                </button>
                </div>
            </Swiper>
        </div>
    </section>
  )
}

export default MemberSlider2