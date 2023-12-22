'use client'
import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const BlogSlider = () => {
  return (
    <section className="tl-2-blogs pt-120 pb-120">
            <div className="container">
                <div className="tl-2-section-heading">
                    <h2 className="tl-2-section-title">Our Blog & Article</h2>
                    <div className="tl-2-blogs-slider-nav" id="tl-2-blogs-slider-nav">
                        <button type="button" role="presentation" className="owl-prev">
                            <i className="fa-light fa-arrow-left"></i>
                        </button>
                        <button type="button" role="presentation" className="owl-next"> 
                            <i className="fa-light fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <Swiper 
                className="tl-2-blogs-row owl-carousel"
                slidesPerView={3}
                loop={true}
                spaceBetween={30}
                autoplay={true}
                navigation={{
                    nextEl: '.owl-next',
                    prevEl: '.owl-prev'
                }}
                modules={[Autoplay,Navigation]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
        
                    480: {
                        slidesPerView: 1.5,
                        centeredSlides: true,
                    },
        
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
        
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
        
                    1200: {
                        spaceBetween: 30,
                    }
                }}
                >
                    {blogList.slice(17,23).map((item) => (
                     <SwiperSlide className="tl-2-blog" key={item.id}>
                        <div className="tl-2-blog-img">
                            <img src={item.imgSrc} alt="Article Image"/>
                        </div>

                        <div className="tl-2-blog-txt">
                            <ul className="tl-2-blog-infos">
                                <li>{item.date}</li>
                                <li>{item.category}</li>
                            </ul>
                            <h3 className="tl-2-blog-title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h3>
                            <p className="tl-2-blog-descr">{item.desc}</p>
                            <Link href={`/blog/${item.slug}`} className="tl-2-blog-btn"><span className="tl-2-blog-btn-icon"><i className="fa-regular fa-arrow-up-right"></i></span> read more</Link>
                        </div>
                    </SwiperSlide>   
                    ))}
                    
                </Swiper>
            </div>
        </section>
  )
}

export default BlogSlider