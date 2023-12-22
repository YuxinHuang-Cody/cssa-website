import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const BlogSection = () => {
  return (
    <section className="tl-1-blogs pt-120 pb-120">
        <div className="container">
            <div className="tl-1-section-heading">
                <h2 className="tl-1-section-title">Our Blog & Article</h2>
                <a href="#" className="tl-def-btn tl-1-header-btn">Free Consultation</a>
            </div>

            <div className="row gy-4 gy-sm-5 tl-1-blogs-row">
                {blogList.slice(0,2).map((item) => (
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
                            <Link href={`/blog/${item.slug}`} className="tl-1-blog-btn">Continue Reading <i className="fa-regular fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>  
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default BlogSection