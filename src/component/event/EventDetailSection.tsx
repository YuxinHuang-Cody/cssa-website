import React from 'react'
import KeyContent from './event-details/KeyContent'
import EventVideo from './event-details/EventVideo'
import EventDescription from './event-details/EventDescription'
import EventFaq from './event-details/EventFaq'
import EventTimer from './event-details/EventTimer'
import EventMap from './event-details/EventMap'
import EventContact from './event-details/EventContact'
import UpcomingEvent from './event-details/UpcomingEvent'
interface EventProp {
    eventData: {
        youtubeUrl: string;
        title: string;
        dayDate: string;   
        monthYear: string;
        startTime: string;
        endTime: string;
        participants: string;
        skillLevel: string;
    }
}
const EventDetailSection:React.FC<EventProp> = ({eventData}) => {
  return (
    <div className="tl-event-details-container pt-120 pb-120">
        <div className="container">
            <div className="row tl-event-details-row g-0">
                <div className="col-lg-8">
                    <div className="tl-event-details-left">
                        <EventVideo videoUrl={eventData.youtubeUrl} title={eventData.title}/>
                        <KeyContent/>
                        <EventDescription/>
                        <EventFaq/> 
                        <EventTimer/> 
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="tl-event-details-right">
                        <EventMap/>

                        <EventContact/>

                        <ul className="tl-event-details-infos">
                            <li className="tl-event-details-info"><span className="key">Event Date:</span><span className="value">{eventData.dayDate} {eventData.monthYear}</span></li>
                            <li className="tl-event-details-info"><span className="key">Start Time:</span><span className="value">{eventData.startTime}</span></li>
                            <li className="tl-event-details-info"><span className="key">End Time:</span><span className="value">{eventData.endTime}</span></li>
                            <li className="tl-event-details-info"><span className="key">Registered Participant:</span><span className="value">{eventData.participants}</span></li>
                            <li className="tl-event-details-info"><span className="key">Skill level:</span><span className="value">{eventData.skillLevel}</span></li>
                        </ul>

                        <a href="#" className="tl-def-btn tl-3-def-btn tl-event-details-book-btn">Book Your Ticket</a>
                    </div>

                    <UpcomingEvent/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventDetailSection