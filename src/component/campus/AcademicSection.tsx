import React from 'react'

const AcademicSection = () => {
  return (
    <section className="tl-5-academic">
        <div className="container">
            <h2 className="tl-5-section-title mtm-15">Academics</h2>

            <div className="row g-lg-4 g-3">
                <div className="col-xl-3 col-lg-4 col-6 col-xxs-12">
                    <div className="tl-5-single-academic">
                        <div className="tl-5-single-academic-img">
                            <img src="assets/images/tl-5/academic-1.jpg" alt="Academic Image"/>

                            <div className="tl-5-single-academic-txt">
                                <h5 className="tl-5-single-academic-title">Undergraduate Study</h5>
                                <a href="#">Read More <i className="fa-regular fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-6 col-xxs-12">
                    <div className="tl-5-single-academic tl-5-single-academic-2">
                        <div className="tl-5-single-academic-img">
                            <img src="assets/images/tl-5/academic-2.jpg" alt="Academic Image"/>

                            <div className="tl-5-single-academic-txt">
                                <h5 className="tl-5-single-academic-title">Global Education</h5>
                                <a href="#">Read More <i className="fa-regular fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-6 col-xxs-12">
                    <div className="tl-5-single-academic tl-5-single-academic-3">
                        <div className="tl-5-single-academic-img">
                            <img src="assets/images/tl-5/academic-3.jpg" alt="Academic Image"/>

                            <div className="tl-5-single-academic-txt">
                                <h5 className="tl-5-single-academic-title">Summer Session</h5>
                                <a href="#">Read More <i className="fa-regular fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-6 col-xxs-12">
                    <div className="tl-5-single-academic tl-5-single-academic-4">
                        <div className="tl-5-single-academic-img">
                            <img src="assets/images/tl-5/academic-4.jpg" alt="Academic Image"/>

                            <div className="tl-5-single-academic-txt">
                                <h5 className="tl-5-single-academic-title">Online Learning</h5>
                                <a href="#">Read More <i className="fa-regular fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AcademicSection