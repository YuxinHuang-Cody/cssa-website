import React from 'react'

const AboutSection4 = () => {
  return (
    <section className="tl-4-about tl-3-section-spacing">
        <div className="container">
            <div className="row gy-4 gy-sm-5 align-items-center">
                <div className="col-lg-6 order-lg-1 order-2">
                    <div className="tl-3-about-img tl-4-about-img">
                        <img src="assets/images/tl-4/about-img-1.jpg" alt="School Picture"/>
                        <img src="assets/images/tl-4/about-img-2.jpg" alt="School Picture"/>
                    </div>
                </div>

                <div className="col-lg-6 order-lg-2 order-1">
                    <div className="tl-4-about-txt">
                        <h2 className="tl-4-section-title">Experience in School Leadership & Teaching</h2>
                        <p className="tl-4-about-descr">Mauris sit amet lacinia est, vitae tristique metus. Nulla facilisi. Mauris tempor nibh vitae pulvinar ultricies. Sed malesuada placerat metus. Vivamus sagittis arcu eu elit semper, eget varius turpis posuere. Suspendisse ac nibh cursus, dignissim urna a, porttitor nisi.</p>

                        <div className="tl-4-about-stats">
                            <div className="tl-4-about-stat">
                                <div className="tl-4-about-stat-txt">
                                    <span className="tl-4-about-stat-num">52+</span>
                                    <span className="tl-4-about-stat-name">Our Teachers</span>
                                </div>
                            </div>

                            <div className="tl-4-about-stat">
                                <div className="tl-4-about-stat-txt">
                                    <span className="tl-4-about-stat-num">85+</span>
                                    <span className="tl-4-about-stat-name">National Awards</span>
                                </div>
                            </div>

                            <div className="tl-4-about-stat">
                                <div className="tl-4-about-stat-txt">
                                    <span className="tl-4-about-stat-num">2k+</span>
                                    <span className="tl-4-about-stat-name">Student Enrolled</span>
                                </div>
                            </div>
                        </div>

                        <div className="tl-4-about-txt-bottom">
                            <a href="#" className="tl-def-btn tl-4-def-btn">More Details <i className="fa-light fa-angle-right"></i></a>

                            <div className="tl-4-about-support">
                                <img src="assets/images/tl-4/support.png" alt="support icon"/>
                                <div>
                                    <span className="tl-4-about-support-txt">Get Support</span>
                                    <a href="mailto:info@gmail.com" className="tl-4-about-support-mail">info@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection4