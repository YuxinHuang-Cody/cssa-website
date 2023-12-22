import React from 'react'
import ConsultForm from '../form/ConsultForm';
interface Props {
    padding: string;
}
const ConsultSection:React.FC<Props> = ({padding}) => {
  return (
    <section className={`tl-5-consult ${padding}`}>
        <div className="tl-5-consult-form-container">
            <div className="tl-5-consult-heading">
                <h6 className="tl-5-consult-sub-title">Get a Consultation</h6>
                <h2 className="tl-5-section-title">Students Consultation</h2>
            </div>

            <ConsultForm style='' column='col-sm-6' btnStyle='tl-5-def-btn'/>
        </div>

        <div className="tl-5-consult-img">
            <img src="assets/images/tl-5/consult-img.jpg" alt="Students"/>
        </div>
    </section>
  )
}

export default ConsultSection