import React from 'react'

const AboutSection8 = () => {
  return (
    <section className="tl-9-about">
        <div className="container">
            <div className="row g-0 justify-content-between align-items-center tl-9-about-row">
                <div className="col-xxl-6 col-lg-6">
                    <div className="tl-9-about-img">
                        <img src="assets/images/tl-9/about-img.jpg" alt="Class image"/>
                    </div>
                </div>
                <div className="col-xxl-5 col-lg-6">
                    <div className="tl-9-about-txt">
                        <div className="tl-9-section-heading">
                            <h2 className="tl-9-section-title">We Are The World’s Most Popular Music School.</h2>
                        </div>
                        <p className="tl-9-about-descr">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable.</p>

                        <div className="tl-9-about-stats">
                            <div className="tl-9-about-stat">
                                <img src="assets/images/tl-9/stat-1.png" alt="icon"/>

                                <div className="tl-9-about-stat-txt">
                                    <span className="tl-9-about-stat-num">36+</span>
                                    <span className="tl-9-about-stat-name">Classes</span>
                                </div>
                            </div>

                            <div className="tl-9-about-stat">
                                <img src="assets/images/tl-9/stat-2.png" alt="icon"/>

                                <div className="tl-9-about-stat-txt">
                                    <span className="tl-9-about-stat-num">54+</span>
                                    <span className="tl-9-about-stat-name">Teachers</span>
                                </div>
                            </div>

                            <div className="tl-9-about-stat">
                                <img src="assets/images/tl-9/stat-3.png" alt="icon"/>

                                <div className="tl-9-about-stat-txt">
                                    <span className="tl-9-about-stat-num">48+</span>
                                    <span className="tl-9-about-stat-name">Lessons</span>
                                </div>
                            </div>
                        </div>

                        <a href="#" className="tl-def-btn tl-9-def-btn">More About Us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection8