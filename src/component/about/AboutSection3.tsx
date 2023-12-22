import React from 'react'

const AboutSection3 = () => {
  return (
    <section className="tl-3-about tl-3-section-spacing">
        <div className="container">
            <div className="row gy-4 gy-sm-5 align-items-center">
                <div className="col-lg-6">
                    <div className="tl-3-about-txt">
                        <h2 className="tl-3-section-title">Experience in School Leadership & Teaching</h2>
                        <p className="tl-3-about-descr">Mauris sit amet lacinia est, vitae tristique metus. Nulla facilisi. Mauris tempor nibh vitae pulvinar ultricies. Sed malesuada placerat metus. Vivamus sagittis arcu eu elit semper, eget varius turpis posuere. Suspendisse ac nibh cursus, dignissim urna a, porttitor nisi.</p>

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

                <div className="col-lg-6">
                    <div className="tl-3-about-img">
                        <img src="assets/images/tl-3/about-img-1.jpg" alt="School Picture"/>
                        <img src="assets/images/tl-3/about-img-2.jpg" alt="School Picture"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection3