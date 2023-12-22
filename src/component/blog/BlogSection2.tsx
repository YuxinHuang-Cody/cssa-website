import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const BlogSection2 = () => {
  return (
    <section className="tl-3-blog tl-3-section-spacing">
        <div className="container">
            <h2 className="tl-3-section-title">Read Our Latest News</h2>

            <div className="tl-3-blog-row">
                <div className="row g-3 g-xl-4">
                    {blogList.slice(33,36).map((item) => (
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
                                        <i className="fa-regular fa-comments"></i> {item.comments !== null ? item.comments :'20'} Comments
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
        </div>
    </section>
  )
}

export default BlogSection2