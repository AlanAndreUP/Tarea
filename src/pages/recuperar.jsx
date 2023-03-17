import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Recuperar.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    // Aquí iría el código para crear la cuenta
  
    Swal.fire({
      icon: 'success',
      title: 'Contraseña Cambiada con exito ',
    }).then(() => {
      // Redirigimos al usuario a la página principal
      router.push('/loginadministrador');
    });
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
        <p className={styles.bigTitle}>RECUPERAR TU CONTRASEÑA</p>
      </div>

      <div className={styles.circle}>
        <Image src="https://alanandreup.github.io/Tarea/4.png" alt="Círculo" layout="fill" objectFit="cover" />
        <p className={`${styles.title} ${styles.bigTitle}`}>INMOBILIARIA</p>
      </div>
      <div className={styles.rectangle}>
        <p className={styles.subtitle}>RECUPERACION DE CONTRASEÑA</p>
        <div className={styles.inputContainer}>
          <p className={styles.label}>NUEVA CONTRASEÑA</p>
          <input type="text" className={styles.input} />
          <p className={styles.label}>CONFIRMA CONTRASEÑA</p>
          <input type="password" className={styles.input} />
        </div>
        <button className={styles.loginButton} onClick={handleClick}>
          CAMBIAR CONTRASEÑA
        </button>
      </div>
    </div>
    </motion.div>
  )
}
