import { teacherList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const TeacherSection2 = () => {
  return (
    <section className="tl-3-staff tl-3-section-spacing">
        <div className="container">
            <div className="tl-3-staff-heading">
                <div className="row gy-3 align-items-center">
                    <div className="col-lg-6 col-7 col-xxs-12">
                        <h2 className="tl-3-section-title">Meet Our Creative School Staff.</h2>
                    </div>

                    <div className="col-lg-6 col-5 col-xxs-12">
                        <div className="tl-3-staff-heading-btn">
                            <a href="#" className="tl-3-def-btn">View All Details</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tl-3-staff-row">
                <div className="row gx-3 gx-lg-4 gy-4">
                    {teacherList.slice(32,35).map((item) => (
                    <div className="col-md-4 col-6 col-xxs-12" key={item.id}>
                        <div className="tl-3-single-staff">
                            <div className="tl-3-single-staff-img">
                                <img src={item.imgSrc} alt="Staff Image"/>
                                <ul className="tl-3-single-staff-socials">
                                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>

                            <div className="tl-3-single-staff-txt">
                                <h5 className="tl-3-single-staff-name"><Link href={`/staff/${item.slug}`}>{item.name}</Link></h5>
                                <span className="tl-3-single-staff-role">{item.position}</span>
                            </div>
                        </div>
                    </div>    
                    ))}
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default TeacherSection2