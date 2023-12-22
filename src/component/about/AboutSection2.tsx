import React from 'react'

const AboutSection2 = () => {
  return (
    <section className="tl-2-about pb-120 pt-120">
        <div className="container">
            <div className="row gy-5 align-items-center tl-2-about-row">
                <div className="col-lg-6">
                    <div className="tl-2-about-img">
                        <img src="assets/images/tl-2/about-img.png" alt="Image"/>
                        <img src="assets/images/tl-2/arrow.png" alt="arrow" className="tl-2-about-arrow"/>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="tl-2-about-txt">
                        <h2 className="tl-2-section-title">Request a Tutors For a Free Online Class.</h2>
                        <h6 className="tl-2-about-second-title">Play As You Learn</h6>
                        <p className="tl-2-about-descr">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable.</p>
                        <div className="tl-2-about-stats">
                            <div className="tl-2-about-stat">
                                <span className="tl-9-about-stat-num">06+</span>
                                <span className="tl-9-about-stat-name">Years experience</span>
                            </div>

                            <div className="tl-2-about-stat">
                                <span className="tl-9-about-stat-num">7k+</span>
                                <span className="tl-9-about-stat-name">Students each year</span>
                            </div>

                            <div className="tl-2-about-stat">
                                <span className="tl-9-about-stat-num">24+</span>
                                <span className="tl-9-about-stat-name">Award Won</span>
                            </div>
                        </div>
                        <a href="#" className="tl-2-blog-btn"><span className="tl-2-blog-btn-icon"><i className="fa-regular fa-arrow-up-right"></i></span>More About Us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection2