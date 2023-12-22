import { useTalimContext } from '@/context/TalimContext'
import Link from 'next/link'
import React from 'react'

const AllBlogSection7 = () => {
    const {displayedBlogs4} = useTalimContext()
  return (
    <section className="tl-inner-blogs pt-120 pb-50">
        <div className="container">
            <div className="row g-3 g-lg-4 justify-content-center">
                {displayedBlogs4.map((item) => (
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

export default AllBlogSection7