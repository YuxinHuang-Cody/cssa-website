import React from 'react'

const AboutSection = () => {
  return (
    <section className="tl-1-about pt-120 pb-120">
        <div className="container">
            <div className="row align-items-center tl-1-about-row">
                <div className="col-lg-6">
                    <div className="tl-1-about-img">
                        <img src="assets/images/kb-16/banner-img.jpg" alt="Banner Image" className="tl-1-about-main-img"/>
                        <img src="assets/images/tl-1/sticker.png" alt="sticker" className="tl-1-about-sticker"/>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="tl-1-about-txt">
                        <h2 className="tl-1-section-title">Revolutionizing Education Through LMS Solutions.</h2>
                        <p className="tl-1-about-descr">Mauris sit amet lacinia est, vitae tristique metus. Nulla facilisi. Mauris tempor nibh vitae pulvinar ultricies. Sed malesuada placerat metus. Vivamus sagittis arcu elit semper, eget varius turpis posuere. Suspendisse ac nibh cursus, dignissim urna a, porttitor nisi.</p>

                        <div className="tl-1-about-author">
                            <div className="tl-1-about-author-intro">
                                <div className="tl-1-about-author-img">
                                    <img src="assets/images/tl-3/author-img.png" alt="Author image"/>
                                </div>
                                <div className="tl-1-about-author-info">
                                    <h5 className="tl-1-about-author-name">Hugh Millie-Yate</h5>
                                    <span className="tl-1-about-author-role">Vice Principal</span>
                                </div>
                            </div>
                            <div className="tl-1-about-author-signature">
                                <img src="assets/images/tl-3/signature.png" alt="signature"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tl-1-stats">
                <div className="tl-1-stat">
                    <span className="tl-1-stat-num">29+</span>
                    <h6 className="tl-1-stat-name">Year Experiences</h6>
                </div>
                <div className="tl-1-stat">
                    <span className="tl-1-stat-num">5k+</span>
                    <h6 className="tl-1-stat-name">Enrolled Learners</h6>
                </div>
                <div className="tl-1-stat">
                    <span className="tl-1-stat-num">36+</span>
                    <h6 className="tl-1-stat-name">Education Awards</h6>
                </div>
                <div className="tl-1-stat">
                    <span className="tl-1-stat-num">8k+</span>
                    <h6 className="tl-1-stat-name">Video Tutorials</h6>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection