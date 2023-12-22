'use client'
import { useTalimContext } from '@/context/TalimContext'
import Link from 'next/link'
import React from 'react'

const AllTeacherSection4 = () => {
    const {displayedTeams3} = useTalimContext()
  return (
    <section className="tl-1-teachers pt-120 pb-50">
        <div className="container">
            <div className="row gx-3 gx-lg-4 gy-4">
                {displayedTeams3.map((item) => (
                    <div className="col-md-4 col-6 col-xxs-12" key={item.id}>
                    <div className="tl-5-single-faculty">
                        <span className="tl-5-single-faculty-role">{item.position}</span>
                        <img src={item.imgSrc} alt="Staff Image" className="tl-5-single-faculty-img"/>
                        <h4 className="tl-5-single-faculty-name"><Link href={`/staff/${item.slug}`}>{item.name}</Link></h4>
                        <div className="tl-5-single-faculty-socials">
                            <a href="#">TW</a>
                            <a href="#">BE</a>
                            <a href="#">LI</a>
                        </div>
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default AllTeacherSection4