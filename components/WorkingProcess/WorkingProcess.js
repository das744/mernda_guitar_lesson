"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import processSteps from "./processData";
import styles from "./WorkingProcess.module.css";

gsap.registerPlugin(ScrollTrigger);

const WorkingProcess = () => {
  const processRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    // Animate Image Parts (Left Side) - Runs Only Once on Initial Load
    imageRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100, y: index % 2 === 0 ? -100 : 100 },
        { opacity: 1, x: 0, y: 0, duration: 1.2, ease: "power3.out", delay: index * 0.2 }
      );
    });

    // Animate Process Steps (Right Side) - Scroll-Triggered
    processRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        { 
          x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: index * 0.3,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
        }
      );
    });
  }, []); 

  return (
    <section id="features" className={styles.features} >
      <h1> Feature</h1>
    <div className={styles.workingProcess}>
     
      {/* Left Side - Animated Image Parts */}
      <div className={styles.imageContainer}>
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            className={`${styles.imagePart} ${styles[`part${index + 1}`]}`}
          />
        ))}
      </div>

      {/* Right Side - Process Grid */}
      <div className={styles.processGrid}>
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className={styles.processItem}
            ref={(el) => (processRefs.current[index] = el)}
          >
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <button className={styles.button}>Learn More</button>
          </div>
        ))}
      </div>
      </div>
      {/* divider */}
      <div  className={styles.zigzagContainer}>
      <svg viewBox="0 0 1440 220" className={styles.zigzagSvg}>
        <path
          fill="#fff"
          d="M0,160 C120,120 240,200 360,160 C480,120 600,200 720,160 C840,120 960,200 1080,160 C1200,120 1320,200 1440,160 L1440,320 L0,320 Z"
        />
      </svg>
      <div className={styles.zigzagContent}>
        <h2>Join Our Community</h2>
        <button className={styles.zigzagButton}>Get Started</button>
      </div>
    </div>
    </section>
  );
};

export default WorkingProcess;
