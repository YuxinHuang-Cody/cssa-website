import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const BlogSection6 = () => {
  return (
    <section className="tl-10-blog p-120">
        <div className="container">
            <div className="tl-10-blog-heading d-flex align-items-center justify-content-between">
                <h2 className="tl-section-title tl-10-section-title">Our News & <span className="last-word">Blogs</span>.</h2>
                <a href="#" className="tl-def-btn">Latest News <i className="fa-regular fa-arrow-right"></i></a>
            </div>

            <div className="tl-10-blog-inner-heading tl-blog-inner-heading">
                <span className="tl-10-blog-inner-title">Latest Posts</span>
                <span className="tl-10-blog-quantity">12</span>
            </div>

            <div className="row g-xl-4 g-3 justify-content-center justify-content-md-around">
                {blogList.slice(4,7).map((item) => (
                  <div className="col-lg-4 col-md-6 col-sm-10" key={item.id}>
                    <div className="tl-single-blog tl-10-single-blog">
                        <div className="tl-10-single-blog-img">
                            <img src={item.imgSrc} alt="Blog Thumbnail"/>
                        </div>

                        <div className="tl-10-single-blog-txt">
                            <span className="tl-single-blog-date tl-10-single-blog-date">{item.date}</span>
                            <h4 className="tl-single-blog-title tl-10-single-blog-title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h4>
                            <p className="tl-single-blog-descr tl-10-single-blog-descr">{item.desc.slice(0,80)}...</p>
                            <Link className="tl-single-blog-btn tl-10-single-blog-btn" href={`/blog/${item.slug}`}>Read More <i className="fa-regular fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>  
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default BlogSection6