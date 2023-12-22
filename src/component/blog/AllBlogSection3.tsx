'use client'
import { useTalimContext } from '@/context/TalimContext'
import Link from 'next/link'
import React from 'react'

const AllBlogSection3 = () => {
    const {displayedBlogs3} = useTalimContext()
  return (
    <section className="tl-inner-blogs pt-120 pb-50">
        <div className="container">
            <div className="row g-3 g-xl-4">
                {displayedBlogs3.map((item) => (
                 <div className="col-lg-4 col-md-6" key={item.id}>
                    <div className="tl-3-single-blog">
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
                                    <i className="fa-regular fa-comments"></i> {item.comments} Comments
                                </div>
                            </div>
                            <h4 className="tl-3-single-blog-title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h4>
                            <p className="tl-3-single-blog-descr">{item.desc}</p>
                            <Link href={`/blog/${item.slug}`} className="tl-3-single-blog-btn">Read More <i className="fa-regular fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>   
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default AllBlogSection3