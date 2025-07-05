import React, { useState } from "react";
import "../styles/ContactForm.css";
import contactImage from "../assets/contact-form.webp";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Restrict input at the field level
    if (id === "name" && /[^A-Za-z\s]/.test(value)) return;
    if (id === "phone" && /[^0-9]/.test(value)) return;

    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <div className="contact-illustration">
          <img src={contactImage} alt="Contact Illustration" />
        </div>
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h2>Wanderlust Calling?</h2>
            <p>Allow Us to Call You Back!</p>

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                placeholder="e.g. John Smith"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your 10 digit number"
                value={formData.phone}
                onChange={handleChange}
                maxLength="10"
                required
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Id *</label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Any Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
