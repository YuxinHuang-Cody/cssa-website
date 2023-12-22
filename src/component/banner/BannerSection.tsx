import React from 'react'
import MemberSlider from '../slider/MemberSlider'

const BannerSection = () => {
  return (
    <section className="tl-1-banner bg-defaults">
        <div className="container">
            <div className="row gy-5 tl-1-banner-top pt-100 pb-100 align-items-center">
                <div className="col-lg-7">
                    <div className="tl-1-banner-txt">
                        <h1 className="tl-1-banner-title">Learning Management System (LMS).</h1>
                        <p className="tl-1-banner-descr">Through a combination of lectures, readings, and discussions, students will gain a solid foundation in educational psychology.</p>
                        <div className="tl-1-banner-btns">
                            <a href="#" className="tl-5-def-btn tl-1-banner-btn-1">I Want a Demo</a>
                            <a href="#" className="tl-def-btn tl-1-banner-btn-2">See a Preview</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="tl-1-banner-img position-relative">
                        <span className="kb-13-banner-img-tag">Live</span>
                        <img src="assets/images/tl-1/banner-img.jpg" alt="Banner Image"/>
                    </div>
                </div>
            </div>

            <MemberSlider/>
        </div>
    </section>
  )
}

export default BannerSection