'use client'
import { useTalimContext } from "@/context/TalimContext";
import React from "react";
interface PaginationProps {
  totalPage: number;
}

const AllEventPagination: React.FC<PaginationProps> = ({totalPage}) => {
    const { handleEventPageChange, currentEventPage } = useTalimContext();
  return (
    <div className="container">
      <div className="tl-pagination tl-pagination-2 pb-115">
        <button
          className="tl-pagination-prev"
          role="button"
          onClick={() => handleEventPageChange(currentEventPage - 1)}
          disabled={currentEventPage === 1}
        >
          <i className="fa-arrow-left fa-regular"></i>
        </button>

        <ul className="page-numbers">
          {Array.from({ length: totalPage }).map((_, index) => (
            <li key={index}>
              <a
                onClick={() => handleEventPageChange(index + 1)}
                className={currentEventPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="tl-pagination-prev"
          onClick={() => handleEventPageChange(currentEventPage + 1)}
          disabled={currentEventPage === totalPage}
        >
          <i className="fa-arrow-right fa-regular"></i>
        </button>
      </div>
    </div>
  )
}

export default AllEventPagination