import React from 'react'
interface DataProps {
    show: boolean;
}
const CurriculumData:React.FC<DataProps> = ({show}) => {
  return (
    <div
    id="collapseOne"
    className={`accordion-collapse collapse ${show && 'show'}`}
    data-bs-parent="#accordionExample"
    >
        <div className="accordion-body">
            <a href="#" className="tl-course-details-content">
            <span className="tl-course-details-content-left">
                <i className="fa-regular fa-video"></i> Mastering
                Pronunciation and Intonation
            </span>

            <span className="tl-course-details-content-right">
                <span className="tl-course-details-duration">43:28m</span>
                <span className="tl-course-details-availability">
                <i className="fa-regular fa-lock-open"></i>
                </span>
            </span>
            </a>

            <a href="#" className="tl-course-details-content">
            <span className="tl-course-details-content-left">
                <i className="fa-regular fa-video"></i> Building a Strong
                Vocabulary for Everyday Communication
            </span>

            <span className="tl-course-details-content-right">
                <span className="tl-course-details-duration">
                01:05hrs
                </span>
                <span className="tl-course-details-availability">
                <i className="fa-regular fa-lock"></i>
                </span>
            </span>
            </a>

            <a href="#" className="tl-course-details-content">
            <span className="tl-course-details-content-left">
                <i className="fa-regular fa-file-contract"></i>{" "}
                Understanding Basic Sentence Structure and Grammar
            </span>

            <span className="tl-course-details-content-right">
                <span className="tl-course-details-duration">01:05h</span>
                <span className="tl-course-details-availability">
                <i className="fa-regular fa-lock"></i>
                </span>
            </span>
            </a>
        </div>
    </div>
  )
}

export default CurriculumData