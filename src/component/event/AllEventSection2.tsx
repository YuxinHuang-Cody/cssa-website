'use client'
import { useTalimContext } from "@/context/TalimContext";
import Link from "next/link";
import React from "react";

const AllEventSection2 = () => {
  const {displayedEvents2} = useTalimContext()
  return (
    <section className="tl-7-events tl-7-events-inner tl-7-section-spacing pb-50">
      <div className="container">
        <div className="row g-3 g-md-4 justify-content-center">
          {displayedEvents2.map((item) => (
            <div className="col-lg-4 col-sm-6 col-10 col-xxs-12" key={item.id}>
            <div className="tl-7-event">
              <div className="tl-7-event-img">
                <img src={item.imgSrc} alt="Article Image" />
              </div>

              <div className="tl-7-event-txt">
                <div className="tl-3-single-event-info tl-7-event-infos">
                  <h6 className="tl-3-single-event-location">
                    <i className="fa-regular fa-location-dot"></i> {item.location}
                  </h6>
                  <h6 className="tl-3-single-event-time">
                    <i className="fa-regular fa-clock"></i> {item.startTime} - {item.endTime}
                  </h6>
                </div>
                <h3 className="tl-6-latest-article-title tl-7-event-title">
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
    </section>
  );
};

export default AllEventSection2;
