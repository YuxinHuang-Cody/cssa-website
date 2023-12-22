'use client'
import { membershipList } from '@/data/Data'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
interface MemberProps {
  style: string;
  swiperStyle: string;
  slideStyle: string;
}
const MembershipSlider:React.FC<MemberProps> = ({style,slideStyle,swiperStyle}) => {
  return (
    <section className={style}>
        <div className="container">
            <Swiper 
            className={`tl-6-members ${swiperStyle} owl-carousel`}
            slidesPerView={5}
            slidesPerGroup={1}
            loop={true}
            autoplay={{delay: 2000}}
            navigation={{
              nextEl: '.tl-6-members-next',
              prevEl: '.tl-6-members-prev',
            }}
            modules={[Autoplay,Navigation]}
            breakpoints={{
              0: {
                  slidesPerView: 3,
              },
  
              480: {
                  slidesPerView: 4,
              },
            }}
            >
                {membershipList.map((item) => (
                  <SwiperSlide className={`tl-6-member ${slideStyle}`} key={item.id}>
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

export default MembershipSlider