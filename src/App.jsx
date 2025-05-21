
import {  Route, Routes } from 'react-router-dom';
import './App.css'
import EventPage from './assets/Pages/EventPage';
import PortalLayout from './assets/layouts/PortalLayout';
import Dashboard from './assets/Pages/Dashboard ';
import EventDetailsPage from './assets/Pages/EventDetailsPage';


function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<PortalLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="events" element={<EventPage />} />
          <Route path="events/:id" element={<EventDetailsPage />} />

        </Route>
      </Routes>
    </>
  );
}

export default App