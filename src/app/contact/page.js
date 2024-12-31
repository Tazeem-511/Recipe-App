// app/contact/page.js

import React from "react";
import './contact.css'; // Make sure to import your CSS

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="content-container">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us using the form below:</p>
        <div className="form-container">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
