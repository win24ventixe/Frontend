
import React, { useState} from "react";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
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
export default Bookings;