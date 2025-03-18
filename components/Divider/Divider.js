// components/Divider.js
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Divider.module.css";

gsap.registerPlugin(ScrollTrigger);

const Divider = () => {
  const dividerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      dividerRef.current,
      { opacity: 0, y: 50, rotate: -3 },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={dividerRef} className={styles.splitBackground}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Enhance Your Workflow</h2>
        <button ref={buttonRef} className={styles.animatedBtn}>
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default Divider;
