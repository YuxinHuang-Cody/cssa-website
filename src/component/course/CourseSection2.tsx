import React from "react";

const CourseSection2 = () => {
  return (
    <section className="tl-10-course pb-120">
      <div className="container">
        <div className="tl-10-course-row">
          <div className="tl-10-single-course">
            <h3 className="tl-10-single-course-title">Undergaduate</h3>
            <p className="tl-10-single-course-descr">
              Lorem ipsum dolorous rises quiz varus qualm quisque id connecter
              adipescent commode impediment.
            </p>

            <ul className="course-subjects">
              <li>Business & Administration</li>
              <li>Corporate Finance</li>
            </ul>

            <p className="course-type">
              <i className="fa-regular fa-clock"></i> Online + OnSite
            </p>
          </div>

          <div className="tl-10-single-course active tl-10-single-course-2">
            <h3 className="tl-10-single-course-title">Graduate</h3>
            <p className="tl-10-single-course-descr">
              Lorem ipsum dolorous rises quiz varus qualm quisque id connecter
              adipescent commode impediment.
            </p>

            <ul className="course-subjects">
              <li>Business & Administration</li>
              <li>Corporate Finance</li>
              <li>Biotechnology</li>
              <li>Major in Economics</li>
              <li>Public Administration</li>
            </ul>

            <p className="course-type">
              <i className="fa-regular fa-clock"></i> Online + OnSite
            </p>
          </div>

          <div className="tl-10-single-course tl-10-single-course-3">
            <h3 className="tl-10-single-course-title">Online Education</h3>
            <p className="tl-10-single-course-descr">
              Lorem ipsum dolorous rises quiz varus qualm quisque id connecter
              adipescent commode impediment.
            </p>

            <ul className="course-subjects">
              <li>Business & Administration</li>
              <li>Corporate Finance</li>
            </ul>

            <p className="course-type">
              <i className="fa-regular fa-clock"></i> Online only
            </p>
          </div>

          <a href="#" className="tl-10-course-btn">
            <img src="assets/images/tl-10/arrow.png" alt="arrow icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseSection2;
