
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import Header from "../components/Header";
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
const Home = () => {
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
        const response = await fetch('/api/LoginNormal', {
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
            router.push('/VistaUsuario');
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
        router.push('/VistaUsuario');
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

    if (!validarCorreo(correo)) {
      mostrarAlerta(false);
    } if (!validarContrasena(contrasena)) {
      mostrarAlerta1(false);
    }
    if (validarCorreo(correo) && validarContrasena(contrasena)) {

      mostrarAlerta(true);

    };


  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
        <Head>
          <title>Inmobilaria UP</title>
        </Head>
        <Header />
        <main className="flex flex-1 w-full flex-col items-center  text-center px-4 mt-4 sm:mb-0 mb-8">

          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5">
            Renta  tu <span className="text-blue-600">Edificio</span> de ensueño
          </h1><div className="h-[250px] flex flex-col items-center space-y-6 max-w-[670px] -mt-8">
            <br></br>
            <div className="max-w-xl text-gray-300">
              Inicia sesion o crea tu <Link href="/crearUsuario">cuenta desde aqui</Link>
            </div>
            <div className={styles.inputContainer}>
              <p className={styles.label}>USUARIO</p>
              <input type="text" className={styles.input} id="correo" />


              <p className={styles.label}>CONTRASEÑA</p>
              <input type="password" className={styles.input} id="contrasena" />
            </div>
            <div className="max-w-xl text-gray-300">
              ¿Eres Administrador? <Link href="loginadministrador"> Inicia aqui</Link>
            </div>
            <button
              onClick={handleClick}
              className="bg-gray-200 text-black font-semibold py-3 px-6 rounded-2xl flex items-center space-x-2"
            >

              <span>Iniciar Sesion</span>
            </button>
          </div>
        </main>
      </div>
    </motion.div>

  );
};

export default Home;
