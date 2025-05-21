import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
      <>
        <NavLink className="logotype" to="/">
          <img src="/images/VentixeLogo.svg" alt="Ventixe Logotype" />
          <span>Ventixe</span>
        </NavLink>    
   
        <nav className="nav-links"> 
          <NavLink className="nav-link" to="/events">
            <img src="/images/Ticket.svg" alt="Events" />
            <span>Events</span>
          </NavLink>   
          <NavLink className="nav-link" to="/events/booking">
            <img src="/images/CheckSquare.svg" alt="Bookings" />
            <span>Bookings</span>
          </NavLink>  
        </nav>
      </>
    )
}

export default Nav; 