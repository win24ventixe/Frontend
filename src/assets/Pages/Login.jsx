import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CookieConsent from '../Components/CookieConsent'
const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`https://authenticationservice-d2ezfpftgwazavfj.swedencentral-01.azurewebsites.net/api/Auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).then(async res => {
        const { token } = await res.json();
        localStorage.setItem("jwt", token);
      })
      if (!response.ok) {
        console.error('Login failed')
      } else {
        console.log('Login successful')
        navigate('/events')
      }
    } catch (error) {
      console.error('Fetch failed', error)
    }
  }

  return (
    <section  className="center-content">

        <h1>Login</h1>
    
      <form onSubmit={handleSubmit} noValidate>

        <div className="form-group">
          <label>Email</label>
          <input className="field-group" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input className="field-group" type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        
        <button type="submit" className="book-btn">Login</button>
        <p className="login-text">Don't have an account? <a href="/SignUp">Register</a></p>
        
        <CookieConsent />
      </form>
    </section>
  )
}

export default Login