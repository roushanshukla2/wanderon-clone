// src/components/InternationalContactForm.jsx
import React, { useState } from "react";
import "../styles/InternationalContactForm.css"; // Create this CSS file

const InternationalContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;

    let cleanValue = value;
    if (id === "name") cleanValue = value.replace(/[^A-Za-z\s]/g, "");
    if (id === "phone") cleanValue = value.replace(/[^0-9]/g, "");

    setFormData((prev) => ({
      ...prev,
      [id]: cleanValue,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only letters";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    }
  };

  return (
    <div className="international-contact-wrapper">
      <div className="international-contact-card">
        <form
          className="international-contact-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <h2>Wanderlust Calling?</h2>
          <p>Allow Us to Call You Back!</p>

          <div className="international-form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Smith"
              required
            />
            <span className="international-error-text">{errors.name}</span>
          </div>

          <div className="international-form-group">
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your 10 digit number"
              maxLength="10"
              required
            />
            <span className="international-error-text">{errors.phone}</span>
          </div>

          <div className="international-form-group">
            <label htmlFor="email">Email Id *</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
            <span className="international-error-text">{errors.email}</span>
          </div>

          <div className="international-form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any Message"
            ></textarea>
          </div>

          <button type="submit" className="international-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InternationalContactForm;
