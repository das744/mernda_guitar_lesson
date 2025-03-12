'use client'

import React, { useState } from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage("Subscription successful!");
      setEmail(""); // Reset email field
    } else {
      setMessage(data.message || "Something went wrong. Try again!");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1: Company Info */}
        <div className={styles.companyInfo}>
          <h2>MyGuitar</h2>
          <p>At [Your Company Name], we’re passionate about helping people learn and grow as musicians. Our guitar lessons are designed to inspire, challenge, and guide you on your musical path. Join us today and start your journey toward mastering the guitar.</p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className={styles.navLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Subscribe Section */}
        <div className={styles.subscribe}>
          <h3>Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <button type="submit">Subscribe</button>
          </form>
          {message && <p>{message}</p>} {/* Show success or error message */}

          {/* Social Media Icons */}
          <div className={styles.socialIcons}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={styles.bottomFooter}>
        <p>© 2025 PrimeDesign. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

