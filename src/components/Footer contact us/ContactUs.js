import React from "react";
import "./style.css";

const ContactUs = () => {
  return (
    <div className="contactUs-container">
      <div className="contactUs-form-container">
        <h2>Contact Us</h2>
        <div className="contactUs-input-container">
          <div>
            <h6>Name</h6>
            <input type="text" placeholder="Enter Your Name" />
          </div>
          <div>
            <h6>Email</h6>
            <input type="email" placeholder="Enter a valid email address" />
          </div>
          <div>
            <h6>Message</h6>
            <textarea />
          </div>
        </div>
        <div className="contactUs-checkbox-container">
          <input type="checkbox" />
          <p>
            I accept the <a>Terms of Service</a>
          </p>
        </div>
        <button className="contactUs-button">Submit</button>
      </div>
      <div className="contactUs-info">
        <div>
          <h5>CALL US</h5>
          <p>1 (234) 567-891</p>
          <p>1 (234) 987-654</p>
        </div>
        <div>
          <h5>LOCATION</h5>
          <p>121 Rock Street, 21 Avenue,</p>
          <p>New York, NY 92103-9000</p>
        </div>
        <div>
          <h5>OUR TOP SERVICES</h5>
          <p>Project Management</p>
          <p>Site Preparation and Maintenance</p>
          <p>Subcontractor Assessment</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
