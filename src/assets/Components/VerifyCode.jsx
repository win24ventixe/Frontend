import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const VerifyCode = () => {
     const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        code: ''
      })
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://verification-service-dqgvbyhrb7azh3fc.swedencentral-01.azurewebsites.net/api/Verification/verify`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            if (!response.ok) {
                console.error('Failed to send verification email')
            } else {
                console.log('Verification email sent successfully')
            }
        }
        catch (error) {
            console.error('Fetch failed', error)
        }
    }

    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData(prev => ({ ...prev, [name]: value}))
    }
  return (
     <section>
        <h1>Verification Code</h1>

        <form onSubmit={handleSubmit} noValidate>
            <div className="input-group">
                <input className="field-group" type="text" name="code" onChange={handleChange} required />
                <input className="field-group" type="text" name="code" onChange={handleChange} required />
                <input className="field-group" type="text" name="code" onChange={handleChange} required />
                <input className="field-group" type="text" name="code" onChange={handleChange} required />
                <input className="field-group" type="text" name="code" onChange={handleChange} required />
                <input className="field-group" type="text" name="code" onChange={handleChange} required />
            </div>
            
            <p className="book-btn"><a href="/SignUp">Continue</a></p>
        </form>

    </section>
  )
}

export default VerifyCode