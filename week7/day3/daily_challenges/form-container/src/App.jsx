import React, { useState } from 'react';
import FormComponent from './FormComponent';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    lactoseFree: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked ? 'on' : '') : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(formData).toString();
    window.location.search = params;
  };

  return (
    <div style={{ padding: '2em' }}>
      <h1>Form Container</h1>
      <FormComponent data={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
