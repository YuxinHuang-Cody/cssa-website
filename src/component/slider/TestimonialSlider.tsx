'use client'
import { testimonialList } from '@/data/Data'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
interface PaddingProps {
    padding: string;
}
const TestimonialSlider:React.FC<PaddingProps>  = ({padding}) => {
  return (
    <section className={`tl-1-testimonial ${padding}`}>
        <div className="container">
            <div className="tl-1-section-heading">
                <h2 className="tl-1-section-title">What Student Says?</h2>
            </div>

            <div className="tl-1-testimonial-slider-container">
                <Swiper 
                className="tl-1-testimonial-slider owl-carousel"
                slidesPerView={1}
                loop={true}
                pagination={{
                    bulletElement:'button',
                    bulletClass:'testimonial-bullet',
                    bulletActiveClass:'active'
                }}
                autoplay={{
                    delay:2000,
                    disableOnInteraction: true,
                }}
                modules={[Autoplay,Pagination]}
                >
                    {testimonialList.map((item) => (
                        <SwiperSlide className="tl-1-testimony" key={item.id}>
                        <img src={item.imgSrc} alt="User image" className="tl-1-testimony-img"/>

                        <div className="tl-1-testimony-txt">
                            <span className="tl-1-testimony-stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </span>
                            <p className="tl-1-testimony-review">{item.review}</p>
                            <div className="tl-1-reviewer">
                                <div className="tl-1-reviewer-txt">
                                    <h6 className="tl-1-reviewer-name">{item.name}</h6>
                                    <span className="tl-1-reviewer-label">{item.label}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                    
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default TestimonialSlider