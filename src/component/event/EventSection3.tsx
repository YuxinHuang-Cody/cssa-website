import { eventList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'

const EventSection3 = () => {
  return (
    <section className="tl-13-events pt-120 pb-120" data-bg-color="#F2EFE8">
        <div className="container">
            <h2 className="tl-13-section-title">Upcoming <span className="last-word">Events</span></h2>

            <div className="row g-4 justify-content-center">
                {eventList.slice(0,3).map((item) => (
                  <div className="col-lg-4 col-md-6" key={item.id}>
                    <div className="tl-9-event tl-13-event">
                        <div className="tl-11-latest-article-img">
                            <img src={item.imgSrc} alt="Article Image"/>
                        </div>

                        <div className="tl-11-latest-article-txt">
                            <div className="tl-3-single-event-info">
                                <h6 className="tl-3-single-event-location">
                                    <i className="fa-regular fa-location-dot"></i> {item.location}
                                </h6>
                                <h6 className="tl-3-single-event-time">
                                    <i className="fa-regular fa-clock"></i> {item.startTime} - {item.endTime}
                                </h6>
                            </div>
                            <h3 className="tl-11-latest-article-title"><Link href={`/event/${item.slug}`}>{item.title}</Link></h3>
                            <Link href={`/event/${item.slug}`} className="tl-13-event-btn">Get Ticket <i className="fa-regular fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>  
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default EventSection3