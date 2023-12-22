import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const BlogSection3 = () => {
  return (
    <section className="tl-4-blogs tl-3-section-spacing" data-bg-color="#F3F1F1">
        <div className="container">
            <h2 className="tl-4-section-title">Read Our Latest News</h2>

            <div className="row g-xl-4 g-3 justify-content-center justify-content-md-around">
                {blogList.slice(4,6).map((item) => (
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
                            <Link className="tl-single-blog-btn" href={`/blog/${item.slug}`}>Read More <i className="fa-regular fa-angle-right"></i></Link>
                        </div>
                    </div>
                </div>  
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default BlogSection3