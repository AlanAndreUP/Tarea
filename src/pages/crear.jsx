import { Inter } from '@next/font/google';
import styles from '@/styles/Crear.module.css';
import Image from 'next/image';
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
        title: 'Cuenta creada con éxito',
      }).then(() => {
        // Redirigimos al usuario a la página principal
        router.push('/');
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
        src="/2.png"
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
          <input type="text" className={styles.input} />
          <p className={styles.label}>USUARIO</p>
          <input type="password" className={styles.input} />
          <p className={styles.label}>CONTRASEÑA</p>
          <input type="text" className={styles.input} />
          <p className={styles.label}>CONFIRMA CONTRASEÑA</p>
          <input type="password" className={styles.input} />
          <p></p>
          <Link href='/' className={styles.label}>Ya tienes cuenta Inicia sesion</Link>
        </div>
        <div className={styles.circle}>
          <Image src="/3.png" alt="Círculo" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.buttonContainer}>
        <button className={styles.loginButton} onClick={handleClick}>
          Crea tu cuenta
        </button>
         
        </div>
       
      </div>
    </div>
    </motion.div>
  );
}
