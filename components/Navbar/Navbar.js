

"use client";
import { useEffect } from "react";
import gsap from "gsap";
import styles from "./Navbar.module.css";

const Navbar = () => {
  useEffect(() => {
    // Letter by letter animation for links
    document.querySelectorAll(".nav-item").forEach((link) => {
      const letters = link.textContent.trim().split("");
      link.innerHTML = ""; // Clear existing text

      letters.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.display = "inline-block";
        span.style.opacity = 0;
        link.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          y: 0,
          delay: index * 0.1,
          duration: 0.5,
          ease: "power4.out",
        });
      });
    });

    // Animate the navbar background areas
    gsap.from(`.${styles.navbarLeft}, .${styles.navbarRight}`, {
      duration: 1,
      opacity: 0,
      scale: 0.9,
      ease: "power4.out",
    });

    // Animate Sparkle Icon
    gsap.from(".sparkleIcon", {
      duration: 1.5,
      opacity: 0,
      scale: 0.5,
      rotation: 360,
      ease: "bounce.out",
    });

  }, []);

  return (
    <nav className={styles.navbar}>
      {/* Left Side */}
      <div className={styles.navbarLeft}>
        <div className={styles.logo}>MGL</div>
        <div className={styles.navLinks}>
          <a href="#about" className="nav-item"> About</a>
          <a href="#services" className="nav-item"> Services</a>
          <a href="#feature" className="nav-item"> Feature</a>
        </div>
      </div>
        {/* Sparkle Icon */}
        <div className="sparkleIcon">✨</div>

      {/* Right Side */}
      <div className={styles.navbarRight}>
        <div className={styles.connect}>
          <a href="#contact" className="nav-item"> Contact</a>
        </div>
        <a href="#contact"> <button className={styles.getQuote}>Get Free Lesson</button></a>  
      </div>

    
    </nav>
  );
};

export default Navbar;
