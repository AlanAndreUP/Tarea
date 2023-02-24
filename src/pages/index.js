import Head from 'next/head'

import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    // Aquí iría el código para cambiar la contraseña

    // Redirigimos al usuario a la página principal
    router.push('/administrador');
    alert('Inicio Correcto ');
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
        <p className={styles.subtitle}>INICIO DE SESION</p>
        <div className={styles.inputContainer}>
          <p className={styles.label}>USUARIO</p>
          <input type="text" className={styles.input} />
          <p className={styles.label}>CONTRASEÑA</p>
          <input type="password" className={styles.input} />
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

