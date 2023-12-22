import { teacherList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const EditorialSection = () => {
  return (
    <section className="tl-6-editorials pt-120">
    <div className="container">
        <h2 className="tl-6-section-title">Editorial Team</h2>

        <div className="row gx-3 gx-lg-4 g-3 justify-content-center">
            {teacherList.slice(0,3).map((item) => (
             <div className="col-md-4 col-6 col-xxs-12" key={item.id}>
                <div className="tl-3-single-staff tl-8-single-expert tl-6-editorial">
                    <div className="tl-3-single-staff-img tl-8-single-expert-img">
                        <img src={item.imgSrc} alt="Staff Image"/>
                    </div>

                    <div className="tl-3-single-staff-txt tl-8-single-expert-txt">
                        <h5 className="tl-8-single-expert-name"><Link href={`staff/${item.slug}`}>{item.name}</Link></h5>
                        <span className="tl-8-single-expert-role">{item.position}</span>
                    </div>
                </div>
            </div>   
            ))}
            
        </div>
    </div>
</section>
  )
}

export default EditorialSection