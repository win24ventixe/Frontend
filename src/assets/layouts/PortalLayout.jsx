import React from "react"
import { Outlet } from "react-router-dom"

import Header from '../Components/Header'
import Footer from "../Components/Footer"
import Nav from "../Components/Nav"



const PortalLayout = () => {


    return (
        <div className="portal">
            <Header />
            <Nav />
            
            <main>
                <Outlet />
                <Footer />
            </main>
           
        </div>
    )
}

export default PortalLayout