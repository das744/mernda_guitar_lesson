
"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({ message: "", type: "" });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse({ message: "", type: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setResponse({ message: "All fields are required.", type: "error" });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        setResponse({ message: "Your message has been sent successfully!", type: "success" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponse({ message: "Failed to send message. Please try again.", type: "error" });
      }
    } catch (error) {
      setLoading(false);
      setResponse({ message: "An error occurred. Please try again.", type: "error" });
    }
  };

  return (
    <div className={styles.contactContainer} id="contact">
      {/* Left Side - Contact Info */}
      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 12 Nicolson Road, Mill Park- Victoria</p>
        <p><FontAwesomeIcon icon={faPhoneAlt} /> +61 0421 3265</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> info.northernmelbourneguitarlesson.com</p>
        <div className={styles.socialIcons}>
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className={styles.contactForm}>
        <h2>Get in Touch</h2>
        <p>Have questions? Reach out, and we’ll be happy to assist you.</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {response.message && (
          <p className={`${styles.responseMessage} ${response.type === "success" ? styles.success : styles.error}`}>
            {response.message}
          </p>
        )}
      </div>
    </div>
  );
}
