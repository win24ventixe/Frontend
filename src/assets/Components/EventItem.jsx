
 import React from 'react';
import { Link } from 'react-router-dom';

 const EventItem = ({ item }) => {
    
  return (
    <Link to={`/events/${item.id}`} >
      <div className="event-card">
        <img src={item.image} alt={item.title} />
        <div>{item.title}</div>
        <div>{item.eventDate}</div>
        <div>{item.location}</div>
        <div>{item.description}</div>
      </div>
    </Link>
  )
}
export default EventItem