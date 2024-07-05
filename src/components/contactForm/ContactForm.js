import React from "react";
import { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const validateField = (name, value) => {
    let error = "";

    if (name === "name" && value.length > 35) {
      error = `Excediste ${value.length - 35} caracteres, el máximo es 35`;
    } else if (name === "email" && value.length > 50) {
      error = `Excediste ${value.length - 50} caracteres, el máximo es 50`;
    } else if (name === "message" && value.length > 800) {
      error = `Excediste ${value.length - 800} caracteres, el máximo es 800`;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameError = validateField("name", formData.name);
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);

    if (!nameError && !emailError && !messageError) {
      setSuccessMessage("Mensaje enviado con éxito");
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
    } else {
      setErrors({ name: nameError, email: emailError, message: messageError });
      setSuccessMessage("");
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <section className={styles.contactForm}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.formGroup}>
          <textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <p className={styles.error}>{errors.message}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
      {successMessage && <p className={styles.success}>{successMessage}</p>}
    </section>
  );
};

export default ContactForm;
