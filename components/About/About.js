"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from "./About.module.css";

const imageData = [
  {
    bigImgSrc: "https://plus.unsplash.com/premium_photo-1723860011127-5029e9b914be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D", // Add corresponding big image for each small image
    imgSrc: "https://plus.unsplash.com/premium_photo-1723860011127-5029e9b914be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
    title: "Experienced Instructors",
    text: "Our team consists of professional guitarists with years of teaching and performance experience, ensuring you get top-notch instruction.",
  },
  {
    bigImgSrc: "https://plus.unsplash.com/premium_photo-1741030501566-e0183860a80f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D",
    imgSrc: "https://plus.unsplash.com/premium_photo-1741030501566-e0183860a80f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tailored Lessons",
    text: "We understand that every student is different, so we personalize our lessons to fit your skill level and musical interests.",
  },
  {
    bigImgSrc: "https://images.unsplash.com/photo-1740953669187-70139f77d1ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    imgSrc: "https://images.unsplash.com/photo-1740953669187-70139f77d1ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    title: "Flexible Learning Options",
    text: "Learn at your own pace with in-person or online lessons, designed to fit your schedule.",
  },
  {
    bigImgSrc: "https://plus.unsplash.com/premium_photo-1741005641996-f0e15c7c276b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
    imgSrc: "https://plus.unsplash.com/premium_photo-1741005641996-f0e15c7c276b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
    title: "Passionate About Music",
    text: "We are committed to nurturing a love for music and helping students grow as musicians, no matter their journey.",
  },
  {
    bigImgSrc: "https://images.unsplash.com/photo-1741070487520-907d1359cb95?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D",
    imgSrc: "https://images.unsplash.com/photo-1741070487520-907d1359cb95?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D",
    title: "All Ages & Levels Welcome",
    text: "Whether you're just starting or looking to perfect your technique, we offer lessons for all ages and levels.",
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      `.${styles.infoBox}`,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      `.${styles.numbers}`,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    // Animate big image transition
    gsap.fromTo(
      `.${styles.bigImage}`,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
  }, [currentIndex]);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutHeading}>
        <h2>About</h2>
      </div>
      <div className={styles.imageContainer}>
        {/* Dynamically update big image based on currentIndex */}
        <img className={styles.bigImage} src={imageData[currentIndex].bigImgSrc} alt="Big Image" />
        
        <div className={styles.infoBox}>
          <img src={imageData[currentIndex].imgSrc} alt="Small Image" className={styles.smallImage} />
          <h3>{imageData[currentIndex].title}</h3>
          <p>{imageData[currentIndex].text}</p>
        </div>
        <div className={styles.numbers}>{`0${currentIndex + 1} / 05`}</div>
      </div>
    </section>
  );
};

export default About;
