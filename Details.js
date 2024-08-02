// src/Details.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) return <p>No data available</p>;

  return (
    <div>
      <h2>Form Details</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
      <p>Phone Number: {formData.phoneNo}</p>
      <p>Country: {formData.country}</p>
      <p>City: {formData.city}</p>
      <p>PAN Number: {formData.panNo}</p>
      <p>Aadhar Number: {formData.aadharNo}</p>
    </div>
  );
};

export default Details;
