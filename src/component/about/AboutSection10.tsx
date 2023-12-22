import React from 'react'
import FeatureTextSlider from '../slider/FeatureTextSlider'

const AboutSection10 = () => {
  return (
    <section className="tl-13-about pt-120 pb-60">
        <div className="container">
            <div className="row gx-0 gy-4 gy-md-5 align-items-center justify-content-between">
                <div className="col-xxl-7 col-lg-6">
                    <div className="tl-13-about-img">
                        <img src="assets/images/tl-13/about-img.jpg" alt="Image"/>

                        <div className="tl-13-about-stat">
                            <img src="assets/images/tl-13/stat-icon.png" alt="Image" className="tl-13-about-stat-icon"/>
                            <span className="tl-13-about-stat-number">28+</span>
                            <span className="tl-13-about-stat-name">years of experience</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="tl-13-about-txt">
                        <h6 className="tl-13-about-sub-title">Next Level Learning</h6>
                        <h2 className="tl-13-section-title">Take The World Best Course <span className="last-word">Online</span> For Free.</h2>
                        <p className="tl-13-about-descr">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable.</p>
                        <a href="#" className="tl-13-about-btn">Read More <i className="fa-regular fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <FeatureTextSlider />
    </section>
  )
}

export default AboutSection10