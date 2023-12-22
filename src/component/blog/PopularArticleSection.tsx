import { blogList } from "@/data/Data";
import Link from "next/link";
import React from "react";

const PopularArticleSection = () => {
  return (
    <div className="container">
      <section className="tl-6-pop-articles pt-120 pb-120">
        <div className="tl-6-pop-articles-left-col">
          <h2 className="tl-6-section-title">Popular Articles</h2>

          <div className="tl-6-pop-articles-col tl-6-pop-articles-col">
            {blogList.slice(5,9).map((item) => (
             <div className="tl-6-pop-article tl-6-pop-article" key={item.imgSrc}>
              <div className="tl-6-pop-article-img">
                <img
                  src={item.imgSrc}
                  alt="Article Image"
                />
              </div>

              <div className="tl-6-pop-article-txt">
                <div className="tl-6-pop-article-infos">
                  <a
                    href="#"
                    className="tl-6-info-pill tl-6-pop-article-category"
                  >
                    {item.category}
                  </a>
                  <span className="tl-6-info-pill">March 23, 2023</span>
                </div>
                <h3 className="tl-6-pop-article-title tl-6-title-hover">
                  <Link href={`/blog/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>
                <p className="tl-6-pop-article-descr">
                  {item.desc}
                </p>
                <Link href={`/blog/${item.slug}`} className="tl-long-arrow-btn">
                  <span className="arrow"></span>
                </Link>
              </div>
            </div> 
            ))}
            
          </div>
        </div>

        <div className="tl-6-sidebar">
          <div className="tl-6-sidebar-area tl-6-sidebar-area tl-6-sidebar-ad">
            <a href="#">
              <img src="assets/images/tl-6/ad-banner.jpg" alt="Ad banner" />
            </a>
          </div>

          <div className="tl-6-sidebar-area tl-6-sidebar-area tl-6-sidebar-area-articles">
            <h4 className="tl-6-sidebar-area-title">Recent Posts</h4>
            {blogList.slice(0,3).map((item) => (
             <div className="tl-6-sidebar-area-article" key={item.id}>
              <img
                src={item.imgSrc}
                alt="Article image"
                className="tl-6-sidebar-area-article-img"
              />

              <div className="tl-6-sidebar-area-article-txt">
                <span className="tl-6-info-pill">{item.category}</span>
                <h5 className="tl-6-sidebar-area-article-title tl-6-title-hover">
                  <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                </h5>
                <span className="tl-6-sidebar-area-article-date">
                  <i className="fa-regular fa-clock"></i> {item.date}
                </span>
              </div>
            </div> 
            ))}
            
          </div>

          <div className="tl-6-sidebar-area tl-6-sidebar-area tl-6-sidebar-categories">
            <h4 className="tl-6-sidebar-area-title">Featured Categories</h4>

            <div className="tl-6-sidebar-categories-container">
              <a href="#" className="tl-6-sidebar-category">
                <span className="tl-6-sidebar-category-title">Continuing</span>
                <span className="tl-6-sidebar-category-quantity">
                  <span className="number">07</span>
                </span>
              </a>

              <a href="#" className="tl-6-sidebar-category">
                <span className="tl-6-sidebar-category-title">E-learning</span>
                <span className="tl-6-sidebar-category-quantity">
                  <span className="number">17</span>
                </span>
              </a>

              <a href="#" className="tl-6-sidebar-category">
                <span className="tl-6-sidebar-category-title">
                  Art & Design
                </span>
                <span className="tl-6-sidebar-category-quantity">
                  <span className="number">27</span>
                </span>
              </a>
            </div>
          </div>

          <div className="tl-6-sidebar-area tl-6-sidebar-area tl-6-sidebar-socials">
            <ul>
              <li>
                <a href="#" className="tl-6-sidebar-tw">
                  <i className="fa-brands fa-twitter"></i> 6k+ Likes
                </a>
              </li>
              <li>
                <a href="#" className="tl-6-sidebar-fb">
                  <i className="fa-brands fa-facebook-f"></i> 3k Followers
                </a>
              </li>
              <li>
                <a href="#" className="tl-6-sidebar-lk">
                  <i className="fa-brands fa-linkedin-in"></i> 4k Followers
                </a>
              </li>
              <li>
                <a href="#" className="tl-6-sidebar-pi">
                  <i className="fa-brands fa-pinterest"></i> 9k+ Likes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularArticleSection;
