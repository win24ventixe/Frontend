import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Images/Ventix-logo.svg";
import Dashbord from "../Images/Dashboard.svg";
import Ticket from "../Images/Ticket.svg";
import CheckSquare from "../Images/CheckSquare.svg";

const Nav = () => {
    return (
      <>
      
        <NavLink className="logotype" to="/">
          <img src={Logo} alt="Ventixe Logotype" />
          <span>Ventixe</span>
        </NavLink>    
   
        <nav className="nav-links"> 
          <NavLink className="nav-link" to="/">
            <img src={Dashbord} className="icon" alt="Dashboard" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink className="nav-link" to="/events">
            <img src={Ticket}  className="icon" alt="Events" />
            <span>Events</span>
          </NavLink>   
          <NavLink className="nav-link" to="/events/bookings">
            <img src={CheckSquare}  className="icon" alt="Bookings" />
            <span>Bookings</span>
          </NavLink>  
        </nav>
      </>
    )
}

export default Nav; 