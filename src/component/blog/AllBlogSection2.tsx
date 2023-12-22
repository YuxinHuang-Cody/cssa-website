'use client'
import { useTalimContext } from '@/context/TalimContext'
import Link from 'next/link'
import React from 'react'

const AllBlogSection2 = () => {
    const {displayedBlogs2} = useTalimContext()
  return (
    <section className="tl-inner-blogs pt-120 pb-50">
        <div className="container">
            <div className="row gy-4 tl-1-blogs-row">
                {displayedBlogs2.map((item) => (
                 <div className="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12" key={item.id}>
                    <div className="tl-2-blog">
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
                    </div>
                </div>   
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default AllBlogSection2