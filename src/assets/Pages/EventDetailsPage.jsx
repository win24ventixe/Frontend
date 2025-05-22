import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Left from "../Images/ArrowLeft.svg"
import Location from "../Images/Location.svg";


const EventDetailsPage = () => {
    const { id } = useParams()
    // Fetch event details using the id
    const [event, setEvent] = useState({})

    const getEvent = async () => {
        const response = await fetch(`https://eventsservice-esbyg2euehamegg7.swedencentral-01.azurewebsites.net/api/Events/${id}`)
        if (response.ok) {
            const data = await response.json()
            setEvent(data.result)
        }
    }

    useEffect(() => {
        getEvent()
    }, [])

    return (
        
        <section id='events'>
            
            <Link className='nav-link event' to="/events">
                <img src={Left}  className='event-icon' alt="event" />
                <h1>Event Details</h1>
            </Link> 
             <div className='event-details'>   
                <img src={event.image} className='event-details-image' alt={event.title} />
                <h3>{event.title}</h3>
                <div className='event-card-date'>{event.eventDate}</div>
                <div className='event-card-location'>
                    <img src={Location} className='location-icon' alt={event.title} />
                    {event.location}
                </div>
                <div className='about'>
                    <h4>About Event</h4>         
                    <p>{event.description}</p>
                </div>
               <Link to={`/events/booking/${id}`}>Book Event</Link> 
            </div>
            
        </section>

    )
}

export default EventDetailsPage