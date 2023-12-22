import { teacherList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const TeacherSection3 = () => {
  return (
    <section className="tl-8-experts tl-3-section-spacing">
        <div className="container">
            <div className="tl-8-experts-heading">
                <h2 className="tl-8-section-title tl-8-experts-title">Meet Our Expert Trainers</h2>
                <p className="tl-8-experts-heading-descr">There are many variations of passages of Lorem Ipsum available, but majority have suffered.</p>
            </div>

            <div className="tl-3-staff-row">
                <div className="row gx-3 gx-lg-4 g-3 justify-content-center">
                    {teacherList.slice(11,14).map((item) => (
                     <div className="col-md-4 col-6 col-xxs-12" key={item.id}>
                        <div className="tl-3-single-staff tl-8-single-expert">
                            <div className="tl-3-single-staff-img tl-8-single-expert-img">
                                <img src={item.imgSrc} alt="Staff Image"/>
                                <ul className="tl-3-single-staff-socials">
                                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>

                            <div className="tl-3-single-staff-txt tl-8-single-expert-txt">
                                <h5 className="tl-8-single-expert-name"><Link href={`/staff/${item.slug}`}>{item.name}</Link></h5>
                                <span className="tl-8-single-expert-role">{item.position}</span>
                            </div>
                        </div>
                    </div>   
                    ))}
                    
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-4">
                    <Link href="/staff" className="tl-def-btn">View All Member</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TeacherSection3