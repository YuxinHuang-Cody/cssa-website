'use client'
import { useTalimContext } from '@/context/TalimContext'
import React from 'react'

const AboutSection11 = () => {
    const {openVideoModal} = useTalimContext()
  return (
    <section className="tl-14-about pt-120 pb-120" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container">
            <div className="row gy-4 align-items-center">
                <div className="col-lg-6">
                    <div className="tl-14-about-img">
                        <img src="assets/images/tl-14/about-img.jpg" alt="Image"/>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="tl-14-about-txt">
                        <h6 className="tl-13-about-sub-title">Next Level Learning</h6>
                        <h2 className="tl-14-section-title">Potential Online Learning Management System.</h2>
                        <p className="tl-14-about-descr">Mauris sit amet lacinia est, vitae tristique metus. Nulla facilisi. Mauris tempor nibh vitae pulvinar ultricies. Sed malesuada placerat metus. Vivamus sagittis arcu elit semper, eget varius turpis posuere.</p>

                        <ul className="tl-14-about-service-list">
                            <li>Admission & Records</li>
                            <li>Board Agendas</li>
                            <li>Career Interviews</li>
                            <li>Register For Classes</li>
                        </ul>

                        <div className="tl-14-about-actions">
                            <div className="tl-14-about-video">
                                <a 
                                className="tl-14-about-video-btn"
                                role='button'
                                onClick={() => openVideoModal("https://www.youtube.com/embed/nUeg_8_L0Bk?si=zAnCRuVPv-g_0s1l" )}
                                ><i className="fa-solid fa-play"></i></a>
                                <span className="tl-14-about-video-txt">Watch Video</span>
                            </div>

                            <div className="tl-14-about-achievement">
                                <span className="achievement-num">23+</span>
                                <span className="achievement-name">Years Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection11