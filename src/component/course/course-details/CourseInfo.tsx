import React from "react";

const CourseInfo = () => {
  return (
    <div className="tl-course-details-infos">
      <div className="tl-course-details-info">
        <h6 className="tl-course-details-info-name">
          <i className="fa-regular fa-user"></i>instructor
        </h6>
        <h5 className="tl-course-details-info-value">Brian Cumin</h5>
      </div>
      <div className="tl-course-details-info">
        <h6 className="tl-course-details-info-name">
          <i className="fa-regular fa-layer-group"></i>Category
        </h6>
        <h5 className="tl-course-details-info-value">Language</h5>
      </div>
      <div className="tl-course-details-info">
        <h6 className="tl-course-details-info-name">
          <i className="fa-regular fa-user-graduate"></i>Students
        </h6>
        <h5 className="tl-course-details-info-value">245+</h5>
      </div>
      <div className="tl-course-details-info">
        <h6 className="tl-course-details-info-name">
          <i className="fa-solid fa-sharp fa-star"></i>Ratings
        </h6>
        <div className="tl-course-details-stars tl-course-details-info-value">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
