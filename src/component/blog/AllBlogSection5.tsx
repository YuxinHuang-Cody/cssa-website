'use client'
import { useTalimContext } from '@/context/TalimContext'
import Link from 'next/link'
import React from 'react'

const AllBlogSection5 = () => {
    const {displayedBlogs2} = useTalimContext()
  return (
    <section className="tl-inner-blogs pt-120 pb-50">
        <div className="container">
            <div className="row g-30 justify-content-center">
                {displayedBlogs2.map((item)=>(
                  <div className="col-lg-4 col-sm-6 col-10 col-xxs-12" key={item.id}>
                    <div className="tl-5-single-blog">
                        <span className="tl-5-single-faculty-role tl-5-single-blog-date">March 24, 2023</span>
                        <img src={item.imgSrc} alt="Staff Image" className="tl-5-single-faculty-img tl-5-single-blog-img"/>

                        <div className="tl-5-single-blog-txt">
                            <h4 className="tl-5-single-faculty-name tl-5-single-blog-title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h4>
                            <Link href={`/blog/${item.slug}`} className="tl-5-single-blog-arrow"><i className="fa-regular fa-arrow-right-long"></i></Link>
                        </div>
                    </div>
                </div>  
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default AllBlogSection5