import React from 'react'

const EventContact = () => {
  return (
    <div className="tl-event-details-contacts">
        <ul className="tl-event-details-socials">
            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-tiktok"></i></a></li>
        </ul>

        <a href="tel:123045058" className="tl-event-details-phone">
            <i className="fa-regular fa-phone"></i>
            +1 234 567 891
        </a>
    </div>
  )
}

export default EventContact