import React from 'react'

const BannerSection11 = () => {
  return (
    <section className="tl-12-banner">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="tl-12-banner-txt">
                        <h1 className="tl-12-banner-title">Find your preferred <span className="tag">Live</span> Courses & improve skills.</h1>
                        <p className="tl-12-banner-descr">Through a combination of lectures, readings, and discussions, students will gain a solid foundation in educational psychology.</p>

                        <div className="tl-12-banner-btns">
                            <a href="#" className="tl-def-btn">Start Learning <i className="fa-regular fa-arrow-right-long"></i></a>
                            <a href="#" className="tl-def-btn tl-12-banner-btn-2">Skill Test <i className="fa-regular fa-arrow-right-long"></i></a>
                        </div>

                        <ul className="tl-12-banner-features">
                            <li className="tl-12-banner-feature">
                                <img src="assets/images/tl-12/feat-1.png" alt="Icon"/>
                                <span className="tl-12-feature-name">4k Video Class</span>
                            </li>
                            <li className="tl-12-banner-feature">
                                <img src="assets/images/tl-12/feat-2.png" alt="Icon"/>
                                <span className="tl-12-feature-name">18k Total Student</span>
                            </li>
                            <li className="tl-12-banner-feature">
                                <img src="assets/images/tl-12/feat-3.png" alt="Icon"/>
                                <span className="tl-12-feature-name">Complete Graduation</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="tl-12-banner-img">
                        <img src="assets/images/tl-12/banner-img.jpg" alt="Banner image"/>
                        <span className="tl-12-banner-img-tag">Live</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerSection11