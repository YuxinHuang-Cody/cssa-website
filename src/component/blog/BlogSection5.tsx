import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const BlogSection5 = () => {
  return (
    <section className="tl-9-blogs tl-9-section-spacing">
        <div className="container">
            <div className="tl-9-section-heading">
                <div className="row gy-4 align-items-center">
                    <div className="col-md-7">
                        <h2 className="tl-9-section-title">Our News and Articles</h2>
                    </div>

                    <div className="col-md-5 text-start text-md-end">
                        <a href="#" className="tl-def-btn tl-9-def-btn">Free Consultation</a>
                    </div>
                </div>
            </div>

            <div className="row g-3 g-lg-4 justify-content-center">
                {blogList.slice(50,53).map((item) => (
                 <div className="col-lg-4 col-md-6 col-10 col-xxs-12" key={item.id}>
                    <div className="tl-9-blog"> 
                        <div className="tl-9-event-img">
                            <img src={item.imgSrc} alt="Article Image"/>
                        </div>

                        <div className="tl-9-event-txt">
                            <ul className="tl-2-blog-infos">
                                <li>{item.date}</li>
                                <li>{item.category}</li>
                            </ul>

                            <h3 className="tl-6-latest-article-title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h3>

                            <span className="tl-9-blog-author">By {item.author}</span>
                        </div>
                    </div>
                </div>   
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default BlogSection5