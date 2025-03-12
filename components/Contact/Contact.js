'use client'

import { useState } from "react";
import styles from "./Contact.module.css"
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
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setResponse("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setResponse("Failed to send message. Please try again.");
    }
  };

  return (
    <div className={styles.contactContainer} id="contact" >
      {/* Left Side - Contact Info */}
      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Street, City, Country
        </p>
        <p>
          <FontAwesomeIcon icon={faPhoneAlt} /> +123 456 7890
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> contact@example.com
        </p>
        <div className={styles.socialIcons}>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className={styles.contactForm}>
        <h2>Get in Touch</h2>
        <p>Have questions about lessons or need more information? Reach out to us, and we’ll be happy to assist you in starting your guitar learning journey.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {response && <p className={styles.responseMessage}>{response}</p>}
      </div>
    </div>
  );
}