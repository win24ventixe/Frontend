import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookingEventPage = () => {
    const navigate = useNavigate()
    const{id} = useParams() 
    const [event, setEvent] = useState({})
    const [formData, setFormData] = useState({
        eventId: id || '',
        firstName: '',
        lastName: '',
        email: '',
        streetName: '',
        postalCode: '',
        city: '',
        ticketQuantity: 1
    })
    useEffect(() => {
      getEvent()
    }, [])

    const getEvent = async () => {
      try {
        const response = await fetch(`https://eventsservice-esbyg2euehamegg7.swedencentral-01.azurewebsites.net/api/Events/${id}`)
        if (!response.ok) throw new Error ("Failed to fetch event")

            const data = await response.json()
            setEvent(data.result)
      } catch (error) {
        console.error(error)
      }
    }
    
    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData(prev => ({ ...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      try{
        const response = await fetch(`https://bookingsservices-gbgka2ffe0h4bgc4.swedencentral-01.azurewebsites.net/api/Bookings`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
        if (!response.ok) {
          console.error("Booking failed")
        }
          else {
            console.log("Booking successful")
            navigate('/')
        }
      } catch (error) {
        console.error("Fetch failed", error)
      }
    }
    
  return (
    <section>
      <h1>Booking Event - {event.title}</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>First Name</label>
          <input className="field-group" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input className="field-group" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input className="field-group" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Street Name</label>
          <input className="field-group" type="text" name="streetName" value={formData.streetName} onChange={handleChange} required />
        </div>
         <div className="form-group">
          <label>Postal Code</label>
          <input className="field-group" type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>City</label>
          <input className="field-group" type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Ticket Quantity</label>
          <input className="field-group" type="number" name="ticketQuantity" value={formData.ticketQuantity} onChange={handleChange} min="1" required />
        </div>
        <button type="submit" className="book-btn">Book Now</button>
      </form>
    </section>
  )
}

export default BookingEventPage