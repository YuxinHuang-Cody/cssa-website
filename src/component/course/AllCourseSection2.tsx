'use client'
import { useTalimContext } from '@/context/TalimContext'
import Link from 'next/link'
import React from 'react'

const AllCourseSection2 = () => {
    const {displayedCourses2} = useTalimContext()
  return (
    <section className="tl-inner-courses pb-60 pt-130">
        <div className="container">
            <div className="row g-3 g-xl-4">
                {displayedCourses2.map((item) => (
                 <div className="col-lg-4 col-sm-6" key={item.id}>
                    <div className="tl-2-blog tl-2-course">
                        <div className="tl-2-course-img">
                            <img src={item.imgSrc} alt="Course Image"/>
                            <span className="tl-2-course-price">{item.price}</span>
                        </div>

                        <div className="tl-2-course-txt">
                            <h4 className="tl-1-course-title tl-2-course-title"><Link href={`/course/${item.slug}`}>{item.title}</Link></h4>
                            <p className="tl-2-course-descr">{item.desc}</p>

                            <div className="tl-2-course-infos">
                                <div className="tl-2-course-info">
                                    <h6 className="tl-2-course-info-key">Age: </h6>
                                    <h6 className="tl-2-course-info-value">{item.age}</h6>
                                </div>

                                <div className="tl-2-course-info">
                                    <h6 className="tl-2-course-info-key">Time: </h6>
                                    <h6 className="tl-2-course-info-value">{item.time}</h6>
                                </div>

                                <div className="tl-2-course-info">
                                    <h6 className="tl-2-course-info-key">Seat: </h6>
                                    <h6 className="tl-2-course-info-value">{item.seat}</h6>
                                </div>
                            </div>

                            <Link href={`/course/${item.slug}`} className="tl-2-blog-btn"><span className="tl-2-blog-btn-icon"><i className="fa-regular fa-arrow-up-right"></i></span> read more</Link>
                        </div>
                    </div>
                </div>   
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default AllCourseSection2