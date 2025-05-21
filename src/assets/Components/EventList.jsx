import React, { useState, useEffect } from 'react';
import EventItem from '../Components/EventItem';

const EventList = () => {
 const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const response = await fetch("https://eventsservice-esbyg2euehamegg7.swedencentral-01.azurewebsites.net/api/Events");
      if (response.ok) {
        const data = await response.json();
        setEvents(data.result);
      }
    } catch (error) {
      console.error("Fetch failed", error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (

    <section id='events'>
      <h1>Events</h1>
      <div className="events-list">
        {events.map(event => (
        <EventItem key={event.id} item={event} />
      ))}
      </div>
    </section>
  );
};

export default EventList
