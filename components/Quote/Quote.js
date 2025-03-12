'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Quote.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Quote() {
  const formRef = useRef(null);
  const contentRef = useRef(null);

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

  return (
    <div className={styles.container}>
      {/* Left Side */}
      <div className={styles.leftSide} ref={contentRef}>
        <div className={styles.imageContainer}>
          <img src="https://plus.unsplash.com/premium_photo-1741030501566-e0183860a80f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D" alt="Wide" className={styles.wideImage} />
          {/* <img src="https://images.unsplash.com/photo-1740953669187-70139f77d1ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D" alt="Tall" className={styles.tallImage} /> */}
        </div>
        <h2 className={styles.heading}>Master the Guitar with Expert-Led Lessons.</h2>
        <p className={styles.text}>Unlock your musical potential with personalized guitar lessons from skilled instructors. Whether you're a beginner or looking to refine your technique, we offer lessons tailored to help you achieve your musical goals.</p>
        <div className={styles.socialIcons}>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} className={styles.icon}/>
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
          </a>
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className={styles.rightSide} ref={formRef}>
        <form className={styles.form}>
          <h3 className={styles.formHeading}>Request for a Complementary Lesson</h3>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label>Requirement</label>
            <select className={styles.select} required>
              <option value="">Select an option</option>
              <option value="web-design">Online Guitar Lesson</option>
              <option value="seo">In Person Guitar Lesson</option>
              {/* <option value="marketing">Digital Marketing</option> */}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea className={styles.textarea} rows="4" required></textarea>
          </div>
          <button className={styles.button}>Get Quote</button>
        </form>
      </div>
    </div>
  );
}