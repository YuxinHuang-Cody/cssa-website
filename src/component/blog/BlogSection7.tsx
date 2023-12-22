import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const BlogSection7 = () => {
  return (
    <section className="tl-11-latest-articles tl-11-section-spacing">
        <div className="container">
            <div className="tl-11-section-heading">
                <h2 className="tl-11-section-title">Latest Articles</h2>
                <Link href="/blog" className="tl-11-latest-articles-heading-btn">View All</Link>
            </div>

            <div className="row g-4 justify-content-center">
                {blogList.slice(39,42).map((item) => (
                <div className="col-lg-4 col-sm-6 col-10 col-xxs-12" key={item.id}>
                    <div className="tl-11-latest-article">
                        <div className="tl-11-latest-article-img">
                            <img src={item.imgSrc} alt="Article Image"/>
                        </div>

                        <div className="tl-11-latest-article-txt">
                            <ul className="tl-11-latest-article-infos">
                                <li>{item.date}</li>
                                <li>{item.category}</li>
                            </ul>

                            <h3 className="tl-11-latest-article-title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h3>

                            <span className="tl-11-latest-article-author">By {item.author}</span>
                        </div>
                    </div>
                </div>    
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default BlogSection7