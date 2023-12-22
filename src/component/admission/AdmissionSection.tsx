import React from 'react'
import AdmissionForm from '../form/AdmissionForm';
interface Props {
    style: string;
}
const AdmissionSection:React.FC<Props> = ({style}) => {
  return (
    <section className={`tl-4-admission ${style}`}>
        <div className="container">
            <div className="tl-5-about-img tl-4-admission-img">
                <img src="assets/images/tl-4/admission-bg.jpg" alt="Students"/>

                <AdmissionForm style='tl-4-admission-form'/>
            </div>
        </div>
    </section>
  )
}

export default AdmissionSection