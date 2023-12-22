import React from 'react'

const AboutSection7 = () => {
  return (
    <section className="tl-8-about tl-3-section-spacing">
        <div className="container">
            <div className="row g-0 justify-content-between align-items-center">
                <div className="col-xl-6 col-lg-5">
                    <div className="tl-8-about-img">
                        <img src="assets/images/tl-8/about-img.jpg" alt="Driving Image" className="tl-8-about-main-img"/>
                        <img src="assets/images/tl-8/sticker.png" alt="sticker" className="tl-8-about-sticker"/>
                    </div>
                </div>

                <div className="col-xl-5 col-lg-6">
                    <div className="tl-8-about-txt yellow-clr-hover">
                        <h2 className="tl-8-section-title">Perfect Driving School With Latest Vehicles.</h2>

                        <div className="tl-8-features">
                            <div className="tl-8-feature">
                                <h6 className="tl-8-feature-title">Basic Driving Skills</h6>
                                <p className="tl-8-feature-descr">There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected randomized words which don't look even slightly believable.</p>
                            </div>

                            <div className="tl-8-feature">
                                <h6 className="tl-8-feature-title">Online Traffic Course</h6>
                                <p className="tl-8-feature-descr">There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected randomized words which don't look even slightly believable.</p>
                            </div>
                        </div>

                        <a href="#" className="tl-def-btn-2">More About Us <i className="fa-regular fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection7