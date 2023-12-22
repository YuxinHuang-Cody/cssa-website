import { courseList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const ProgramSection = () => {
  return (
    <section className="tl-4-programs tl-3-section-spacing" data-bg-color="#F3F1F1">
        <div className="container">
            <h2 className="tl-4-section-title">Academic <span className="last-word">programs</span></h2>

            <div className="row g-4 tl-4-programs-row">
                {courseList.slice(1,4).map((item,index) => (
                 <div className="col-lg-4 col-md-6" key={item.id}>
                    <div className="tl-4-program">
                        <div className="tl-4-program-heading">
                            <img src={`assets/images/tl-4/program-${index + 1}.png`} alt="Icon"/>
                            <div className="tl-4-program-heading-txt">
                                <h4 className="tl-4-program-title">{item.programTitle}</h4>
                                <h6 className="tl-4-program-sub-title">{item.title}</h6>
                            </div>
                        </div>

                        <img src={item.imgSrc} alt="Program Image" className="tl-4-program-img"/>

                        <div className="tl-4-program-txt">
                            <p className="tl-4-program-descr">{item.desc}</p>
                            <Link href={`/course/${item.slug}`} className="tl-4-program-btn">Learn More <i className="fa-regular fa-angle-right"></i></Link>
                        </div>
                    </div>
                </div>   
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default ProgramSection