import Head from 'next/head'

import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
export default function Home() {
  const router = useRouter();
  const validarCorreo = (correo) => {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
  }
  const validarContrasena = (contrasena) => {
    const expresion = /^(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;
    return expresion.test(contrasena);
  }
  const mostrarAlerta = (esCorrecto) => {
    if (esCorrecto) {
      Swal.fire({
        icon: 'success',
        title: 'Inicio Correcto',
      }).then(() => {
        router.push('/administrador');
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El correo electrónico o la contraseña no son válidos',
      });
    }
  }
  const mostrarAlerta1 = (esCorrecto) => {
    if (esCorrecto) {
      Swal.fire({
        icon: 'success',
        title: 'Inicio Correcto',
      }).then(() => {
        router.push('/administrador');
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El  la contraseña no es valida',
      });
    }
  }
  
  const handleClick = () => {
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
  
    if (!validarCorreo(correo) ) {
      mostrarAlerta(false);
    }  if (!validarContrasena(contrasena)) {
      mostrarAlerta1(false);
    }
   if(validarCorreo(correo)&&validarContrasena(contrasena)){
      mostrarAlerta(true);
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
        <p className={styles.bigTitle}>INMOBILIARIA</p>
      </div>

      <div className={styles.circle}>
        <Image src="https://alanandreup.github.io/Tarea/1.png" alt="Círculo" layout="fill" objectFit="cover" />
        <p className={`${styles.title} ${styles.bigTitle}`}>INMOBILIARIA</p>
      </div>
      <div className={styles.rectangle}>
        <for></for>
        <p className={styles.subtitle}>INICIO DE SESION</p>
        <div className={styles.inputContainer}>
          <p className={styles.label}>USUARIO</p>
          <input type="text" className={styles.input} id="correo" />


          <p className={styles.label}>CONTRASEÑA</p>
          <input type="password" className={styles.input} id="contrasena" />
        </div>
       
        <Link href='/recuperar' className={styles.forgotPassword}>Olvidaste tu contraseñaa</Link>
        <p></p>
        <Link href='/crear' className={styles.forgotPassword}>Crea Tu Cuenta</Link>
        <p></p>
        <button className={styles.loginButton} onClick={handleClick}>INICIAR SESION</button>
      </div>
    </div>
    </motion.div>
  )
}

