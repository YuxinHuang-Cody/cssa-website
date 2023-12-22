import { eventList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const EventSection = () => {
  return (
    <section className="tl-7-events tl-7-section-spacing">
        <div className="container">
            <div className="tl-7-section-heading tl-7-events-heading">
                <div className="row gy-3 align-items-end">
                    <div className="col-sm-6">
                        <h6 className="tl-7-section-sub-title">our Events</h6>
                        <h2 className="tl-7-section-title">Latest Events <span className="last-word">Coming</span>.</h2>
                    </div>

                    <div className="col-sm-6 text-start text-sm-end">
                        <a href="#" className="tl-7-def-btn">Get Started</a>
                    </div>
                </div>
            </div>

            <div className="row g-3 g-md-4 justify-content-center">
                {eventList.slice(20,23).map((item) => (
                  <div className="col-lg-4 col-sm-6 col-10 col-xxs-12" key={item.id}>
                    <div className="tl-7-event">
                        <div className="tl-7-event-img">
                            <img src={item.imgSrc} alt="Article Image"/>
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
                            <h3 className="tl-6-latest-article-title tl-7-event-title"><Link href={`/event/${item.slug}`}>{item.title}</Link></h3>
                        </div>
                    </div>
                </div>  
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default EventSection