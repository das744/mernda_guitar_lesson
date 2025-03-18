"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Reviews.module.css";

const reviews = [
  { quote: "Excellent service, highly recommended!", name: "Alice Johnson" },
  { quote: "Fast and reliable. Would use again!", name: "Bob Smith" },
  { quote: "Great experience from start to finish.", name: "Charlie Lee" },
  { quote: "Very professional and friendly team.", name: "Diana Green" },
  { quote: "Exceptional customer support!", name: "Edward Carter" },
  { quote: "Loved the attention to detail!", name: "Fiona Blake" },
  { quote: "Quality work delivered on time.", name: "George Adams" },
  { quote: "Best experience I’ve had so far!", name: "Hannah White" },
  { quote: "Smooth process and great results.", name: "Ian Thomas" },
  { quote: "Would recommend to anyone!", name: "Julia Brown" },
];

export default function Reviews() {
  const scrollRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      gsap.to(scrollRef.current, {
        scrollLeft: direction === "next" ? "+=400" : "-=400",
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div className={styles.reviewsContainer} id="reviews">
      <h2 className={styles.reviewsTitle}>What Our Customers Say</h2>
      <div className={styles.reviewsWrapper}>
        <button className={styles.navBtn} onClick={() => scroll("prev")}>
          &lt;
        </button>
        <div className={styles.reviewsGrid} ref={scrollRef}>
          {reviews.map((review, i) => (
            <div key={i} className={styles.reviewCard}>
             <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteIcon} />
              <p className={styles.quote}>{review.quote}</p>
              <h4 className={styles.name}>- {review.name}</h4>
            </div>
          ))}
        </div>
        <button className={styles.navBtn} onClick={() => scroll("next")}>
          &gt;
        </button>
      </div>
    </div>
  );
}
