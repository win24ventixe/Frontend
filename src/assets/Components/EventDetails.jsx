//import { useState } from "react";

//import { useParams } from "react-router-dom";

//import { useAuth } from "../../contexts/AuthContext";
//import { api } from "../../services/api";
//import { useNavigate } from "react-router-dom";





//const EventDetails = () => {
    //const {id} = useParams()

/*const [isBooking, setIsBooking] = useState(false);
const { user } = useAuth();
const navigate = useNavigate();


const handleBookEvent = async () => {
if (!user) {
navigate("/login", { state: { from: `/event/${event.id}` } });
return;
}

setIsBooking(true);
try {
await api.post('/api/bookings', {
eventId: event.id,
});

alert("Booking successful!");
onBookingComplete();
} catch (error) {
console.error("Error booking event:", error);
alert("There was an error booking this event. Please try again.");
} finally {
setIsBooking(false);
}
};*/

/*return (
    <div className="event-details">
        <div>{id}</div>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{time}</p>
        <p>{description}</p>
        <p>{location}</p>
        <p>Category: { category}</p>
        <p>Capacity: {capacity}</p>
        <p>Price: ${price}</p>
        <img src={image} alt={title} />
        <button onClick ={handleBookEvent} disabled={isBooking} className="book-button">
            {isBooking ? "Processing..." : "Book Event"}
        </button>

    </div>
    );
}
export default EventDetails;*/