import { courseList } from '@/data/Data';
import Link from 'next/link';
import React from 'react'
interface TeacherProps {
    data: {
        imgSrc: string;
        name: string;
        position: string;
    }
}
const TeacherDetailSection:React.FC<TeacherProps> = ({data}) => {
  return (
    <div className="tl-staff-profile pt-120 pb-120">
        <div className="container">
            <div className="tl-staff-profile-top">
                <img src={`/${data.imgSrc}`} alt="staff image"/>

                <div className="tl-staff-profile-txt">
                    <div className="tl-staff-profile-intro">
                        <div>
                            <h4 className="tl-staff-profile-name">{data.name}</h4>
                            <h6 className="tl-staff-profile-role">{data.position} at Talim</h6>
                        </div>
                        <ul className="tl-3-footer-socials tl-staff-profile-socials">
                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        </ul>
                    </div>

                    <p className="tl-staff-profile-bio">an inspiring educator, has dedicated his life to nurturing young minds. With a degree in English Education from Riverside University, he embarked on his journey at Oakridge High School. Through innovative teaching, she cultivated an inclusive classroom where every student's voice was valued. Sarah's impact stretched beyond the classroom, leading workshops and embracing technology to enhance learning. his legacy is woven through the success stories of students who continue to be inspired by his passion for education.</p>
                </div>

                <div className="tl-course-details-infos tl-staff-profile-infos">
                    <div className="tl-course-details-info">
                        <h5 className="tl-staff-profile-info-value">21+</h5>
                        <h6 className="tl-course-details-info-name">Courses</h6>
                    </div>
                    <div className="tl-course-details-info">
                        <h5 className="tl-staff-profile-info-value">231+</h5>
                        <h6 className="tl-course-details-info-name">Students</h6>
                    </div>
                    <div className="tl-course-details-info">
                        <h5 className="tl-staff-profile-info-value">4.6/5</h5>
                        <h6 className="tl-course-details-info-name">Ratings</h6>
                    </div>
                </div>
            </div>

            <div className="tl-staff-profile-courses">
                <h3 className="tl-staff-profile-courses-title">All course of the instructor</h3>
                <div className="row g-3 g-xl-4">
                    {courseList.slice(0,9).map((item) => (
                        <div className="col-lg-4 col-sm-6" key={item.id}>
                            <div className="tl-1-course">
                                <div className="tl-1-course-img">
                                    <img src={`/${item.imgSrc}`} alt="Course Image"/>
                                    <span className="tl-1-course-price">{item.price}</span>
                                </div>

                                <div className="tl-1-course-txt">
                                    <span className="tl-1-course-author">By <a href="#">{data.name}</a></span>
                                    <h4 className="tl-1-course-title"><Link href={`/course/${item.slug}`}>{item.title}</Link></h4>
                                    <div className="tl-1-course-stats">
                                        <div className="tl-1-course-stat">
                                            <span className="tl-1-course-stat-icon"><i className="fa-regular fa-book-blank"></i></span>
                                            <span className="tl-1-course-stat-txt">{item.lessons} Lessons</span>
                                        </div>

                                        <div className="tl-1-course-stat">
                                            <span className="tl-1-course-stat-icon"><i className="fa-regular fa-user-group"></i></span>
                                            <span className="tl-1-course-stat-txt">{item.students} Students</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeacherDetailSection