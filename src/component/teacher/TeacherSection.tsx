import { teacherList } from "@/data/Data";
import Link from "next/link";
import React from "react";

const TeacherSection = () => {
  return (
    <section className="tl-2-teachers pt-120 pb-120">
      <div className="container">
        <div className="tl-2-section-heading">
          <h2 className="tl-2-section-title">Our Best Teachers</h2>
          <Link href="/staff" className="tl-2-blog-btn">
            <span className="tl-2-blog-btn-icon">
              <i className="fa-regular fa-arrow-up-right"></i>
            </span>{" "}
            All Instructors
          </Link>
        </div>

        <div className="row justify-content-center tl-2-teachers-row">
            {teacherList.slice(0,3).map((item) => (
               <div className="col-lg-4 col-sm-6 col-6 col-xxs-12" key={item.id}>
            <div className="tl-2-teacher">
              <img src={item.imgSrc} alt="Teacher Image" />
              <div className="tl-2-teacher-txt">
                <ul className="tl-2-teacher-socials">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
                <div className="tl-2-teacher-info">
                  <h5 className="tl-2-teacher-title">
                    <Link href={`/staff/${item.slug}`}>{item.name}</Link>
                  </h5>
                  <h6 className="tl-2-teacher-sub-title">{item.position}</h6>
                </div>
              </div>
            </div>
          </div> 
            ))}
          
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;
