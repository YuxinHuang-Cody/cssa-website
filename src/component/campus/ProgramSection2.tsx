import React from 'react'

const ProgramSection2 = () => {
  return (
    <section className="tl-9-programs tl-9-section-spacing">
        <div className="container">
            <div className="tl-9-section-heading">
                <div className="tl-9-section-heading">
                    <h2 className="tl-9-section-title program-section-2" data-text="Our Programs">Grade Programs</h2>
                </div>
            </div>

            <div className="row justify-content-center gy-4">
                <div className="col-lg-4 col-md-6">
                    <div className="tl-9-program">
                        <div className="tl-9-program-img">
                            <img src="assets/images/tl-9/prog-1.jpg" alt="Program image"/>
                            <img src="assets/images/tl-9/prog-icon-1.png" alt="Program image" className="tl-9-program-icon"/>
                        </div>

                        <div className="tl-9-program-txt">
                            <h3 className="tl-9-program-title"><a href="#">Preschool Worksheets.</a></h3>
                            <p className="tl-9-program-descr">Lorem ipsum dolor sit consectetur adipiscing elit Ut maximus libero.</p>
                            <a href="#" className="tl-9-program-btn">Learn More <i className="fa-regular fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="tl-9-program">
                        <div className="tl-9-program-img">
                            <img src="assets/images/tl-9/prog-2.jpg" alt="Program image"/>
                            <img src="assets/images/tl-9/prog-icon-1.png" alt="Program image" className="tl-9-program-icon"/>
                        </div>

                        <div className="tl-9-program-txt">
                            <h3 className="tl-9-program-title"><a href="#">Schooler Preschool.</a></h3>
                            <p className="tl-9-program-descr">Lorem ipsum dolor sit consectetur adipiscing elit Ut maximus libero.</p>
                            <a href="#" className="tl-9-program-btn">Learn More <i className="fa-regular fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="tl-9-program">
                        <div className="tl-9-program-img">
                            <img src="assets/images/tl-9/prog-3.jpg" alt="Program image"/>
                            <img src="assets/images/tl-9/prog-icon-1.png" alt="Program image" className="tl-9-program-icon"/>
                        </div>

                        <div className="tl-9-program-txt">
                            <h3 className="tl-9-program-title"><a href="#">Teenager Synonym.</a></h3>
                            <p className="tl-9-program-descr">Lorem ipsum dolor sit consectetur adipiscing elit Ut maximus libero.</p>
                            <a href="#" className="tl-9-program-btn">Learn More <i className="fa-regular fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProgramSection2