import React from 'react'
import { useNavigate } from 'react-router-dom'

const SendVerification = () => {
    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://verification-service-dqgvbyhrb7azh3fc.swedencentral-01.azurewebsites.net/api/Verification/send`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: ''}), // Replace with actual email input
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
        <h1>Send Verification</h1>

        <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
                <label>Email</label>
                <input className="field-group" type="email" name="email" onChange={handleChange} required />
            </div>
            
            <button type="submit" className="book-btn">Send Verification Email</button>
        </form>
    <button onClick={() => navigate('/login')} className="book-btn">Back to Login</button>
    </section>
  )
}

export default SendVerification