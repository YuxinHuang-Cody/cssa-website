import { courseList } from "@/data/Data";
import Link from "next/link";
import React from "react";

const TopCourseSection = () => {
  return (
    <div className="tl-course-details-top-courses tl-event-details-area mt-0">
      <h3 className="tl-event-details-area-title">
        Top Courses from the same instructor
      </h3>

      <div className="row g-4">
        {courseList.slice(0,2).map((item) => (
         <div className="col-md-6" key={item.id}>
          <div className="tl-1-course">
            <div className="tl-1-course-img">
              <img
                src={`/${item.imgSrc}`}
                alt="Course Image"
              />
              <span className="tl-1-course-price">{item.price}</span>
            </div>

            <div className="tl-1-course-txt">
              <span className="tl-1-course-author">
                By <a href="#">{item.author}</a>
              </span>
              <h4 className="tl-1-course-title">
                <Link href={`/course/${item.slug}`}>
                  {item.title}
                </Link>
              </h4>
              <div className="tl-1-course-stats">
                <div className="tl-1-course-stat">
                  <span className="tl-1-course-stat-icon">
                    <i className="fa-regular fa-book-blank"></i>
                  </span>
                  <span className="tl-1-course-stat-txt">{item.lessons} Lessons</span>
                </div>

                <div className="tl-1-course-stat">
                  <span className="tl-1-course-stat-icon">
                    <i className="fa-regular fa-user-group"></i>
                  </span>
                  <span className="tl-1-course-stat-txt">{item.students} Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>   
        ))}
        
      </div>
    </div>
  );
};

export default TopCourseSection;
