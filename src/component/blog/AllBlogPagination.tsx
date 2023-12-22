"use client";
import { useTalimContext } from "@/context/TalimContext";
import React from "react";
interface PaginationProps {
  totalPage: number;
}
const AllBlogPagination: React.FC<PaginationProps> = ({ totalPage }) => {
  const { handleBlogPageChange, currentBlogPage } = useTalimContext();
  return (
    <div className="container">
      <div className="tl-pagination tl-pagination-2 pb-115">
        <button
          className="tl-pagination-prev"
          role="button"
          onClick={() => handleBlogPageChange(currentBlogPage - 1)}
          disabled={currentBlogPage === 1}
        >
          <i className="fa-arrow-left fa-regular"></i>
        </button>

        <ul className="page-numbers">
          {Array.from({ length: totalPage }).map((_, index) => (
            <li key={index}>
              <a
                onClick={() => handleBlogPageChange(index + 1)}
                className={currentBlogPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="tl-pagination-prev"
          onClick={() => handleBlogPageChange(currentBlogPage + 1)}
          disabled={currentBlogPage === totalPage}
        >
          <i className="fa-arrow-right fa-regular"></i>
        </button>
      </div>
    </div>
  );
};

export default AllBlogPagination;
