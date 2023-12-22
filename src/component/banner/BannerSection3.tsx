import Link from 'next/link'
import React from 'react'

const BannerSection3 = () => {
  return (
    <section className="tl-3-banner">
        <div className="container">
            <div className="row gy-5 align-items-center">
                <div className="col-lg-7">
                    <div className="tl-3-banner-txt">
                        <h1 className="tl-3-banner-title">Four year plan focused On your future.</h1>
                        <p className="tl-3-banner-descr">Cosmic is committed to providing learning opportunities tailored to support emerging career opportunities.</p>
                        <Link href="/course" className="tl-3-def-btn">View Our Courses</Link>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="tl-3-banner-img text-center">
                        <img src="assets/images/tl-3/banner-img.png" alt="Banner image" className="tl-3-banner-main-img"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerSection3