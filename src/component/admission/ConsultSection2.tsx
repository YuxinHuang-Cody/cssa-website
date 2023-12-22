import React from 'react'
import ConsultForm from '../form/ConsultForm'

const ConsultSection2 = () => {
  return (
    <section className="tl-3-consult tl-3-section-spacing">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="tl-3-consult-img">
                        <h2 className="tl-3-section-title">Do you have a contact ?</h2>
                        <img src="assets/images/tl-3/consult-img.jpg" alt="consult image"/>
                    </div>
                </div>

                <div className="col-lg-6 col-9 col-xxs-12">
                    <ConsultForm style='tl-3-consult-form' column='col-12' btnStyle="tl-3-def-btn"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ConsultSection2