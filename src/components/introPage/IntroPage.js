import React from "react";
import styles from "./IntroPage.module.css";

const IntroPage = ({ fadeOut, fadeOutText }) => {
  return (
    <div className={`${styles.introPage} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={`${styles.introText} ${fadeOutText ? styles.fadeOut : ""}`}>
        <h1>Desarrollador Frontend - Security and System</h1>
        <h2>Prueba técnica de Nicolás Cabello</h2>
      </div>
    </div>
  );
};

export default IntroPage;
