import React from 'react'
import LeftArticleSection from './LeftArticleSection'
import RightArticleSection from './RightArticleSection'

const ArticleSection2 = () => {
  return (
    <div className="container">
        <section className="tl-11-pop-articles tl-11-section-spacing">
            <LeftArticleSection />
            <RightArticleSection />
        </section>
    </div>
  )
}

export default ArticleSection2