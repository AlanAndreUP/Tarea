import { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import styles from '@/styles/Crear.module.css';
import Image from 'next/image';
import Link from 'next/link';
import validator from 'validator';
import { useRouter } from 'next/router';

export default function Crear() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const handleConfirmPasswordChange = async (e) => {
    if (!validator.matches(password, /(?=.*[A-Z])(?=.*\d{2})/)) {
      Swal.fire({
        icon: 'error',
        title: 'Contraseña no segura',
        text: 'La contraseña debe tener al menos una mayúscula y dos números.',
      });
      return;
    }
  };

  const handlePasswordChange = async (e) => {
    if (!validator.matches(password, /(?=.*[A-Z])(?=.*\d{2})/)) {
      Swal.fire({
        icon: 'error',
        title: 'Contraseña no segura',
        text: 'La contraseña debe tener al menos una mayúscula y dos números.',
      });
      return;
    }
  };

  const handleEmailChange = async (e) => {
    if (!validator.matches(password, /(?=.*[A-Z])(?=.*\d{2})/)) {
      if (!validator.isEmail(email)) {
        Swal.fire({
          icon: 'error',
          title: 'Email no válido',
          text: 'Por favor ingrese un email válido.',
        });
        return;
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos
    if (!nombre || !email || !password || !confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Campos vacíos',
        text: 'Por favor complete todos los campos.',
      });
      return;
    }


    if (password.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Contraseña demasiado corta',
        text: 'La contraseña debe tener al menos 6 caracteres.',
      });
      return;
    }


    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Contraseñas no coinciden',
        text: 'Las contraseñas ingresadas no coinciden.',
      });
      return;
    }

    // Enviar datos a servidor
    try {
      const response = await fetch('/api/CrearUsuario', {
        method: 'POST',
        body: JSON.stringify({ nombre, email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Cuenta creada con éxito',
        }).then(() => {
          // Redirigimos al usuario a la página principal
          router.push('/loginadministrador');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error al crear cuenta',
          text: data.message || 'Por favor intente nuevamente.',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error al crear cuenta',
        text: 'Por favor intente nuevamente.',
      });
    }
  };



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.container}>
        <Image
          src="https://alanandreup.github.io/Tarea/2.png"
          alt="background image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.titleContainer}>
          <p className={styles.bigTitle}>CREA TU CUENTA</p>
        </div>
        <div className={styles.rectangle}>
          <div className={styles.inputContainer}>
            <p className={styles.label}>NOMBRE</p>
            <input
              type="text"
              className={styles.input}
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
            />

            <p className={styles.label}>CORREO ELECTRÓNICO</p>
            <input
              type="email"
              className={styles.input}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <p className={styles.label}>CONTRASEÑA</p>
            <input
              type="password"
              className={styles.input}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <p className={styles.label}>CONFIRMAR CONTRASEÑA</p>
            <input
              type="password"
              className={styles.input}
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <p></p>
            <Link href="/loginadministrador" className={styles.label}>
              Ya tienes cuenta? Inicia sesión
            </Link>
          </div>
          <div className={styles.circle}>
            <Image src="https://alanandreup.github.io/Tarea/3.png" alt="Círculo" layout="fill" objectFit="cover" />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.loginButton} onClick={handleSubmit}>
              Crea tu cuenta
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

}
