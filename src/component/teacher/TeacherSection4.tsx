import { teacherList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const TeacherSection4 = () => {
  return (
    <section className="tl-11-editorial tl-11-section-spacing">
        <div className="container">
            <div className="tl-11-section-heading">
                <h2 className="tl-11-section-title">Editorial Team</h2>
                <Link href="/staff" className="tl-11-latest-articles-heading-btn">View All</Link>
            </div>

            <div className="kb-9-staff-row">
                <div className="row gx-3 gx-lg-4 gy-4">
                    {teacherList.slice(34,37).map((item) => (
                    <div className="col-md-4 col-6 col-xxs-12" key={item.id}>
                        <div className="tl-3-single-staff">
                            <div className="tl-3-single-staff-img">
                                <img src={item.imgSrc} alt="Staff Image"/>
                                <ul className="tl-3-single-staff-socials tl-11-single-edi-socials">
                                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>

                            <div className="tl-3-single-staff-txt tl-11-single-edi-txt">
                                <h5 className="tl-3-single-staff-name">
                                    <Link href={`/staff/${item.slug}`}>
                                        {item.name}
                                    </Link>
                                </h5>
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

export default TeacherSection4