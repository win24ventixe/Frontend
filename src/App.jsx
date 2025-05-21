
import {  Route, Routes } from 'react-router-dom';
import './App.css'
import EventPage from './assets/Pages/EventPage';
import PortalLayout from './assets/layouts/PortalLayout';
import Dashboard from './assets/Pages/Dashboard ';


function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<PortalLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="events" element={<EventPage />} />

        </Route>
      </Routes>
    </>
  );
}

export default App