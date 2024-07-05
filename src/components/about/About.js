import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <h2>Sobre mí</h2>
      <p>
        Desarrollador de frontend con más de un año de experiencia, especializado en
        React. Con sólidos conocimientos en JavaScript (ES6+), Git, CSS y Tailwind CSS.
        Experiencia usando Figma para el traslado de diseños a código. Con habilidades en
        herramientas modernas de gestión de estados como Redux. He trabajado en entornos
        dinámicos y de ritmo acelerado, incluyendo una startup sueca y proyectos
        freelance. Me destaco por mi atención al detalle, proactividad y enfoque en el
        crecimiento continuo, aportando valor a los equipos de desarrollo.
      </p>
    </section>
  );
};

export default About;
