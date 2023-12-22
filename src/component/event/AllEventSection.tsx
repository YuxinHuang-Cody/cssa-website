'use client'
import { useTalimContext } from "@/context/TalimContext";
import Link from "next/link";
import React from "react";

const AllEventSection = () => {
  const {displayedEvents} = useTalimContext()
  return (
    <section className="tl-3-events tl-3-section-spacing pb-50">
      <div className="container">
        <div className="tl-3-events-cards">
          <div className="row">
            {displayedEvents.map((item) => (
              <div className="col-md-6" key={item.id}>
              <div className="tl-3-single-event">
                <div className="tl-3-single-event-date">
                  <span className="date">{item.dayDate}</span>
                  <span className="month-year">{item.monthYear}</span>
                </div>

                <div className="tl-3-single-event-txt">
                  <div className="tl-3-single-event-info">
                    <h6 className="tl-3-single-event-location">
                      <i className="fa-regular fa-location-dot"></i> {item.location}
                    </h6>
                    <h6 className="tl-3-single-event-time">
                      <i className="fa-regular fa-clock"></i> {item.startTime} - {item.endTime}
                    </h6>
                  </div>

                  <h3 className="tl-3-single-event-title">
                    <Link href={`/event/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllEventSection;
