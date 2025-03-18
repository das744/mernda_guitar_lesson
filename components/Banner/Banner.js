"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from "./Banner.module.css";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: "/img/img1.jpg", text: "Image 1", buttonText: "Learn More" },
    { src: "https://images.unsplash.com/photo-1740916856932-7b02aeca973b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D", text: "Image 2", buttonText: "Explore" },
    { src: "https://plus.unsplash.com/premium_photo-1723860011127-5029e9b914be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D", text: "Image 3", buttonText: "Discover" },
    { src: "https://images.unsplash.com/photo-1740676176364-03eb7bdb2bb4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D", text: "Image 4", buttonText: "Get Started" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(".slide-image", { opacity: 0, duration: 1, ease: "power2.out" }); // Fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000); // Wait for fade-out before changing image
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".slide-image",
      { opacity: 0.5, scale: 1.1 }, // Image appears with a lighter opacity and slight zoom
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      ".text",
      { x: -100, opacity: 0 }, // Text comes from left
      { x: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      ".button",
      { x: 100, opacity: 0 }, // Button comes from right
      { x: 0, opacity: 1, duration: 1, delay: 1, ease: "power3.out" }
    );
  }, [currentIndex]);

  return (
    <div className={styles.heroSlider}>
      <div className={styles.sliderContainer}>
        <div className={styles.slide}>
          <img
            className={`slide-image ${styles.slideImage}`}
            src={images[currentIndex].src}
            alt="Slide"
          />
          <div className={styles.slideText}>
            <h1 className={`text ${styles.text}`}>{images[currentIndex].text}</h1>
            <button className={`button ${styles.button}`}>
              {images[currentIndex].buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
