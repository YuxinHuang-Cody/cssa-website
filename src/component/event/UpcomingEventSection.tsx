import { eventList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const UpcomingEventSection = () => {
  return (
    <section className="tl-3-events tl-3-section-spacing">
        <div className="container">
            <h2 className="tl-3-section-title">Upcoming Events</h2>

            <div className="tl-3-events-cards">
                <div className="row">
                    {eventList.slice(0,4).map((item) => (
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

                                <h3 className="tl-3-single-event-title"><Link href={`/event/${item.slug}`}>{item.title}</Link></h3>
                            </div>
                        </div>
                    </div>    
                    ))}
                    
                </div>
            </div>

            <Link href="/event" className="tl-3-def-btn tl-3-events-btn">Find Out More</Link>
        </div>
    </section>
  )
}

export default UpcomingEventSection