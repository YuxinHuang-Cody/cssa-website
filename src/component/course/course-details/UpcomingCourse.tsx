import { courseList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const UpcomingCourse = () => {
  return (
    <div className="tl-event-details-right tl-upcoming-events">
        <h3 className="tl-upcoming-events-title">Popular Courses</h3>
        {courseList.slice(5,8).map((item) => (
           <div className="tl-upcoming-event tl-pop-course" key={item.id}>
                <img
                    className="tl-upcoming-event-img"
                    src={`/${item.imgSrc}`}
                    alt="event image"
                />
                <div className="tl-upcoming-event-txt">
                    <h4 className="tl-upcoming-event-title">
                    <Link href={`/course/${item.slug}`}>
                        {item.title}
                    </Link>
                    </h4>
                    <ul className="tl-2-blog-infos">
                    <li>
                        By <a href="#">Dora max</a>
                    </li>
                    <li>{item.price}</li>
                    </ul>
                </div>
            </div> 
        ))}
        
    </div>
  )
}

export default UpcomingCourse