'use client'
import { useTalimContext } from '@/context/TalimContext'
import Link from 'next/link'
import React from 'react'

const AllBlogSection = () => {
    const {displayedBlogs} = useTalimContext()
  return (
    <section className="tl-inner-blogs tl-inner-blogs-1 pt-120 pb-50" data-bg-color="var(--tl-1-bg-coffee)">
        <div className="container">
            <div className="row g-4 tl-1-blogs-row">
                {displayedBlogs.map((item) => (
                   <div className="col-lg-6" key={item.id}>
                    <div className="tl-1-blog">
                        <img src={item.imgSrc} alt="" className="tl-1-blog-img"/>

                        <div className="tl-1-blog-txt">
                            <div className="tl-1-blog-info">
                                <h6 className="tl-3-single-event-time"><i className="fa-light fa-calendar-lines"></i> {item.date}</h6>
                            </div>
                            <h4 className="tl-1-blog-title">
                                <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                            </h4>
                            <Link href={`/blog/${item.slug}`} className="tl-1-blog-btn">
                                Continue Reading 
                                <i className="fa-regular fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>  
                ))}
               
            </div>
        </div>
    </section>
  )
}

export default AllBlogSection