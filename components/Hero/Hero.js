"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    // Animate heading lines with staggered effect
    gsap.from(`.${styles.line1}`, {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 0.5,
    });

    gsap.from(`.${styles.line2}`, {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 1,
    });

    gsap.from(`.${styles.line3}`, {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 1.5,
    });

    gsap.from(`.${styles.line4}`, {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 2,
    });

    // Animate small image + text content
    gsap.from(".smallImgText", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
    });

    // Animate imageContainer (Right Side Images)
    gsap.from(".heroRight img", {
      opacity: 0,
      y: (i) => (i % 2 === 0 ? -100 : 100), // Alternate directions for images
      duration: 1,
      delay: 0.5,
      stagger: 0.3,
    });

    // Animate the heroLeft (small image and text) on scroll
    gsap.from(".heroLeft", {
      opacity: 0,
      y: 100,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".heroLeft", // Triggered when this element comes into view
        start: "top 80%",
        end: "top 60%",
        scrub: true,
        markers: false,
      },
    });
    

    // Animate imageContainer on scroll
    gsap.from(".imageContainer", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".imageContainer", // Triggered when this element comes into view
        start: "top 80%",
        end: "top 60%",
        scrub: true,
        markers: false,
      },
    });
  }, []);

  return (
   < div>
    <section className={styles.heroSection}>
      {/* First Row */}
      <div className={styles.heroTopRow}>
        {/* Left Side */}
        <div className={styles.heroLeft}>
          <h1>
            <span className={styles.line1}>Line 1</span>
            <span className={styles.line2}>Line 2</span>
            <span className={styles.line3}>Line 3</span>
            <span className={styles.line4}>Line 4</span>
          </h1>
          <div className="smallImgText">
            <img
              src="https://images.unsplash.com/photo-1740393148421-2159bf9e8d8e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjV8fHxlbnwwfHx8fHw%3D"
              alt="Small Square"
              className={styles.smallImg}
            />
            <div className={styles.textContent}>
              <p>Some text beside the small image.</p>
              <button className={styles.btn}>Click Me</button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className={styles.heroRight}>
          <div className={styles.imageContainer}>
            <div className={`${styles.imgWrapper} ${styles.img1Wrapper}`}>
              <img
                src="https://images.unsplash.com/photo-1740393148421-2159bf9e8d8e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjV8fHxlbnwwfHx8fHw%3D"
                alt="Image 1"
                className={styles.img1}
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={`${styles.imgWrapper} ${styles.img2Wrapper}`}>
              <img
                src="https://images.unsplash.com/photo-1740393148421-2159bf9e8d8e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjV8fHxlbnwwfHx8fHw%3D"
                alt="Image 2"
                className={styles.img2}
              />
              <div className={styles.overlay}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className={styles.sparkleLine} />

      {/* Second Row */}
      <div className={styles.gridLayout}>
        <div className={styles.left}>
          <div className={styles.circleImage}>
            <img
              src="https://images.unsplash.com/photo-1740393148421-2159bf9e8d8e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjV8fHxlbnwwfHx8fHw%3D"
              alt="Circle Image"
            />
            <p>Text Next to Circle Image</p>
          </div>
        </div>
        <div className={styles.right}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          </p>
        </div>
      </div>
    </section>
    <div  className={styles.dividerContainer}>
      <p className={styles.dividerText}>Explore our amazing features</p>
      <button className={styles.dividerButton}>Learn More</button>
    </div>
    </div>
  );
};

export default Hero;
