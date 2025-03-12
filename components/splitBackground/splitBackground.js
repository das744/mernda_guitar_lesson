// components/SplitBackground.js
"use client";

import { useState } from "react";
import styles from "./splitBackground.module.css";

const SplitBackground = () => {
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <div className={styles.splitContainer}>
      <div
        className={`${styles.split} ${styles.left} ${
          hoveredSide === "left" ? styles.expanded : ""
        }`}
        onMouseEnter={() => setHoveredSide("left")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className={styles.content}>
          <h2>Left Side</h2>
          <p>Hover to expand this section.</p>
        </div>
      </div>

      <div
        className={`${styles.split} ${styles.right} ${
          hoveredSide === "right" ? styles.expanded : ""
        }`}
        onMouseEnter={() => setHoveredSide("right")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className={styles.content}>
          <h2>Right Side</h2>
          <p>Hover to expand this section.</p>
        </div>
      </div>
    </div>
  );
};

export default SplitBackground;
