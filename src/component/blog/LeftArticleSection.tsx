'use client'
import { blogList } from '@/data/Data';
import Link from 'next/link';
import React, { useState } from 'react';

const LeftArticleSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleFilterChange = (category : string) => {
    setSelectedCategory(category);
    console.log(selectedCategory);
    
  };

  return (
    <div className="tl-11-pop-articles-left-col">
      <div className="tl-11-section-heading">
        <h2 className="tl-11-section-title">Popular Articles</h2>

        <div className="tl-11-pop-articles-filtering-btns">
          <button onClick={() => handleFilterChange('all')} className={selectedCategory === 'all' ? 'active ' : ''}>See All</button>
          <button onClick={() => handleFilterChange('Revolution')} className={selectedCategory === 'Revolution' ? 'active ' : ''}>Revolution</button>
          <button onClick={() => handleFilterChange('Learning')} className={selectedCategory === 'Learning' ? 'active ' : ''}>Learning</button>
          <button onClick={() => handleFilterChange('Notebook')} className={selectedCategory === 'Notebook' ? 'active ' : ''}>Notebook</button>
        </div>
      </div>

      <div className="tl-11-pop-articles-col">
        {blogList.slice(33,37) .map((item, index) => (
          (selectedCategory === 'all' || item.category === selectedCategory) && (
            <div className={`tl-11-pop-article mix ${item.category}`} key={index}>
              <div className="tl-11-pop-article-img">
                <img src={item.imgSrc} alt="Article Image" />
              </div>

              <div className="tl-11-pop-article-txt">
                <div className="tl-11-pop-article-infos">
                  <Link href='/blog'>
                    <span className="tl-11-pop-article-category">{item.category}</span>
                  </Link>
                  <span className="tl-11-pop-article-date">
                    <i className="fa-regular fa-clock"></i> {item.date}
                  </span>
                </div>
                <h3 className="tl-11-pop-article-title">
                  <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                </h3>
                <p className="tl-11-pop-article-descr">{item.desc}</p>
                <Link href={`/blog/${item.slug}`} className="tl-11-pop-article-btn">
                  Read More <i className="fa-regular fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default LeftArticleSection;
