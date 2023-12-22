import { eventList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const EventSection2 = () => {
  return (
    <section className="tl-12-events tl-11-section-spacing">
        <div className="container">
            <div className="tl-12-section-heading">
                <h2 className="tl-12-section-title">Upcoming Events</h2>
            </div>
            <div className="row g-xl-4 g-3">
                {eventList.slice(3,6).map((item) => (
                 <div className="col-lg-4 col-md-6" key={item.id}>
                    <div className="tl-12-event">
                        <div className="tl-12-event-img">
                            <img src={item.imgSrc} alt="event image"/>
                            <span className="tl-12-event-date">14 Th Dec 2023</span>
                        </div>
                        <div className="tl-12-event-txt">
                            <h6 className="tl-12-event-location"><i className="fa-regular fa-location-dot"></i> {item.location}</h6>
                            <h4 className="tl-12-event-title"><Link href={`/event/${item.slug}`}>{item.title}</Link></h4>
                            <Link href={`/event/${item.slug}`} className="tl-def-btn">get Ticket <i className="fa-regular fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>   
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default EventSection2