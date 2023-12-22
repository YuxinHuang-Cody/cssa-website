import React from 'react'
import AdmissionForm from '../form/AdmissionForm'
interface Props {
    inner: string;
}
const AboutSection5:React.FC<Props> = ({inner}) => {
  return (
    <section className={`tl-5-about ${inner}`}>
        <div className="container">
            <div className="row gy-4 justify-content-between">
                <div className="col-xxl-5 col-lg-6">
                    <p className="tl-5-about-dialogue">
                        Campus life offers opportunities for personal development, networking, and building lifelong friendships.
                    </p>
                </div>

                <div className="col-xxl-5 col-lg-6">
                    <blockquote className="tl-5-about-txt">
                        <p>University life refers to the experience of attending a college or university, typically after completing high school education. It is a significant phase in a person's life, characterized by academic pursuits, personal growth, social interactions, and newfound independence.</p>

                        <h5 className="tl-5-about-author-name">
                            Don Norman
                        </h5>
                    </blockquote>
                </div>
            </div>


            <div className="tl-5-about-img">
                <img src="assets/images/tl-5/about.jpg" alt="Students"/>

                <AdmissionForm style=''/>
            </div>
        </div>
    </section>
  )
}

export default AboutSection5