'use client';
import { useTalimContext } from '@/context/TalimContext';
import Link from 'next/link';
import React from 'react'

const AllCourseSection3 = () => {
    const {displayedCourses3} = useTalimContext()
  return (
    <section className="tl-inner-courses pb-60 pt-130">
        <div className="container">
            <div className="row g-4">
                {displayedCourses3.map((item) => (
                 <div className="col-12" key={item.id}>
                    <div className="tl-8-course">
                        <div className="tl-8-course-img">
                            <img src={item.imgSrc} alt="Course Image"/>
                        </div>

                        <div className="tl-8-course-txt">
                            <div className="tl-8-course-info">
                                <span className="tl-8-course-price">{item.price}</span>
                                <span className="tl-8-course-level"><i className="fa-sharp fa-solid fa-signal-bars-good"></i> Intermediate</span>
                            </div>

                            <h3 className="tl-8-course-title"><Link href={`/course/${item.slug}`}>{item.title}</Link></h3>
                            <p className="tl-8-course-descr">{item.desc}</p>

                            <div className="tl-8-course-parts">
                                <div className="tl-8-course-part">
                                    <img src="assets/images/tl-8/service-1.png" alt="course part icon"/>

                                    <div className="tl-8-course-part-txt">
                                        <h6 className="tl-8-course-part-title">Theory Session</h6>
                                        <h6 className="tl-8-course-part-duration">04 Hours</h6>
                                    </div>
                                </div>

                                <div className="tl-8-course-part">
                                    <img src="assets/images/tl-8/service-2.png" alt="course part icon"/>

                                    <div className="tl-8-course-part-txt">
                                        <h6 className="tl-8-course-part-title">Practical Session</h6>
                                        <h6 className="tl-8-course-part-duration">04 Hours</h6>
                                    </div>
                                </div>
                            </div>

                            <Link href={`/course/${item.slug}`} className="tl-def-btn">Read More</Link>
                        </div>
                    </div>
                </div>   
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default AllCourseSection3