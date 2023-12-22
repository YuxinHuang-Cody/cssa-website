import { categoriesData } from '@/data/Data'
import React from 'react'
type Props = {
    sectionStyle: string;
    pageStyle: string;
    categoryStyle?: string;
}
const CategorySection2 = ({sectionStyle,pageStyle,categoryStyle} : Props) => {
  return (
    <section className={sectionStyle}>
      <div className="container">
        <h2 className={`${pageStyle}-section-title`}>
          Popular <span className="last-word">Categories</span>
        </h2>

        <div className={`row ${pageStyle}-categories-row`}>
          {categoriesData.map((category, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-6 col-xxs-12">
              <a href="#" className={`tl-3-single-program ${categoryStyle}`}>
                <div className="tl-3-single-program-icon">
                  <img src={category.icon} alt="icon" />
                </div>
                <h5 className="tl-3-single-program-title">{category.title}</h5>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection2