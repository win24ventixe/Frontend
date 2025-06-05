
import {  Route, Routes } from 'react-router-dom';
import './App.css'
import EventPage from './assets/Pages/EventPage';
import PortalLayout from './assets/layouts/PortalLayout';
import Dashboard from './assets/Pages/Dashboard ';
import EventDetailsPage from './assets/Pages/EventDetailsPage';
import BookingEventPage from './assets/Pages/BookingEventPage';
import SignUp from './assets/Pages/SignUp';
import Login from './assets/Pages/Login';
import Bookings from './assets/Pages/Bookings';



function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<PortalLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="events" element={<EventPage />} />
          <Route path="events/:id" element={<EventDetailsPage />} />
          <Route path="events/booking/:id" element={<BookingEventPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="bookings" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App