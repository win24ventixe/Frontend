import React from 'react'
import SendVerification from '../Components/SendVerification'

const Dashboard  = () => {
  return (
     <div className="portal">
        <main>
          <h1>Dashboard</h1>
          <p>Welcome to the dashboard!</p>
          <p>Here you can manage your events and bookings.</p>
          <p>Use the navigation menu to access different sections.</p>
          <SendVerification />
        </main>
      </div>
  )
}

export default Dashboard 