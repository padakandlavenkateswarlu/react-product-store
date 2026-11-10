import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      subject === "" ||
      message === ""
    ) {
      alert("Please fill all details");
      return;
    }

    alert("Message sent successfully!");

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="contact-page">

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <h1>Contact Us</h1>

          <p className="contact-text">
            Have any questions or feedback?
            Feel free to contact us. We would
            love to hear from you.
          </p>

          <div className="contact-item">
            <h3>📧 Email</h3>
            <p>padakandlavenkatesh5@gmail.com</p>
          </div>

          <div className="contact-item">
            <h3>📱 Phone</h3>
            <p>+91 8790725769</p>
          </div>

          <div className="contact-item">
            <h3>📍 Location</h3>
            <p>Hyderabad, India</p>
          </div>

          <div className="contact-item">
            <h3>🕒 Working Hours</h3>
            <p>Monday - Saturday</p>
            <p>9:00 AM - 6:00 PM</p>
          </div>

        </div>

        {/* Right Side */}
        <div className="contact-form-container">

          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Enter subject"
              value={subject}
              onChange={(e) =>
                setSubject(e.target.value)
              }
            />

            <textarea
              placeholder="Enter your message"
              rows="6"
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;