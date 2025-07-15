import React, { useRef } from "react";
import '../styles/CorporateContactForm.css'; // Ensure this file contains your CSS

const CorporateContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const companyRef = useRef();

  const errorRefs = {
    name: useRef(),
    email: useRef(),
    phone: useRef(),
    company: useRef(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const phone = phoneRef.current.value.trim();
    const company = companyRef.current.value.trim();

    let hasError = false;

    errorRefs.name.current.textContent = "";
    errorRefs.email.current.textContent = "";
    errorRefs.phone.current.textContent = "";
    errorRefs.company.current.textContent = "";

    if (!name || !/^[A-Za-z\s]+$/.test(name)) {
      errorRefs.name.current.textContent = "Name must contain only letters";
      hasError = true;
    }

    if (!/^\d{10}$/.test(phone)) {
      errorRefs.phone.current.textContent = "Phone number must be exactly 10 digits";
      hasError = true;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorRefs.email.current.textContent = "Invalid email address";
      hasError = true;
    }

    if (!company) {
      errorRefs.company.current.textContent = "Company name is required";
      hasError = true;
    }

    if (!hasError) {
      alert("Form submitted successfully!");
      e.target.reset();
    }
  };

  return (
    <div className="corporate-form-wrapper">
      <div className="corporate-form-card">
        <div className="corporate-form-illustration">
          <h2 className="corporate-form-display-hidden">Picture, Plan, Paradise!</h2>
          <p className="corporate-form-display-hidden">Allow Us to Call You Back!</p>
          <img src="corporate-form.svg" alt="Contact Illustration" />
        </div>
        <div className="corporate-form-form-wrapper">
          <form className="corporate-form" onSubmit={handleSubmit} noValidate>
            <div className="corporate-form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" placeholder="Enter your first name" ref={nameRef} required />
              <span className="corporate-form-error-text" ref={errorRefs.name}></span>
            </div>

            <div className="corporate-form-group">
              <label htmlFor="email">Email Id *</label>
              <input type="email" id="email" placeholder="Enter your email id" ref={emailRef} required />
              <span className="corporate-form-error-text" ref={errorRefs.email}></span>
            </div>

            <div className="corporate-form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" placeholder="Enter your 10 digit number" maxLength="10" ref={phoneRef} required />
              <span className="corporate-form-error-text" ref={errorRefs.phone}></span>
            </div>

            <div className="corporate-form-group">
              <label htmlFor="company">Company Name *</label>
              <input type="text" id="company" placeholder="Enter your company name" ref={companyRef} required />
              <span className="corporate-form-error-text" ref={errorRefs.company}></span>
            </div>

            <div className="corporate-form-group">
              <label htmlFor="destination">Destination</label>
              <input type="text" id="destination" placeholder="Enter your destination" />
            </div>

            <button type="submit" className="corporate-form-submit-btn">Send Enquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CorporateContactForm;
