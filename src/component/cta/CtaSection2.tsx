import React from 'react'
interface CtaProps {
    style: string;
}
const CtaSection2:React.FC<CtaProps> = ({style}) => {
  return (
    <section className={`tl-3-cta ${style} container`}>
        <div className="row gy-4 align-items-center">
            <div className="col-lg-6 col-md-8">
                <div className="tl-3-cta-txt">
                    <h2 className="tl-3-section-title">Apply For Admission</h2>
                    <p className="tl-3-cta-descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod non arcu nec volutpat.</p>
                </div>
            </div>

            <div className="col-lg-6 col-md-4">
                <div className="tl-3-cta-btn text-start text-md-end">
                    <a href="#" className="tl-3-def-btn">Apply Now</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CtaSection2