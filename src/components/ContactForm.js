import React, { useState, useEffect } from "react";
import "../styles/ContactForm.css"; // Make sure this file contains your CSS
import desktopImage from "../assets/contact-form.webp";
import mobileImage from "../assets/contact-form-heading.svg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [imageSrc, setImageSrc] = useState(window.innerWidth < 768 ? mobileImage : desktopImage);

  useEffect(() => {
    const handleResize = () => {
      setImageSrc(window.innerWidth < 768 ? mobileImage : desktopImage);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const validate = () => {
    const newErrors = {};
    const { name, phone, email } = formData;

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "Name must contain only letters";
    }

    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

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
      alert("Form submitted successfully!");
      console.log("Submitted Data:", formData);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <div className="contact-illustration">
          <img src={imageSrc} alt="Contact Illustration" />
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
                maxLength="10"
                value={formData.phone}
                onChange={handleChange}
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

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
