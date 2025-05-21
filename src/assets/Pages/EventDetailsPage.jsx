import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

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
    }, [id])

    return (
        <div>
            <h1>Event Details</h1>
            <h1>{event.title}</h1>
            <p>{event.description}</p>

            <Link to={`/events/booking/${id}`}>Book Event</Link>
        </div>
    )
}

export default EventDetailsPage