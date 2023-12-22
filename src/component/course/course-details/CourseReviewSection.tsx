'use client'
import React from "react";

const CourseReviewSection = () => {
  return (
    <>
      <div className="tl-event-details-area tl-course-details-review">
        <div className="tl-course-details-stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>

        <p className="tl-2-testimony-txt">
          It was my immense luck and fortune to be a part of Educlab University
          where I can grow. The entire faculty & department leaves no stone
          unturned to shape one's future in my four years.
        </p>

        <div className="tl-2-testimony-reviewer">
          <img
            src="/assets/images/tl-2/reviewer-2.jpg"
            alt="Person"
            className="tl-2-testimony-reviewer-img"
          />
          <div className="tl-2-testimony-reviewer-info">
            <h6 className="tl-2-testimony-reviewer-name">Alan Corey</h6>
            <p className="tl-2-testimony-reviewer-label">
              B.Tech - Civil, 2015 - 2020
            </p>
          </div>
        </div>
      </div>

      <div className="tl-event-details-area tl-course-details-review">
        <div className="tl-course-details-stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>

        <p className="tl-2-testimony-txt">
          It was my immense luck and fortune to be a part of Educlab University
          where I can grow. The entire faculty & department leaves no stone
          unturned to shape one's future in my four years.
        </p>

        <div className="tl-2-testimony-reviewer">
          <img
            src="/assets/images/tl-2/reviewer-1.jpg"
            alt="Person"
            className="tl-2-testimony-reviewer-img"
          />
          <div className="tl-2-testimony-reviewer-info">
            <h6 className="tl-2-testimony-reviewer-name">Brian Cumin</h6>
            <p className="tl-2-testimony-reviewer-label">
              B.Tech - Civil, 2015 - 2020
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseReviewSection;
