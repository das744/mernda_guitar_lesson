'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from './Quote.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const quoteImg = "/img/img5.png";

export default function Quote() {
  const formRef = useRef(null);
  const contentRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", requirement: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    });
    gsap.from(formRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: 'power2.out',
      delay: 0.5,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: '', text: '' }); // Clear any previous messages

    try {
      const response = await fetch('/api/freeLesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage({ type: 'success', text: 'Your request has been submitted successfully!' });
        setFormData({ name: "", email: "", requirement: "", message: "" });
      } else {
        setStatusMessage({ type: 'error', text: data.message || 'Failed to submit. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatusMessage({ type: 'error', text: 'An error occurred. Please try again later.' });
    }
    setIsSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide} ref={contentRef}>
        <div className={styles.imageContainer}>
          <img src={quoteImg} alt="Guitar" className={styles.wideImage} />
        </div>
        <h2 className={styles.heading}>Master the Guitar with Expert-Led Lessons.</h2>
        <p className={styles.text}>Unlock your musical potential with personalised guitar lessons from skilled instructors.</p>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} className={styles.icon} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} className={styles.icon} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} /></a>
        </div>
      </div>

      <div className={styles.rightSide} ref={formRef}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.formHeading}>Request for a Complimentary Lesson</h3>

          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" name="name" className={styles.input} value={formData.name} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" name="email" className={styles.input} value={formData.email} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label>Requirement</label>
            <select name="requirement" className={styles.select} value={formData.requirement} onChange={handleChange} required>
              <option value="">Select an option</option>
              <option value="online">Online Guitar Lesson</option>
              <option value="in-person">In-Person Guitar Lesson</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea name="message" className={styles.textarea} rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <button className={styles.button} type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Get Quote'}
          </button>

          {/*  Message below form */}
          {statusMessage.text && (
            <p
              className={`${styles.statusMessage} ${
                statusMessage.type === 'success' ? styles.success : styles.error
              }`}
            >
              {statusMessage.text}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
