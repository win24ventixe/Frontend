import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import EventList from "../Components/EventList";

const EventPage = () => {

    return (
        <div className="portal">
            <Header />
        
            <main>
                <EventList />
            </main>
            <Footer />
        </div>
    )
}
export default EventPage