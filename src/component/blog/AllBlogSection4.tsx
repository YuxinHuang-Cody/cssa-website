'use client'
import { useTalimContext } from '@/context/TalimContext'
import Link from 'next/link'
import React from 'react'

const AllBlogSection4 = () => {
    const {displayedBlogs} = useTalimContext()
  return (
    <section className="tl-inner-blogs pt-120 pb-50">
        <div className="container">
            <div className="row g-xl-4 g-3 justify-content-center justify-content-md-around">
                {displayedBlogs.map((item) => (
                  <div className="col-lg-6 " key={item.id}>
                    <div className="tl-4-blog">
                        <div className="tl-4-blog-img">
                            <img src={item.imgSrc} alt="Blog Thumbnail"/>
                            <span className="kb-10-pop-article-category tl-4-blog-category">{item.category}</span>
                        </div>

                        <div className="tl-single-blog-txt">
                            <span className="tl-single-blog-date"><i className="fa-regular fa-clock"></i> {item.date}</span>
                            <h4 className="tl-single-blog-title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h4>
                            <p className="tl-single-blog-descr">{item.desc}</p>
                            <Link href={`/blog/${item.slug}`} className="tl-single-blog-btn">Read More <i className="fa-regular fa-angle-right"></i></Link>
                        </div>
                    </div>
                </div>  
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default AllBlogSection4