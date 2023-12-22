import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const BannerSection10 = () => {
    const centerBlog = blogList[3]
  return (
    <section className="tl-11-banner">
        <div className="container">
            <div className="tl-11-banner-heading">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h1 className="tl-11-banner-title">EDUCATION MAGAZINES</h1>
                    </div>
                </div>
            </div>

            <div className="tl-11-banner-articles">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="tl-11-banner-articles-col">
                            {blogList.slice(0,2).map((item) => (
                             <div className="tl-11-banner-article" key={item.id}>
                                <div className="tl-11-banner-article-img">
                                    <img src={item.imgSrc} alt="Article Image"/>
                                </div>

                                <div className="tl-11-banner-article-txt">
                                    <span className="tl-11-banner-article-category">{item.category}</span>
                                    <h4 className="tl-11-banner-article-title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h4>
                                    <h6 className="tl-11-banner-article-author"><span>By</span> {item.author}</h6>
                                </div>
                            </div>   
                            ))}
                            
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="tl-11-banner-article-center">
                            <div className="tl-11-banner-article-center-img">
                                <img src={centerBlog.imgSrc} alt="Article Image"/>
                            </div>

                            <div className="tl-11-banner-article-center-txt">
                                <div className="tl-11-banner-article-center-infos">
                                    <span className="tl-11-banner-article-center-date">{centerBlog.date}</span>
                                    <span className="tl-11-banner-article-center-category">{centerBlog.category}</span>
                                </div>

                                <h2 className="tl-11-banner-article-center-title"><Link href={`/blog/${centerBlog.slug}`}>{centerBlog.title}</Link></h2>
                                <p className="tl-11-banner-article-center-descr">{centerBlog.desc}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="tl-11-banner-articles-col">
                            {blogList.slice(4,6).map((item) => (
                                <div className="tl-11-banner-article" key={item.id}>
                                    <div className="tl-11-banner-article-img">
                                        <img src={item.imgSrc} alt="Article Image"/>
                                    </div>

                                    <div className="tl-11-banner-article-txt">
                                        <span className="tl-11-banner-article-category">{item.category}</span>
                                        <h4 className="tl-11-banner-article-title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h4>
                                        <h6 className="tl-11-banner-article-author"><span>By</span> {item.author}</h6>
                                    </div>
                                </div>   
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerSection10