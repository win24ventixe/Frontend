
 import React from 'react';
import { Link } from 'react-router-dom';
import Location from "../Images/Location.svg";


 const EventItem = ({ item }) => {
    
  return (
    <Link to={`/events/${item.id}`} className='event-card'>
      <div >
        <img src={item.image} className='event-card-image' alt={item.title} />
        <div className='event-card-body'>
            <div className='event-card-date'>{item.eventDate}</div>
            <div className='event-card-title'>{item.title}</div>
            <div className='event-card-location'>
              <img src={Location} className='location-icon' alt={item.title} />
              {item.location}
            </div>
          </div>
      </div>    
    </Link>
  )
}
export default EventItem