import { blogList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const RightArticleSection = () => {
  return (
    <div className="tl-11-sidebar">
                <div className="tl-11-sidebar-area tl-11-sidebar-area-articles">
                    <h4 className="tl-11-sidebar-area-title">Recent Posts</h4>
                    {blogList.slice(37,40).map((item) => (
                     <div className="tl-11-sidebar-area-article" key={item.id}>
                        <img src={item.imgSrc} alt="Article image" className="tl-11-sidebar-area-article-img"/>

                        <div className="tl-11-sidebar-area-article-txt">
                            <span className="tl-11-sidebar-area-article-date">{item.date}</span>
                        <h5 className="tl-11-sidebar-area-article-title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h5>
                        </div>
                    </div>   
                    ))}
                    

                </div>

                <div className="tl-11-sidebar-area tl-11-sidebar-categories">
                    <h4 className="tl-11-sidebar-area-title">Categories</h4>

                    <div className="tl-11-sidebar-categories-container">
                        <a href="#" className="tl-11-sidebar-category">
                            <span className="tl-11-sidebar-category-title">Continuing</span>
                            <span className="tl-11-sidebar-category-quantity">(<span className="number">07</span>)</span>
                        </a>

                        <a href="#" className="tl-11-sidebar-category">
                            <span className="tl-11-sidebar-category-title">Primary</span>
                            <span className="tl-11-sidebar-category-quantity">(<span className="number">23</span>)</span>
                        </a>

                        <a href="#" className="tl-11-sidebar-category">
                            <span className="tl-11-sidebar-category-title">Vocational</span>
                            <span className="tl-11-sidebar-category-quantity">(<span className="number">09</span>)</span>
                        </a>

                        <a href="#" className="tl-11-sidebar-category">
                            <span className="tl-11-sidebar-category-title">E-learning</span>
                            <span className="tl-11-sidebar-category-quantity">(<span className="number">17</span>)</span>
                        </a>

                        <a href="#" className="tl-11-sidebar-category">
                            <span className="tl-11-sidebar-category-title">Art & Design</span>
                            <span className="tl-11-sidebar-category-quantity">(<span className="number">27</span>)</span>
                        </a>

                        <a href="#" className="tl-11-sidebar-category">
                            <span className="tl-11-sidebar-category-title">Traditional</span>
                            <span className="tl-11-sidebar-category-quantity">(<span className="number">15</span>)</span>
                        </a>
                    </div>
                </div>

                <div className="tl-11-sidebar-area tl-11-sidebar-magazine-cover">
                    <img src="assets/images/tl-11/magazine.jpg" alt="Magazine Cover"/>
                </div>

                <div className="tl-11-sidebar-area tl-11-sidebar-socials">
                    <h5 className="tl-11-sidebar-area-title">Multimedia Content :</h5>
                    <ul>
                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-pinterest"></i></a></li>
                    </ul>
                </div>
            </div>
  )
}

export default RightArticleSection