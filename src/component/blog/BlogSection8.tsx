'use client'
import { blogList } from '@/data/Data';
import Link from 'next/link';
import React, { useRef } from 'react'
import Slider from 'react-slick';

const BlogSection8 = () => {
    const sliderRef = useRef<Slider | null>(null);
    const settings = {
        slidesToShow: 3,
        vertical: true,
        arrows: false,
        swipe: false,
        autoplay: true,
        speed: 1000,
        infinite: true,
    }
  return (
    <section className="tl-12-blogs tl-11-section-spacing" data-background="assets/images/tl-12/blogs-bg.png">
        <div className="container">
            <div className="row g-0 gy-4 justify-content-center">
                <div className="col-xl-5 col-lg-10">
                    <div className="tl-12-blogs-txt">
                        <div className="tl-12-section-heading tl-12-blogs-heading">
                            <h2 className="tl-12-section-title">Latest News Blogs & Articles.</h2>
                            <p className="tl-12-section-descr">There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected randomized words which don't look even slightly believable.</p>
                            <a href="#">View All News <i className="fa-regular fa-arrow-right-long"></i></a>
                        </div>

                        <div className="tl-12-blogs-slider-nav">
                        <button 
                        type="button" 
                        className="tl-12-blog-nav-prev"
                        onClick={() => sliderRef.current?.slickPrev()}
                        >
                            <i className="fa-light fa-arrow-up"></i>
                        </button>

                        <button 
                        type="button" 
                        className="tl-12-blog-nav-next"
                        onClick={() => sliderRef.current?.slickNext()}
                        >
                            <i className="fa-light fa-arrow-down"></i>
                        </button>
                        </div>
                    </div>
                </div>

                <div className="col-xl-7 col-lg-10">
                    <Slider {...settings} className="tl-12-blogs-slider" ref={sliderRef}>
                        {blogList.slice(6,10).map((item) => (
                         <div className="tl-12-blogs-slide" key={item.id}>
                            <div className="tl-3-single-blog tl-12-blog">
                                <div className="tl-3-single-blog-img">
                                    <img src={item.imgSrc} alt="Blog Image"/>
                                    <span className="tl-3-single-blog-tag">{item.category}</span>
                                </div>

                                <div className="tl-3-single-blog-txt">
                                    <div className="tl-3-single-blog-info">
                                        <div className="tl-3-single-blog-single-info">
                                            <i className="fa-regular fa-clock"></i> {item.date}
                                        </div>
                                        <div className="tl-3-single-blog-single-info">
                                            <i className="fa-regular fa-comments"></i> 24 Comments
                                        </div>
                                    </div>
                                    <h4 className="tl-3-single-blog-title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h4>
                                    <Link href={`/blog/${item.slug}`} className="tl-3-single-blog-btn">Read More <i className="fa-regular fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>   
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogSection8