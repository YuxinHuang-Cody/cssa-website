'use client'
import { useTalimContext } from '@/context/TalimContext'
import React from 'react'

const BannerSection9 = () => {
    const {openVideoModal} = useTalimContext();
  return (
    <section className="tl-banner">
        <div className="container">
            <div className="row gy-5">
                <div className="col-md-8">
                    <div className="tl-banner-txt">
                        <h1 className="tl-banner-title">Let’s Build Your Future With <span className="last-word">Kidba</span>.</h1>
                        <p className="tl-banner-short-descr">Through a combination of lectures, readings, and discussions, students will gain a solid foundation in educational psychology.</p>
                        <a href="#" className="tl-def-btn">More details <i className="fa-regular fa-arrow-right-long"></i></a>
                    </div>
                </div>

                <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-end">
                    <div className="tl-banner-video">
                        <a className="tl-banner-video-btn" role="button" onClick={() => openVideoModal("https://www.youtube.com/embed/LlCwHnp3kL4?si=LaIy6AYATcccYteK")}>
                            <i className="fa-solid fa-sharp fa-play"></i>
                            <svg className="eltdf-svg-circle">
                                <circle cx="50%" cy="50%" r="50%"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="tl-banner-cards">
            <div className="row g-0 align-items-end">
                <div className="col-md-3 col-6 col-xxs-12">
                    <div className="tl-banner-single-card">
                        <h5 className="single-card-title">Board Agendas</h5>
                        <a href="#" className="single-card-action">Learn more <i className="fa-light fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-md-3 col-6 col-xxs-12">
                    <div className="tl-banner-single-card tl-banner-single-card-2">
                        <h5 className="single-card-title">Admission & Records</h5>
                        <a href="#" className="single-card-action">Learn more <i className="fa-light fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-md-3 col-6 col-xxs-12">
                    <div className="tl-banner-single-card tl-banner-single-card-3">
                        <h5 className="single-card-title">Register For Classes</h5>
                        <a href="#" className="single-card-action">Learn more <i className="fa-light fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-md-3 col-6 col-xxs-12">
                    <div className="tl-banner-single-card tl-banner-single-card-4">
                        <h5 className="single-card-title">Career Interviews</h5>
                        <a href="#" className="single-card-action">Learn more <i className="fa-light fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerSection9