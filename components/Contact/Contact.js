//components/Contact.js

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

import { db } from "@/lib/firebase"; // Make sure this is correct path to your Firebase config
import { collection, addDoc } from "firebase/firestore";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setResponse({ message: "", type: "" });

  //   if (!formData.name || !formData.email || !formData.message) {
  //     setResponse({ message: "All fields are required.", type: "error" });
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     await addDoc(collection(db, "messages"), {
  //       name: formData.name,
  //       email: formData.email,
  //       message: formData.message,
  //       timestamp: new Date(),
  //     });

  //     setResponse({ message: "Message sent! We'll get back soon.", type: "success" });
  //     setFormData({ name: "", email: "", message: "" });
  //   } catch (error) {
  //     console.error("Firestore error:", error);
  //     setResponse({ message: "Something went wrong. Please try again.", type: "error" });
  //   } finally {
  //     setLoading(false);
  //   }
  // };


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
  
      if (data.success) {
        setResponse({ message: data.message, type: "success" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponse({ message: data.message || "Failed to save message.", type: "error" });
      }
    } catch (error) {
      console.error("Client error:", error);
      setResponse({ message: "An error occurred. Please try again.", type: "error" });
    } finally {
      setLoading(false);
    }
  };
  



  return (
    <div className={styles.contactContainer} id="contact">
      {/* Left Side - Contact Info */}
      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 12 Nicolson Road, Mill Park - Victoria</p>
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
          <p
            className={`${styles.responseMessage} ${
              response.type === "success" ? styles.success : styles.error
            }`}
          >
            {response.message}
          </p>
        )}
      </div>
    </div>
  );
}
