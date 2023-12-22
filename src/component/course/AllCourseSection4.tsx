'use client'
import { useTalimContext } from '@/context/TalimContext'
import Link from 'next/link'
import React from 'react'

const AllCourseSection4 = () => {
    const {displayedCourses4} = useTalimContext()
  return (
    <section className="tl-inner-courses pb-60 pt-130">
        <div className="container">
            <div className="row g-4">
                {displayedCourses4.map((item) => (
                 <div className="col-lg-4 col-sm-6 col-12" key={item.id}>
                    <div className="tl-9-class tl-9-program">
                        <span className="tl-9-class-tag">{item.price}</span>
                        <img src={item.imgSrc} alt="class image" className="tl-9-class-img"/>

                        <div className="tl-9-class-infos">
                            <a href="#" className="tl-9-class-category">Instrument</a>
                            <span className="tl-9-class-duration"><img src="assets/images/tl-9/calender.png" alt="Icon"/>{item.duration} month</span>
                        </div>

                        <h3 className="tl-9-program-title"><Link href={`/course/${item.slug}`}>{item.title}</Link></h3>
                        <p className="tl-9-program-descr">{item.desc}</p>
                        <Link href={`/course/${item.slug}`} className="tl-9-program-btn">Learn More <i className="fa-regular fa-arrow-right"></i></Link>
                    </div>
                </div>   
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default AllCourseSection4