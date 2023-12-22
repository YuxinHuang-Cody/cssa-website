"use client";
import { useTalimContext } from "@/context/TalimContext";
import React from "react";
interface PaginationProps {
  totalPage: number;
  style: string;
}

const CoursePaginationSection: React.FC<PaginationProps> = ({ totalPage,style }) => {
    const { handleCoursePageChange, currentCoursePage } = useTalimContext();
  return (
    <div className="container">
        <div className={style}>
        <button
          className="tl-pagination-prev"
          role="button"
          onClick={() => handleCoursePageChange(currentCoursePage - 1)}
          disabled={currentCoursePage === 1}
        >
          <i className="fa-arrow-left fa-regular"></i>
        </button>

        <ul className="page-numbers">
          {Array.from({ length: totalPage }).map((_, index) => (
            <li key={index}>
              <a
                onClick={() => handleCoursePageChange(index + 1)}
                className={currentCoursePage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="tl-pagination-prev"
          onClick={() => handleCoursePageChange(currentCoursePage + 1)}
          disabled={currentCoursePage === totalPage}
        >
          <i className="fa-arrow-right fa-regular"></i>
        </button>
        </div>
    </div>
  )
}

export default CoursePaginationSection