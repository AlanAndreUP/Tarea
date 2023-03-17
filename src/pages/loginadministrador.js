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
  const mostrarAlerta = async (esCorrecto) => {
    if (esCorrecto) {
      try {
        const response = await fetch('/api/Login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            correo: document.getElementById('correo').value,
            contrasena: document.getElementById('contrasena').value
          })
        });
        if (response.ok) {
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
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al iniciar sesión. Por favor, intenta de nuevo más tarde.',
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El correo electrónico o la contraseña no son válidos',
      });
    }
  };
  
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
        text: ' la contraseña no es valida',
      });
    }
  }

  const handleClick = async () => {
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
  
    if (!validarCorreo(correo) ) {
      mostrarAlerta(false);
    }  if (!validarContrasena(contrasena)) {
      mostrarAlerta1(false);
    }
   if(validarCorreo(correo)&&validarContrasena(contrasena)){
    
    mostrarAlerta(true);
    
  };
    
    
  };
  
  
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className={styles.container + " col-12 col-md-12 col-sm-12"}>
        
        <div className={styles.titleContainer + " text-center col-12 col-md-12 col-sm-12"}>
        <p className={styles.bigTitle}>INMOBILIARIA</p>
      </div>
     <div className='row'>
      <div className={styles.circle +  "  col-6 col-md-6 col-sm-12"}>
        <Image src="https://alanandreup.github.io/Tarea/1.png" alt="Círculo" layout="fill" objectFit="cover" />
        <p className={`${styles.title} ${styles.bigTitle}`}>INMOBILIARIA</p>
      </div>
      <div className={styles.rectangle + "  col-6 col-md-6 col-sm-12"}>
      
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
    </div>
    </motion.div>
  )
}

