import React from "react";
import CourseVideo from "./course-details/CourseVideo";
import CourseInfo from "./course-details/CourseInfo";
import CourseTabSection from "./course-details/CourseTabSection";
import TopCourseSection from "./course-details/TopCourseSection";
import CourseRightsideInfo from "./course-details/CourseRightsideInfo";
import UpcomingCourse from "./course-details/UpcomingCourse";
interface CourseProps {
  courseData: {
    id: number;
    youtubeUrl: string;
    imgSrc: string;
    price: string;
    author: string;
    title: string;
    slug: string;
    lessons: number;
    students: number;
    desc: string;
    age: string;
    time: string;
    seat: number;
    category?: string | null;
  }
}
const CourseDetailSection:React.FC<CourseProps> = ({courseData}) => {
  return (
    <div className="tl-event-details-container pt-120 pb-120">
      <div className="container">
        <div className="row g-0 tl-event-details-row">
          <div className="col-lg-8">
            <div className="tl-event-details-left">
              <CourseVideo url={courseData.youtubeUrl} title={courseData.title}/>
              <CourseInfo/>
              <CourseTabSection/>
            </div>

            <div className="tl-event-details-left mt-30">
              <TopCourseSection/>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="tl-event-details-right">
              <div className="tl-course-details-sidebar-heading">
                <iframe
                  src="https://www.youtube.com/embed/SEO9YPzSH-0?si=doOkRVmfpzt3BlZO"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                <h3 className="tl-course-details-price">
                  $160{" "}
                  <span className="prev-price text-decoration-line-through">
                    $200
                  </span>
                </h3>
              </div>
              <CourseRightsideInfo/>
              <img
                className="tl-course-details-payment-methods"
                src="/assets/images/card.png"
                alt=""
              />
              <a
                href="#"
                className="tl-def-btn tl-3-def-btn tl-event-details-book-btn"
              >
                Enroll Now
              </a>
            </div>
            <UpcomingCourse/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailSection;
