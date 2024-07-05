"use client";

import { useState, useEffect } from "react";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Interests from "../components/interests/Interests";
import ContactForm from "../components/contactForm/ContactForm";
import IntroPage from "../components/introPage/IntroPage";
import styles from "./page.module.css";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOutText, setFadeOutText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTextTimer = setTimeout(() => {
      setFadeOutText(true);
    }, 1500);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const removeTimer = setTimeout(() => {
      setShowIntro(false);
    }, 3500);

    return () => {
      clearTimeout(fadeTextTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className={styles.container}>
      {showIntro && <IntroPage fadeOutText={fadeOutText} fadeOut={fadeOut} />}
      <Header />
      <About />
      <Interests />
      <ContactForm />
    </div>
  );
}
