'use client'
import { useTalimContext } from '@/context/TalimContext'
import Link from 'next/link'
import React from 'react'

const AllTeacherSection3 = () => {
    const {displayedTeams2} = useTalimContext()
  return (
    <section className="tl-1-teachers pt-120 pb-50">
        <div className="container">
            <div className="row gx-3 gx-lg-4 gy-4">
                {displayedTeams2.map((item) => (
                 <div className="col-md-4 col-6 col-xxs-12" key={item.id}>
                    <div className="tl-3-single-staff tl-7-single-fac">
                        <div className="tl-3-single-staff-img">
                            <img src={item.imgSrc} alt="Staff Image"/>
                            <ul className="tl-3-single-staff-socials">
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>

                        <div className="tl-3-single-staff-txt tl-7-single-fac-txt">
                            <h5 className="tl-3-single-staff-name"><Link href={`/staff/${item.slug}`}>{item.name}</Link></h5>
                            <span className="tl-3-single-staff-role">{item.position}</span>
                        </div>
                    </div>
                </div>   
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default AllTeacherSection3