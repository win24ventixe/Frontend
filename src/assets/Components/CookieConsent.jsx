import React, { useEffect, useState } from 'react'

const CookieConsent = () => {
    const [showModal, setShowModal] = useState(false);
  const [functional, setFunctional] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookieConsent");
    if (!storedConsent) {
      setShowModal(true);
    }
  }, []);

  const saveToBackend = async (preferences) => {
    try {
      await fetch(`https://cookieconsent-bee5b2g9bsbvg5gr.swedencentral-01.azurewebsites.net/api/Cookies`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          essential: true,
          functional: preferences.functional,
          analytics: preferences.analytics,
          marketing: preferences.marketing
        }),
        credentials: "include" 
      });
    } catch (error) {
      console.error("Kunde inte spara cookies till backend", error);
    }
  };

  const acceptAll = () => {
    const preferences = {
      functional: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    saveToBackend(preferences);
    setShowModal(false);
  };

  const acceptSelected = () => {
    const preferences = {
      functional,
      analytics,
      marketing
    };
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    saveToBackend(preferences);
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div id="cookieModal" style={{ position: "fixed", bottom: 20, right: 20, background: "#fff", padding: 20, border: "1px solid #ccc", zIndex: 9999 }}>
      <div className="content">
        <h3>Du har kontroll över dina uppgifter:</h3>
        <p>Vi använder cookies för att förbättra upplevelsen. Välj vilka du samtycker till.</p>
        <div className="options">
          <label>
            <input type="checkbox" checked disabled /> Nödvändiga (alltid aktiva)
          </label>
          <br />
          <label>
            <input type="checkbox" checked={functional} onChange={() => setFunctional(!functional)} /> Funktionella
          </label>
          <br />
          <label>
            <input type="checkbox" checked={analytics} onChange={() => setAnalytics(!analytics)} /> Analys & Statistik
          </label>
          <br />
          <label>
            <input type="checkbox" checked={marketing} onChange={() => setMarketing(!marketing)} /> Marknadsföring
          </label>
        </div>
        <div className="buttons" style={{ marginTop: 10 }}>
          <button onClick={acceptAll}>Godkänn alla</button>
          <button onClick={acceptSelected}>Spara valda inställningar</button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent