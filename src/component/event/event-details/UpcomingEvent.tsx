import { eventList } from "@/data/Data";
import Link from "next/link";
import React from "react";

const UpcomingEvent = () => {
  return (
    <div className="tl-event-details-right tl-upcoming-events">
      <h3 className="tl-upcoming-events-title">Upcoming Events</h3>
        {eventList.slice(0,3).map((item) => (
            <div className="tl-upcoming-event" key={item.id}>
        <img
          className="tl-upcoming-event-img"
          src={`/${item.imgSrc}`}
          alt="event image"
        />
        <div className="tl-upcoming-event-txt">
          <h4 className="tl-upcoming-event-title">
            <Link href={`/event/${item.slug}`}>
              {item.title}
            </Link>
          </h4>
          <span className="tl-upcoming-event-location">
            <i className="fa-regular fa-location-dot"></i> {item.location}
          </span>
        </div>
      </div>
        ))}
      
    </div>
  );
};

export default UpcomingEvent;
