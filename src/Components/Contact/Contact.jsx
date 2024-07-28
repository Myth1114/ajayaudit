import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="ContactSection">
      <div className="ContactContainer">
        <div className="Top">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14155.99493337787!2d83.43233654999999!3d27.500414850000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39969a3fd7ca84d9%3A0xbca4fda146716c6f!2sSiddharthanagar!5e0!3m2!1sen!2snp!4v1721987406920!5m2!1sen!2snp"
            width="900"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <h2>Get In Touch</h2>
        </div>
        <div className="Bottom">
          <div className="ContactInfo">
            <div className="Icon">
              <img src="/Images/call.svg" alt="icon" />
            </div>
            <div className="Text">
              <h2>Phone</h2>
              <span>1234567890</span>
            </div>
          </div>
          <div className="ContactInfo">
            <div className="Icon">
              <img src="/Images/email.svg" alt="icon" />
            </div>
            <div className="Text">
              <h2>Email</h2>
              <span>1234567890</span>
            </div>
          </div>
          <div className="ContactInfo">
            <div className="Icon">
              <img src="/Images/location.svg" alt="icon" />
            </div>
            <div className="Text">
              <h2>Address</h2>
              <span>1234567890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
