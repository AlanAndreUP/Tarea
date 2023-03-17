
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import Header from "../components/Header";
import styles from '@/styles/Home.module.css'
import { useState } from 'react';
import Swal from 'sweetalert2';
import validator from 'validator';
import { useRouter } from 'next/router';
const Home = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();const validarCorreo = (email) => {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(email);
  }
  const validarContrasena = (password) => {
    const expresion = /^(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;
    return expresion.test(password);
  }
  const mostrarAlerta1 = (esCorrecto) => {
    if (esCorrecto) {
      Swal.fire({
        icon: 'success',
        title: 'Inicio Correcto',
      }).then(() => {
        router.push('/index');
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: ' la contraseña no es valida',
      });
    }
  }
  const mostrarAlerta = (esCorrecto) => {
    if (esCorrecto) {
      Swal.fire({
        icon: 'success',
        title: 'Inicio Correcto',
      }).then(() => {
        router.push('/index');
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: ' el correo no es valido',
      });
    }
  }
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
    if (!validarCorreo(email) ) {
      mostrarAlerta(false);
    }  if (!validarContrasena(password)) {
      mostrarAlerta1(false);
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
      const response = await fetch('/api/CrearUsuarioNormal', {
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
          router.push('/index');
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
      <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
        <Head>
          <title>Inmobilaria UP</title>
        </Head>
        <Header />
        <main className="flex flex-1 w-full flex-col items-center  text-center px-4 sm:mb-0 mb-8">

          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5">
            Crea tu  <span className="text-blue-600">Cuenta</span>
          </h1><div className="h-[250px] flex flex-col items-center space-y-6 max-w-[670px] ">


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
              <Link href="/loginUser" className={styles.label}>
                Ya tienes cuenta? Inicia sesión
              </Link>
            </div>
            <div className="max-w-xl text-gray-300">
              Recupera tu cuenta desde aqui
            </div>
            <button
              onClick={handleSubmit}
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
