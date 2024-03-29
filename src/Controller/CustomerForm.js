import React, { useState } from 'react';
import './customerform.css';
import Layout from '../Layout/Layout';
import axios from 'axios'; // Import axios library


const CustomerForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    organization: '',
    contactNumber: '',
    email: '',
    state: '',
    city: '',
    address: '',
    zipCode: '',
    password: 'passwor@1234', // Default password
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    // Send form data to the API
    axios.post('http://localhost:5250/api/Customer', formData)
      .then(response => {
        setSuccessMessage('Customer created successfully');
        console.log(response.data); // Log the response from the API
        // Optionally, you can perform actions based on the API response
      })
      .catch(error => {
        setErrorMessage('Failed to create customer');
        console.error('Error creating customer:', error); // Log any errors
        // Optionally, you can handle errors or display error messages to the user
      });
  };

  return (
    <Layout>
      <div className="form-container">
        <div className="outer-box">
          <h1>Create Customer Account</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="input-field"
              />

            </div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Organization:</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Contact Number:</label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>State:</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Address Line 1:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Zip Code:</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <button type="submit" className="submit-btn sbtbtn">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerForm;