import React from "react";

const CourseInstructorDetails = () => {
  return (
    <div className="tl-course-details-instructor tl-event-details-area">
      <div className="tl-course-details-instructor-heading">
        <img
          className="tl-course-details-instructor-img"
          src="/assets/images/tl-2/teacher-1.jpg"
          alt="instructor Image"
        />

        <div className="tl-course-details-instructor-info">
          <h5 className="tl-course-details-instructor-name">
            <a href="staff-profile.html">Brian Cumin</a>
          </h5>
          <h6 className="tl-staff-profile-role">Sr. Instructor at Talim</h6>
          <ul className="tl-course-details-instructor-socials">
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="tl-course-details-instructor-txt">
        <p className="tl-course-details-instructor-intro">
          Hello! I'm Brian Cumin, your guide in the "Mastering English Speaking"
          course. As a seasoned language enthusiast with 03+ years of
          experience, I'm here to help you unlock the world of fluent English
          communication. Get ready to embark on an exciting journey where we'll
          build essential skills, explore diverse topics, and boost your
          confidence in speaking English. Let's make this learning experience
          impactful and enjoyable together. Ready to get started? Let's dive in!
        </p>
      </div>
    </div>
  );
};

export default CourseInstructorDetails;
