import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`https://accountsrevice-e8ffh7a8cdfyd7bq.swedencentral-01.azurewebsites.net/api/Accounts/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        console.error('Sign up failed')
      } else {
        console.log('Sign up successful')
       navigate('/')
      }
    } catch (error) {
      console.error('Fetch failed', error)
    }
  }


  return (
    <section  className="center-content">

        <h1>Sign Up</h1>

      <form onSubmit={handleSubmit} noValidate>
     
        <div className="form-group">
          <label>First Name</label>
          <input className="field-group" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input className="field-group" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input className="field-group" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input className="field-group" type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>ConfirmPassword</label>
          <input className="field-group" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        
        <button type="submit" className="book-btn">Create Account</button>
         <div className="form-footer">
          <p>Already have an account? <a href='/login'>LogIn</a></p>
          
        </div>
      </form>
    </section>
  )
}

export default SignUp