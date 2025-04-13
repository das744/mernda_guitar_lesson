"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from "./About.module.css";

const imageData = [
  {
    bigImgSrc: "/img/img2.png",
    imgSrc:  "/img/img2.png",
    title: "Experienced Instructors",
    text: "Our team consists of professional guitarists with years of teaching and performance experience, ensuring you get top-notch instruction.",
  },
  {
    bigImgSrc: "/img/img10.jpg",
    imgSrc: "/img/img10.jpg",
    title: "Tailored Lessons",
    text: "We understand that every student is different, so we personalize our lessons to fit your skill level and musical interests.",
  },
  {
    bigImgSrc: "/img/img11.jpg",
    imgSrc:  "/img/img11.jpg",
    title: "Flexible Learning Options",
    text: "Learn at your own pace with in-person or online lessons, designed to fit your schedule.",
  },
  {
    bigImgSrc: "/img/img3.png",
    imgSrc:  "/img/img3.png",
    title: "Passionate About Music",
    text: "We are committed to nurturing a love for music and helping students grow as musicians, no matter their journey.",
  },
  {
    bigImgSrc: "/img/img9.jpg",
    imgSrc:  "/img/img9.jpg",
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
    <section className={styles.aboutSection} id="about">
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
