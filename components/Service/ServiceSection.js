
"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./ServiceSection.module.css";
import servicesData from "./serviceData";

const ServicesSection = () => {
  useEffect(() => {
    gsap.from(`.${styles.serviceHeading}`, {
      x: -50,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });

    gsap.fromTo(
      `.${styles.serviceBox}`,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.3 }
    );
  }, []);

  return (
    <section className={styles.servicesSection} id="services">
     
     <div className={styles.headingContainer}>
        <h2 className={styles.serviceHeading}> Services</h2>
      </div>

      {/* Services Grid Container */}
      <div className={styles.servicesGrid}>
        {/* First Row (3 Columns: 1fr 2fr 1fr) */}
        <div className={styles.servicesRow}>
          {servicesData.slice(0, 3).map((service, index) => (
            <div
              key={service.id}
              className={`${styles.serviceBox} ${
                index === 1 ? styles.large : styles.small
              }`}
            >
              <img className={styles.serviceImage} src={service.image} alt={service.title} />
              <div className={styles.overlay}>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
              <div className={styles.serviceName}>{service.title}</div>
            </div>
          ))}
        </div>

        {/* Second Row (2 Columns: 2fr 1fr) */}
        <div className={styles.servicesRow}>
          {servicesData.slice(3, 5).map((service, index) => (
            <div
              key={service.id}
              className={`${styles.serviceBox} ${
                index === 0 ? styles.extraLarge : styles.medium
              }`}
            >
              <img className={styles.serviceImage} src={service.image} alt={service.title} />
              <div className={styles.overlay}>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
              <div className={styles.serviceName}>{service.title}</div>
            </div>
          ))}
        </div>
      </div>
       {/* Vertical Heading Section */}
    
    </section>
  );
};

export default ServicesSection;


