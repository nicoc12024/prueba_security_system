import React from "react";
import styles from "./Interests.module.css";


const interestsData = ["Ajedrez", "Programar", "Tenis", "Aprender cosas nuevas"];

const Interests = () => {
  return (
    <section className={styles.interests}>
      <h2>Intereses</h2>
      <ul>
        {interestsData.map((interest, index) => (
          <li key={index}>
            <span>{interest}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
