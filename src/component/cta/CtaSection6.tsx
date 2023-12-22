import React from 'react'

const CtaSection6 = () => {
  return (
    <section className="tl-14-cta" data-bg-color="var(--black)">
        <div className="container">
            <div className="row tl-14-cta-row align-items-center">
                <div className="col-xxl-7 col-lg-6">
                    <div className="tl-14-cta-img d-flex justify-content-end">
                        <img src="assets/images/tl-14/cta-img.jpg" alt="image"/>
                    </div>
                </div>

                <div className="col-xxl-5 col-lg-6">
                    <div className="tl-14-cta-txt">
                        <h2 className="tl-14-section-title tl-14-cta-title">Empowering Organizations Through an Effective Learning Management System.</h2>
                        <p className="tl-14-cta-descr">Mauris sit amet lacinia est, vitae tristique metus. Nulla facilisi.</p>
                        <div className="tl-14-cta-btns">
                            <a href="#" className="tl-def-btn tl-14-def-btn">Let’s Talk</a>
                            <a href="#" className="tl-14-cta-btn-2">See Online Demo <i className="fa-regular fa-arrow-right"></i></a>
                        </div>

                        <div className="tl-14-cta-vectors">
                            <img src="assets/images/tl-14/vector-1.png" alt="Vector"/>
                            <img src="assets/images/tl-14/vector-2.png" alt="Vector"/>
                            <img src="assets/images/tl-14/vector-3.png" alt="Vector"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CtaSection6