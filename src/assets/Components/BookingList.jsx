import React from 'react'
import { useState, useEffect } from 'react';

const BookingList = () => {
 const [bookings, setBookings] = useState([]);
    const fetchBookings = async () => {
            try {
                const response = await fetch(`https://bookingsservices-gbgka2ffe0h4bgc4.swedencentral-01.azurewebsites.net/api/Bookings`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBookings(data.result);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };
    useEffect(() => {
        fetchBookings();
    }
, []);
   
    return (
        <>
            <section id="bookings">
                <h1>Bookings</h1>
                 <div className="bookings-list">
                 
                    {bookings.map((booking) => (
                        <div key={booking.id} className="booking-card">
                            <h2>{booking.eventName}</h2>
                            <p>{booking.date}</p>
                            <p>{booking.description}</p>
                            <p>{booking.location}</p>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${booking.progress}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div> 
            </section>
          
        </>
    );
}

export default BookingList