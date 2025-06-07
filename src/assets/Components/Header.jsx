import React, { useEffect, useState } from "react";

const Header = () => {

  const [userName, setUserName] = useState('');
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        
        fetch("https://accountsrevice-e8ffh7a8cdfyd7bq.swedencentral-01.azurewebsites.net/api/Accounts/user/{id}")
            .then(res => res.json())
            .then(data => setUserName(data.displayName || 'User'));

        /*const connection = new singleR.HubConnectionBuilder()
            .withUrl("/notificationHub")
            .build();

        connection.on("ReceiveNotification", notification => {
            setNotifications(prev => [notification, ...prev]);
        });

        connection.on("NotificationDismissed", id => {
            setNotifications(prev => prev.filter(n => n.id !== id));
        });

        connection.start().catch(err => console.error("SignalR error:", err));

        return () => connection.stop();*/
    }, []);

    const handleLogout = () => {
        window.location.href = "/Auth/signout";
    };

    return (
        <header className="header-container">
           <div className="top">
            <form className="search-form">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search anything..." />
            </form>

            <div className="notification-container">
                <button className="btn-notification">
                    {notifications.length > 0 && <i className="dot dot-red fa-solid fa-circle"></i>}
                    <i className="fa-solid fa-bell"></i>
                </button>
                <div className="dropdown">
                    <h4>Notifications</h4>
                    <div className="notifications">
                        {notifications.map(n => (
                            <div className="notification" key={n.id}>
                                <img src="/images/Admin/Contacts.svg" alt="User" />
                                <div className="account-info">{userName}</div>
                                <div className="message">{n.message}</div>
                                <div className="time">{new Date(n.created).toLocaleTimeString()}</div>
                                <button className="btn-close" onClick={() => dismissNotification(n.id)}>×</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="account-container">
                <button className="btn-account">
                    <img src="/images/Admin/Contacts.svg" alt="User" />
                </button>
                <div className="dropdown">
                    <div className="account-name">
                        <img src="/images/Admin/Contacts.svg" alt="User" />
                        <div>{userName}</div>
                    </div>
                    <div className="dropdown-footer">
                        <button onClick={handleLogout} className="btn-signout">
                            <i className="fa-solid fa-right-from-bracket"></i> Logout
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </header>
    );

    function dismissNotification(id) {
        /*fetch(`https://notification-service-7b6f3c4d5a8b4c2a.swedencentral-01.azurewebsites.net/api/notifications/${id}/dismiss`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })*/
        setNotifications(prev => prev.filter(n => n.id !== id));
    }
    
         

}

export default Header;