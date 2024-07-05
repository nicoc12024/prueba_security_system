import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import { TailSpin } from "react-loader-spinner";
import { MdAddAPhoto } from "react-icons/md";

const Header = () => {
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState("/profile.jpg");

  useEffect(() => {
    // Simular un retraso de 3 segundos antes de cambiar el estado de carga
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Cargar la imagen del perfil desde el almacenamiento local
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setProfileImage(storedImage);
    }

    // Limpiar el temporizador si el componente se desmonta antes de que el tiempo se cumpla
    return () => clearTimeout(timer);
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        setProfileImage(base64Image);
        localStorage.setItem("profileImage", base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.profileContainer}>
        <div className={styles.profileImageContainer}>
          {loading && (
            <div className={styles.loader}>
              <TailSpin
                visible={true}
                height="24"
                width="24"
                color="black"
                ariaLabel="tail-spin-loading"
                radius="1"
              />
            </div>
          )}
          {!loading && (
            <>
              <Image
                src={profileImage}
                alt="Profile"
                width={150}
                height={150}
                className={styles.profileImage}
              />
              <MdAddAPhoto
                size={25}
                className={styles.photoIcon}
                onClick={() => document.getElementById("profileImageInput").click()}
              />
            </>
          )}
        </div>
        <input
          type="file"
          id="profileImageInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <div className={styles.textContainer}>
          <h1 className={styles.name}>Nicolás</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
