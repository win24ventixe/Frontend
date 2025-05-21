import React, { use, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookingEventPage = () => {
    const navigate = useNavigate()
    const{id} = useParams() 
    const [event, setEvent] = useState({})
    const [formData, setFormData] = useState({
        eventId: id,
        firstName: '',
        lastName: '',
        email: '',
        streetName: '',
        city: '',
        postalCode: '',
        ticketQuantity: 1,
    })
    useEffect(() => {
      getEvent()
    }, [])
    const getEvent = async () => {
      try {
        const response = await fetch(`https://eventsservice-esbyg2euehamegg7.swedencentral-01.azurewebsites.net/api/Events/${id}`)
        if (response.ok) {
            const data = await response.json()
            setEvent(data.result)
        }
      } catch (error) {
        console.error("Fetch failed", error)
      }
    }
    const handelSubmit = async (e) => {
      try{
        const response = await fetch(`https://bookingsservices-gbgka2ffe0h4bgc4.swedencentral-01.azurewebsites.net/api/bookings`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })
        if (response.ok) {
          navigate('/')
        }
      } catch (error) {
        console.error("Fetch failed", error)
      }
    }
    
    const handelChange = (e) => {
      const { name, value } = e.target
      setFormData(prev => ({...prev, [name]: value}))
    }


  return (
    <div>
      <h1>Booking Event - {event.title}</h1>
      <form onSubmit={handelSubmit} noValidate>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handelChange} required />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handelChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handelChange} required />
        </div>
        <div>
          <label>Street Name</label>
          <input type="tel" name="phone" value={formData.streetName} onChange={handelChange} required />
        </div>
        <div>
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handelChange} required />
        </div>
        <div>
          <label>Postal Code</label>
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handelChange} required />
        </div>

        <button type="submit">Book Now</button>
      </form>
    </div>
  )
}

export default BookingEventPage