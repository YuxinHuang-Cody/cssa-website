import React from 'react'

const ServiceSection = () => {
  return (
    <section className="tl-1-services pt-120 pb-120">
        <div className="container">
            <div className="tl-1-section-heading">
                <h2 className="tl-1-section-title">A Collection of Resources For all Thinks eLearning</h2>
            </div>

            <div className="row tl-1-services-row justify-content-center">
                <div className="col-lg-4 col-sm-6">
                    <div className="tl-1-service">
                        <div className="tl-1-service-heading">
                            <div className="tl-1-service-icon">
                                <img src="assets/images/tl-1/service-1.png" alt="Icon"/>
                            </div>

                            <span className="tl-1-service-order-numb">01</span>
                        </div>

                        <h4 className="tl-1-service-title"><a href="#">Guides & Templates</a></h4>
                        <p className="tl-1-service-descr">Morbi hendrerit pharetra nunc, eget suscipit lectus posuere quis varius natoque penatibus et magnis dis parturient montes.</p>
                        <a href="#" className="tl-1-service-btn"><i className="fa-regular fa-arrow-right-long"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="tl-1-service">
                        <div className="tl-1-service-heading">
                            <div className="tl-1-service-icon">
                                <img src="assets/images/tl-1/service-2.png" alt="Icon"/>
                            </div>

                            <span className="tl-1-service-order-numb">02</span>
                        </div>

                        <h4 className="tl-1-service-title"><a href="#">Weekly Webinars</a></h4>
                        <p className="tl-1-service-descr">Morbi hendrerit pharetra nunc, eget suscipit lectus posuere quis varius natoque penatibus et magnis dis parturient montes.</p>
                        <a href="#" className="tl-1-service-btn"><i className="fa-regular fa-arrow-right-long"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="tl-1-service">
                        <div className="tl-1-service-heading">
                            <div className="tl-1-service-icon">
                                <img src="assets/images/tl-1/service-3.png" alt="Icon"/>
                            </div>

                            <span className="tl-1-service-order-numb">03</span>
                        </div>

                        <h4 className="tl-1-service-title"><a href="#">Certification Hold</a></h4>
                        <p className="tl-1-service-descr">Morbi hendrerit pharetra nunc, eget suscipit lectus posuere quis varius natoque penatibus et magnis dis parturient montes.</p>
                        <a href="#" className="tl-1-service-btn"><i className="fa-regular fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceSection