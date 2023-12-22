import React from 'react'

const CoursePaginationSection4 = () => {
  return (
    <div className="container">
        <div className="tl-pagination pb-130">
            <a href="#" className="tl-pagination-prev">
                <i className="fa-arrow-left fa-regular"></i>
            </a>

            <ul className="page-numbers">
                <li><a href="#">01</a></li>
                <li><a href="#" className="active">02</a></li>
                <li><span className="dots"><i className="fa-regular fa-ellipsis"></i></span></li>
                <li><a href="#">06</a></li>
                <li><a href="#">07</a></li>
            </ul>

            <a href="#" className="tl-pagination-prev">
                <i className="fa-arrow-right fa-regular"></i>
            </a>
        </div>
    </div>
  )
}

export default CoursePaginationSection4