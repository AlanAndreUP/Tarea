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
        src="https://alanandreup.github.io/Tarea/22.png"
        alt="background image"
         layout="fill"
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        quality={100}
      />
    
    </motion.div>
  )
}
